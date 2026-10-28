// Motion is progressive enhancement: text never starts transparent or hidden.
let preference;
const motionPreference=()=>preference??=matchMedia('(prefers-reduced-motion: reduce)');
const swaps=new WeakMap();
const activeSwaps=new Set();
export function animateSwap(element,{media=false}={}){
  if(!element||motionPreference().matches||typeof element.animate!=='function')return;
  swaps.get(element)?.cancel();
  const animation=element.animate(media?[{transform:'scale(.985)'},{transform:'scale(1)'}]:[{transform:'translateY(9px)'},{transform:'translateY(0)'}],{duration:media?360:300,easing:'cubic-bezier(.2,.7,.2,1)'});
  swaps.set(element,animation);activeSwaps.add(animation);
  const cancelOnReduce=event=>{if(event.matches)animation.cancel();};motionPreference().addEventListener('change',cancelOnReduce);
  const release=()=>{activeSwaps.delete(animation);motionPreference().removeEventListener('change',cancelOnReduce);};
  animation.finished.then(release,release);
}

export function initMotion(){
  const controller=new window.AbortController();let motionContext;
  const reduced=motionPreference();
  const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
  const updateProgress=()=>{const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${total>0?Math.min(1,scrollY/total):0})`;};
  addEventListener('scroll',updateProgress,{passive:true,signal:controller.signal});addEventListener('resize',updateProgress,{signal:controller.signal});updateProgress();
  reduced.addEventListener('change',()=>{if(reduced.matches){activeSwaps.forEach(a=>a.cancel());activeSwaps.clear();}});
  const launch=()=>{
    const {gsap,ScrollTrigger}=window;if(!gsap||!ScrollTrigger)return;
    gsap.registerPlugin(ScrollTrigger);
    const media=gsap.matchMedia();motionContext=media;
    media.add('(prefers-reduced-motion: no-preference)',()=>{
      const distance=innerWidth<768?12:20;
      const intro=document.querySelector('.cinema-content,.hero-copy,.page-hero .wrap');
      if(intro)gsap.from(intro.children,{y:distance,duration:.75,stagger:.075,ease:'power3.out',clearProps:'transform'});
      const cinema=document.querySelector('.cinema-image');
      if(cinema)gsap.from(cinema,{scale:1.035,duration:1.8,ease:'power2.out',clearProps:'transform'});
      document.querySelectorAll('.section-head,.intro-grid,.about-strip,.mission-grid>div,.contact-info,.contact-form,.technical>h3,.technical>p,.technical>ul,.technical>.table-wrap,.technical-gallery,.logo-gallery,.equipment-layout,.facility-studio-heading,.faq-layout>div:first-child,.cta-box,.customer-cta>.wrap').forEach(el=>{
        gsap.from(el,{y:distance,duration:.7,ease:'power3.out',clearProps:'transform',scrollTrigger:{trigger:el,start:'top 94%',once:true}});
      });
      ScrollTrigger.batch('.service-card,.product-card,.intro-proof>div,.process-step',{start:'top 95%',once:true,onEnter:batch=>gsap.from(batch,{y:distance,stagger:.065,duration:.65,ease:'power3.out',clearProps:'transform'})});
      document.querySelectorAll('.process-step').forEach(el=>ScrollTrigger.create({trigger:el,start:'top 88%',once:true,onEnter:()=>el.classList.add('step-reached')}));
      const refresh=()=>ScrollTrigger.refresh();document.fonts?.ready.then(refresh);
      document.querySelectorAll('img').forEach(img=>{if(!img.complete)img.addEventListener('load',refresh,{once:true});});
    });
  };
  if(document.readyState==='complete')launch();else addEventListener('load',launch,{once:true,signal:controller.signal});
  return ()=>{controller.abort();motionContext?.revert();progress.remove();activeSwaps.forEach(a=>a.cancel());activeSwaps.clear();};
}
