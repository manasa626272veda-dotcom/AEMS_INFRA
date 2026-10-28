// Progressive enhancement: content and links work before the motion library loads.
export function initMotion(){
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const progress=document.createElement('div');progress.className='reading-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
  const updateProgress=()=>{const total=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${total>0?Math.min(1,scrollY/total):0})`;};
  addEventListener('scroll',updateProgress,{passive:true});addEventListener('resize',updateProgress);updateProgress();
  const launch=()=>{
    const {gsap,ScrollTrigger}=window;
    if(!gsap||!ScrollTrigger||reduced.matches)return;
    gsap.registerPlugin(ScrollTrigger);
    const media=gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)',()=>{
      const intro=document.querySelector('.cinema-content,.hero-copy,.page-hero .wrap');
      if(intro){gsap.from(intro.children,{y:24,duration:1,stagger:.1,ease:'power3.out',clearProps:'transform,opacity'});}
      const stage=document.querySelector('.hero .scene-shell,.equipment-showcase,.service-experience');
      if(stage)gsap.from(stage,{y:25,duration:1.25,delay:.2,ease:'power3.out',clearProps:'transform,opacity'});
      document.querySelectorAll('.section-head,.about-strip,.mission-grid,.contact-grid,.logo-gallery').forEach(el=>{
        gsap.from(el,{y:32,duration:.9,ease:'power3.out',clearProps:'transform,opacity',scrollTrigger:{trigger:el,start:'top 92%',once:true}});
      });
      ScrollTrigger.batch('.service-card,.product-card',{start:'top 95%',once:true,onEnter:batch=>gsap.from(batch,{y:30,stagger:.07,duration:.8,ease:'power3.out',clearProps:'transform,opacity'})});
      gsap.utils.toArray('.process-step').forEach(el=>ScrollTrigger.create({trigger:el,start:'top 80%',once:true,onEnter:()=>el.classList.add('step-reached')}));
      media.add('(min-width: 901px) and (pointer: fine)',()=>{
        const cinema=document.querySelector('.cinema-image');if(cinema)gsap.to(cinema,{scale:1.06,ease:'none',scrollTrigger:{trigger:'.cinema-hero',start:'top top',end:'bottom top',scrub:1}});
        document.querySelectorAll('.about-image img').forEach(img=>gsap.to(img,{yPercent:5,scale:1.06,ease:'none',scrollTrigger:{trigger:img.parentElement,start:'top bottom',end:'bottom top',scrub:1}}));
      });
      const refresh=()=>ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);document.querySelectorAll('img').forEach(img=>{if(!img.complete)img.addEventListener('load',refresh,{once:true});});
    });
    reduced.addEventListener('change',()=>{if(reduced.matches)media.revert();});
  };
  // Deferred vendor scripts precede load. Avoid hiding content if a script fails.
  if(document.readyState==='complete')launch();else addEventListener('load',launch,{once:true});
}
