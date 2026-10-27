import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {JSDOM,VirtualConsole} from '../qa/node_modules/jsdom/lib/api.js';
import {resolvePage,aliases,pagePath} from '../dist/routes.js';
import {createAemsServer} from '../serve.mjs';

const content=JSON.parse(await readFile(new URL('../dist/content.json',import.meta.url),'utf8'));
const pages=[...Object.keys(content),'products.html'];
const shell=await readFile(new URL('../dist/index.html',import.meta.url),'utf8');
const root=path.resolve('dist');
let run=0;
async function render(urlPath){
  const dom=new JSDOM(shell,{url:`http://aems.test${urlPath}`,pretendToBeVisual:true,virtualConsole:new VirtualConsole()});
  const win=dom.window;
  const media=query=>({matches:query.includes('prefers-reduced-motion'),media:query,addEventListener(){},removeEventListener(){}});
  win.matchMedia=media;win.HTMLCanvasElement.prototype.getContext=()=>null;
  const noopObserver=class{observe(){}unobserve(){}disconnect(){}};
  const globals={window:win,document:win.document,location:win.location,navigator:win.navigator,FormData:win.FormData,
    matchMedia:media,IntersectionObserver:noopObserver,ResizeObserver:noopObserver,
    requestAnimationFrame:()=>0,scrollTo:()=>{},scrollY:0,innerHeight:800,
    addEventListener:win.addEventListener.bind(win),fetch:async input=>{
      assert.equal(String(input),'/content.json');return {ok:true,json:async()=>structuredClone(content)};
    }};
  for(const [name,value] of Object.entries(globals))Object.defineProperty(globalThis,name,{value,writable:true,configurable:true});
  const originalError=console.error;
  console.error=(...args)=>{if(!String(args[0]).includes('THREE.WebGLRenderer'))originalError(...args);};
  try{await import(`../dist/app.js?test=${++run}`);}finally{console.error=originalError;}
  return dom;
}

test('All original page names resolve with HTML, clean URL and trailing slash variants',()=>{
  for(const name of pages){
    const stem=name.replace(/\.html$/,'');
    for(const variant of [`/${name}`,`/${stem}`,`/${stem}/`])assert.equal(resolvePage(variant,pages),name,variant);
  }
  assert.equal(resolvePage('/',pages),'index.html');
  for(const [slug,name] of Object.entries(aliases)){
    assert.equal(resolvePage('/'+slug,pages),name);
    assert.equal(resolvePage('/'+slug+'/',pages),name);
  }
  for(const bad of ['/missing','/%','/assets/app.js','/unrelated/hvacservices'])assert.equal(resolvePage(bad,pages),null);
});

test('Every original navigation destination is covered',async()=>{
  const original=await readFile(new URL('../research/latest-home.html',import.meta.url),'utf8');
  const destinations=new Set([...original.matchAll(/href="([^"#]+\.html)"/g)].map(m=>m[1]));
  assert.equal(destinations.size,25);
  for(const file of destinations)assert.ok(pages.includes(file),file);
});

test('Every page actually renders its content, with working internal links, fragments and assets',async()=>{
  let checkedLinks=0;
  for(const name of pages){
    for(const suffix of ['','.html','/']){
      const pathname=name==='index.html'?'/':`/${name.replace(/\.html$/,'')}${suffix}`;
      const dom=await render(pathname);const document=dom.window.document;
      try{
        assert.ok(document.querySelector('main h1')?.textContent.trim(),`${pathname}: missing heading`);
        assert.ok(!document.querySelector('main').textContent.includes('This page could not be found'),`${pathname}: rendered 404`);
        assert.equal(document.querySelector('link[rel=canonical]').getAttribute('href'),`http://aems.test${pagePath(name)}`);
        for(const anchor of document.querySelectorAll('a[href]')){
          const target=new URL(anchor.href);
          if(target.origin!=='http://aems.test')continue;
          const destination=resolvePage(target.pathname,pages);
          assert.ok(destination,`${pathname}: broken link ${anchor.href}`);checkedLinks++;
          if(target.hash&&destination===name)assert.ok(document.getElementById(decodeURIComponent(target.hash.slice(1))),`${pathname}: missing fragment ${target.hash}`);
        }
        for(const img of document.querySelectorAll('img[src]')){
          const url=new URL(img.src);if(url.origin==='http://aems.test')await stat(path.join(root,url.pathname));
        }
        for(const table of document.querySelectorAll('.technical table'))assert.ok(table.parentElement.classList.contains('table-scroll'));
        if(content[name]&&document.querySelector('.technical')){
          assert.equal(document.querySelectorAll('.technical table').length,(content[name].content.match(/<table>/g)||[]).length);
        }
      }finally{dom.window.close();}
    }
  }
  console.log(`Verified 78 page renderings and ${checkedLinks} internal link instances; all image and fragment targets exist.`);
});

test('Catalogue filtering, search and empty state work',async()=>{
  const dom=await render('/products/');const document=dom.window.document;
  try{
    assert.equal(document.querySelectorAll('#catalogue .product-card').length,14);
    document.querySelector('[data-filter="HVAC systems"]').click();
    assert.equal(document.querySelectorAll('#catalogue .product-card').length,2);
    assert.equal(document.querySelector('[data-filter="HVAC systems"]').getAttribute('aria-pressed'),'true');
    document.querySelector('[data-filter="All products"]').click();
    const input=document.querySelector('input[type=search]');input.value='pass';input.dispatchEvent(new dom.window.Event('input'));
    assert.equal(document.querySelectorAll('#catalogue .product-card').length,2);
    input.value='no-such-equipment';input.dispatchEvent(new dom.window.Event('input'));
    assert.ok(document.querySelector('.empty'));assert.match(document.querySelector('.results-count').textContent,/0 of 14/);
  }finally{dom.window.close();}
});

test('Mobile navigation, Escape and service anchors work',async()=>{
  const dom=await render('/service/');const d=dom.window.document;
  try{
    const menu=d.querySelector('.mobile-toggle');menu.click();assert.equal(menu.getAttribute('aria-expanded'),'true');
    d.dispatchEvent(new dom.window.KeyboardEvent('keydown',{key:'Escape'}));
    assert.equal(menu.getAttribute('aria-expanded'),'false');assert.equal(menu.textContent,'☰');assert.equal(menu.getAttribute('aria-label'),'Open navigation');
    assert.ok(d.getElementById('service-details'));assert.ok(d.getElementById('retrofit'));
    assert.ok(d.querySelector('.service-world .scene-canvas'));
  }finally{dom.window.close();}
});

test('Product page retains specifications, enquiry selection and graceful WebGL fallback',async()=>{
  const dom=await render('/dynamicpassbox/');const d=dom.window.document;
  try{
    assert.ok(d.querySelector('.equipment-showcase'));assert.ok(d.querySelector('.technical table'));
    assert.equal(d.querySelector('[data-equipment=photo]').getAttribute('aria-pressed'),'true');
    assert.ok(d.querySelector('[data-equipment=model]').disabled);
    const enquiry=[...d.querySelectorAll('a')].find(a=>a.textContent.includes('Enquire about'));
    assert.equal(new URL(enquiry.href).searchParams.get('product'),'Dynamic pass box');
  }finally{dom.window.close();}
});

test('Contact validates fields and prepares the correct email without sending anything',async()=>{
  const dom=await render('/contact/?product=Dynamic%20pass%20box');const d=dom.window.document;
  try{
    const form=d.querySelector('form');assert.equal(d.querySelector('#interest').value,'Dynamic pass box');assert.equal(form.checkValidity(),false);
    d.querySelector('#name').value='Example engineer';d.querySelector('#email').value='engineer@example.test';d.querySelector('#message').value='Please discuss a clean room project.';
    assert.equal(form.checkValidity(),true);form.dispatchEvent(new dom.window.Event('submit',{bubbles:true,cancelable:true}));
    const mail=d.querySelector('.form-status a');assert.ok(mail);const target=new URL(mail.href);
    assert.equal(target.protocol,'mailto:');assert.equal(target.pathname,'info@aemsinfra.com');assert.match(target.searchParams.get('body'),/Dynamic pass box/);
  }finally{dom.window.close();}
});

test('Unknown URLs render a useful 404',async()=>{
  const dom=await render('/unknown-page');try{assert.match(dom.window.document.querySelector('main').textContent,/This page could not be found/);}finally{dom.window.close();}
});

test('HTTP requests succeed for every page variant, aliases and required assets',async()=>{
  const server=await createAemsServer(root);await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const origin=`http://127.0.0.1:${server.address().port}`;
  try{
    const requests=pages.flatMap(name=>name==='index.html'?['/','/index.html']:[`/${name}`,pagePath(name),pagePath(name)+'/']);
    for(const slug of Object.keys(aliases))requests.push('/'+slug,'/'+slug+'/');
    for(const url of requests){const response=await fetchNative(origin+url);assert.equal(response.status,200,url);assert.match(await response.text(),/<base href="\/">/);}
    for(const asset of ['/app.js','/routes.js','/motion.js','/content.json','/experience.css','/assets/gsap.min.js','/assets/ScrollTrigger.min.js'])assert.equal((await fetchNative(origin+asset)).status,200,asset);
    assert.equal((await fetchNative(origin+'/not-a-page')).status,404);
    assert.equal((await fetchNative(origin+'/assets/missing.js')).status,404);
    console.log(`Verified ${requests.length} HTTP page URLs plus runtime assets and 404 responses.`);
  }finally{await new Promise(resolve=>server.close(resolve));}
});
const fetchNative=globalThis.fetch;
