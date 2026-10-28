import {Icon} from './icons.jsx';
import React,{useState,useRef,useLayoutEffect,useEffect,useMemo} from 'react';
import {createRoot} from 'react-dom/client';
import {flushSync} from 'react-dom';
import {Header,Footer,Topbar} from './layout.jsx';
import {PageMarkup} from './pages.jsx';
import {products,pages} from './data.js';
import {ImageContext,FittedPhoto} from './components.jsx';
import {resolvePage,pagePath} from './lib/routes.js';
import {loadPhotoMeasurements} from './lib/product-photo.js';
import {initMotion,animateSwap} from './lib/motion.js';
export function App(){
 const route=resolvePage(location.pathname,[...Object.keys(pages),'products.html'])||'missing.html';
 const [menuOpen,setMenuOpen]=useState(false),[scrolled,setScrolled]=useState(scrollY>25),[backVisible,setBackVisible]=useState(scrollY>750),[image,setImage]=useState(null);
 const dialog=useRef(null);const page=useMemo(()=><PageMarkup route={route}/>,[route]);
 useLayoutEffect(()=>{
  document.body.classList.toggle('product-page',products.some(p=>p[0]===route));
  const title=document.querySelector('h1')?.textContent.replace(/\s+/g,' ').trim();if(route!=='index.html'&&title)document.title=`${title} | AEMS Infra`;
  const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=new URL(pagePath(route==='missing.html'?'index.html':route),location.origin).href;document.head.append(canonical);
  document.querySelectorAll('nav a').forEach(a=>{if(a.getAttribute('href')===route){a.setAttribute('aria-current','page');a.closest('details')?.querySelector('summary')?.setAttribute('aria-current','page');}});
  document.querySelectorAll('a[href^="#"]').forEach(a=>a.setAttribute('href',`${location.pathname}${location.search}${a.getAttribute('href')}`));
  document.querySelectorAll('main .section').forEach((section,i)=>section.setAttribute('data-section',String(i)));
  if(location.hash)requestAnimationFrame(()=>document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView());
  const stopMotion=initMotion();return ()=>{stopMotion?.();canonical.remove();document.body.classList.remove('product-page','has-contact-rail');};
 },[route]);
 useEffect(()=>{
  const controller=new window.AbortController();const options={signal:controller.signal};const ripples=new Map();
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.querySelectorAll('details[open]').forEach(d=>d.open=false);setMenuOpen(false);}},options);
  document.addEventListener('click',e=>document.querySelectorAll('details[open]').forEach(d=>{if(!d.contains(e.target))d.open=false;}),options);
  document.addEventListener('aems:open-image',e=>flushSync(()=>setImage(e.detail)),options);
  window.addEventListener('scroll',()=>{setScrolled(scrollY>25);setBackVisible(scrollY>750);},{...options,passive:true});
  document.addEventListener('pointerdown',e=>{const target=e.target.closest('.button,.nav-cta,.filter,.scene-toolbar button,.equipment-tools button');if(!target||matchMedia('(prefers-reduced-motion: reduce)').matches)return;const rect=target.getBoundingClientRect(),size=Math.max(rect.width,rect.height);const ripple=document.createElement('span');ripple.className='ripple';ripple.style.width=ripple.style.height=`${size}px`;ripple.style.left=`${e.clientX-rect.left-size/2}px`;ripple.style.top=`${e.clientY-rect.top-size/2}px`;target.append(ripple);const timer=setTimeout(()=>{ripple.remove();ripples.delete(ripple);},750);ripples.set(ripple,timer);},options);
  return ()=>{controller.abort();ripples.forEach((timer,ripple)=>{clearTimeout(timer);ripple.remove();});};
 },[]);
 useLayoutEffect(()=>{if(image){if(typeof dialog.current.showModal==='function')dialog.current.showModal();else dialog.current.setAttribute('open','');animateSwap(dialog.current,{media:true});}},[image]);
 const closeImage=()=>{if(typeof dialog.current.close==='function')dialog.current.close();else dialog.current.removeAttribute('open');setImage(null);};
 return <ImageContext.Provider value={(src,alt)=>setImage({src,alt})}><a className="skip" href={location.pathname+location.search+'#main'}>Skip to content</a><Topbar/><Header route={route} menuOpen={menuOpen} scrolled={scrolled} onToggle={()=>setMenuOpen(v=>!v)}/><main id="main">{page}</main><Footer/><button className={`back-top${backVisible?' visible':''}`} type="button" aria-label="Back to top" onClick={()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}><Icon name="arrowUp"/></button><dialog className="image-dialog" aria-label="Full-size image viewer" ref={dialog} onCancel={()=>setImage(null)} onClick={e=>{if(e.target===dialog.current)closeImage();}}><button className="image-dialog-close" aria-label="Close image viewer" onClick={closeImage}><Icon name="close" size={24}/></button><div className="react-dialog-photo">{image&&<FittedPhoto key={image.src} src={image.src} alt={image.alt||'Original AEMS photograph'} top={60} bottom={20} padding={20}/>}</div><div className="image-dialog-caption">{image?.alt}</div></dialog></ImageContext.Provider>;
}
await loadPhotoMeasurements();
export const root=createRoot(document.getElementById('root'));
flushSync(()=>root.render(<App/>));
window.__AEMS_REACT_READY__=true;

export {flushSync};
