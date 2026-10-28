import {chromium} from '../qa/node_modules/playwright/index.mjs';
import AxeBuilder from '../qa/node_modules/@axe-core/playwright/dist/index.mjs';
import {createAemsServer} from '../serve.mjs';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
console.log('Imports ready');const out='outputs/ui-audit';await mkdir(out,{recursive:true});
const server=await createAemsServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));const origin=`http://127.0.0.1:${server.address().port}`;
console.log('Server ready',origin);const browser=await chromium.launch({headless:true,timeout:20000});console.log('Browser ready');const context=await browser.newContext({reducedMotion:'reduce'});await context.addInitScript(()=>{const original=HTMLCanvasElement.prototype.getContext;HTMLCanvasElement.prototype.getContext=function(type,...args){if(type==='webgl'||type==='webgl2'||type==='experimental-webgl')return null;return original.call(this,type,...args);};});const page=await context.newPage();
const errors=[];page.on('pageerror',e=>errors.push(e.message));
const content=JSON.parse(await readFile('dist/content.json','utf8'));const routes=[...Object.keys(content),'products.html'];const results=[];const contrast=[];
try{
for(const width of (process.env.CONTRAST_ONLY?[]:[320,390,768,1024,1440,1920])){
 await page.setViewportSize({width,height:1000});
 for(const route of routes){
  await page.goto(origin+'/'+route,{waitUntil:'domcontentloaded',timeout:15000});await page.waitForSelector('main h1');await page.waitForTimeout(60);
  const data=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,bodyWidth:document.documentElement.scrollWidth,broken:[...document.images].filter(i=>i.getAttribute("src")&&i.complete&&!i.naturalWidth).map(i=>i.src),h1:document.querySelector('h1').textContent}));
  results.push({width,route,...data});
 }
 console.log(`Checked ${routes.length} pages at ${width}px`);
}
for(const width of [390,1440]){
 await page.setViewportSize({width,height:1000});
 for(const route of routes){
  await page.goto(origin+'/'+route,{waitUntil:'domcontentloaded',timeout:15000});await page.waitForSelector('main h1');await page.waitForTimeout(250);
  const result=await new AxeBuilder({page}).withRules(['color-contrast']).analyze();contrast.push({width,route,violations:result.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}))});
  if(route==='labfurniture.html'||route==='reverselaminarflow.html'){
   await page.locator('[data-equipment="photo"]').click();await page.locator('.equipment-showcase').scrollIntoViewIfNeeded();await page.waitForTimeout(100);
   await page.screenshot({path:`${out}/${width}-${route}.png`});
  }
  if(route==='index.html')await page.screenshot({path:`${out}/${width}-home.png`,fullPage:true});
 }
}
if(results.some(r=>r.overflow||r.broken.length)||contrast.some(r=>r.violations.length)||errors.length)process.exitCode=1;await writeFile(`${out}/report.json`,JSON.stringify({results,contrast,errors},null,2));console.log(JSON.stringify({checks:results.length,overflow:results.filter(r=>r.overflow),broken:results.filter(r=>r.broken.length),contrast:contrast.map(r=>({width:r.width,route:r.route,nodes:r.violations.flatMap(v=>v.nodes)})).filter(r=>r.nodes.length),errors},null,2));
}finally{await browser.close();await new Promise(r=>server.close(r));}

