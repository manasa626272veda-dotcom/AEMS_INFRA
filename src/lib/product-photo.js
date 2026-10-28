let measurements={};
let ready;
export function loadPhotoMeasurements(){
  if(!ready)ready=fetch('/photo-bounds.json').then(r=>r.ok?r.json():{}).then(data=>{measurements=data;}).catch(()=>{});
  return ready;
}

// Display the photographed object rather than the empty canvas embedded in
// some original PNGs. No source pixels are altered and no product is cropped.
export function fitProductPhoto(image,{padding=18,top=padding,bottom=padding}={}){
  if(image.closest('.photo-viewport'))return image.closest('.photo-viewport').photoApi;
  const viewport=document.createElement('div');viewport.className='photo-viewport';
  image.before(viewport);viewport.append(image);image.classList.add('fitted-photo');
  const layout=()=>{
    const width=viewport.clientWidth,height=viewport.clientHeight;if(width<1||height<1)return;
    const key=new URL(image.getAttribute('src'),document.baseURI).pathname.replace(/^\//,'');
    const record=measurements[key];
    const sourceWidth=record?.width||image.naturalWidth,sourceHeight=record?.height||image.naturalHeight;
    if(!sourceWidth||!sourceHeight)return;
    const bounds=record?.bounds||[0,0,sourceWidth,sourceHeight];
    const [left,y,right,base]=bounds,bw=right-left,bh=base-y;
    const scale=Math.min(Math.max(1,width-2*padding)/bw,Math.max(1,height-top-bottom)/bh)*zoom;
    Object.assign(image.style,{position:'absolute',width:`${sourceWidth*scale}px`,height:`${sourceHeight*scale}px`,maxWidth:'none',left:`${(width-bw*scale)/2-left*scale}px`,top:`${top+(height-top-bottom-bh*scale)/2-y*scale}px`});
    viewport.dataset.contentWidth=String(bw*scale);viewport.dataset.contentHeight=String(bh*scale);viewport.dataset.imageReady='true';
  };
  let zoom=1;
  const observer=new ResizeObserver(layout);observer.observe(viewport);image.addEventListener('load',layout);layout();
  const api={element:viewport,image,resize:layout,setZoom(value){zoom=Math.min(2.5,Math.max(.65,value));layout();},destroy(){observer.disconnect();image.removeEventListener('load',layout);}};
  viewport.photoApi=api;return api;
}

export function mountProductPhoto(host,url,options={}){
  const image=document.createElement('img');image.src=url;image.alt=options.alt||'Original AEMS product photograph';image.className='stage-image';host.append(image);
  return fitProductPhoto(image,options);
}

export function openProductPhoto(image){
  image.dispatchEvent(new window.CustomEvent('aems:open-image',{bubbles:true,detail:{src:image.src,alt:image.alt}}));
}
