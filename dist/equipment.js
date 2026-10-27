import * as THREE from './assets/three.module.js';
import {RoomEnvironment} from './assets/RoomEnvironment.js';
import {RoundedBoxGeometry} from './assets/RoundedBoxGeometry.js';

// Concept models communicate the equipment type; supplied photos and technical
// specifications remain the source for actual construction and dimensions.
export function createEquipment(container, filename, imageUrl) {
  const shell=container.closest('.equipment-stage');
  let renderer;
  try {renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}
  catch {container.innerHTML=`<img class="stage-image" src="${imageUrl}" alt="Original AEMS product photograph">`;shell.querySelectorAll('[data-equipment]').forEach(b=>{b.disabled=true;if(['model','photo'].includes(b.dataset.equipment))b.setAttribute('aria-pressed',String(b.dataset.equipment==='photo'));});const hint=shell.querySelector('.equipment-hint');if(hint)hint.textContent='Product photo · Interactive 3D unavailable on this device';return;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
  container.append(renderer.domElement);
  const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(35,1,.1,100);camera.position.set(6,3.5,7);camera.lookAt(0,1.4,0);
  const room=new RoomEnvironment();const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromScene(room,.04).texture;pmrem.dispose();room.dispose();
  scene.add(new THREE.HemisphereLight(0xfaffeb,0x607c50,2));const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(3,8,5);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.normalBias=.025;scene.add(key);
  const root=new THREE.Group();scene.add(root);
  const steel=new THREE.MeshStandardMaterial({color:0xc1cfc1,metalness:.86,roughness:.26});
  const white=new THREE.MeshStandardMaterial({color:0xecf0df,metalness:.12,roughness:.4});
  const dark=new THREE.MeshStandardMaterial({color:0x2f5345,metalness:.3,roughness:.4});
  const teal=new THREE.MeshStandardMaterial({color:0x278475,metalness:.4,roughness:.3});
  const glass=new THREE.MeshPhysicalMaterial({color:0x88b7a5,roughness:.06,transparent:true,opacity:.27,clearcoat:1,metalness:.2,depthWrite:false});
  const led=new THREE.MeshStandardMaterial({color:0xc9f7ba,emissive:0x8cdd86,emissiveIntensity:1.2});
  function box(w,h,d,x,y,z,material=steel){const geometry=new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d,.12)*.22);const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);return mesh;}
  function handle(x,y,z,w=.32){box(w,.045,.07,x,y,z,dark);box(.035,.07,.08,x-w/2+.02,y,z-.025,steel);box(.035,.07,.08,x+w/2-.02,y,z-.025,steel);}
  function legs(width,depth,height=.8,y=height/2){for(const x of [-width/2+.1,width/2-.1])for(const z of [-depth/2+.1,depth/2-.1])box(.08,height,.08,x,y,z,steel);}
  function vents(x,y,z,w,count=8){for(let i=0;i<count;i++)box(w,.018,.018,x,y+i*.075,z,dark);}
  function controls(x,y,z){box(.3,.2,.028,x,y,z,dark);box(.18,.09,.032,x-.025,y+.015,z+.02,led);for(let i=0;i<3;i++)box(.028,.025,.03,x-.08+i*.07,y-.06,z+.02,white);}
  let fan=null;
  if(filename.includes('panels')||filename.includes('galvanized')){
    for(let i=0;i<4;i++){box(.85,2.9,.15,-1.275+i*.86,1.55,-.2,white);box(.022,2.9,.17,-.85+i*.86,1.55,-.2,steel);}
    box(3.6,.14,1.7,0,.07,0,dark);box(3.5,.06,1.6,0,.17,0,white);
    box(1.45,.9,.17,.48,1.85,-.19,dark);box(1.35,.79,.18,.48,1.85,-.17,glass);
    const separated=box(.8,2.9,.15,-2.1,1.55,.45,teal);separated.rotation.y=-.25;
  }else if(filename.includes('doors')){
    box(2.2,3.2,.2,0,1.65,0,white);box(1.8,2.95,.23,0,1.55,.025,teal);box(.72,.82,.24,0,2.1,.03,dark);box(.63,.73,.25,0,2.1,.04,glass);handle(.58,1.35,.2,.25);box(2.3,.1,.8,0,.04,0,dark);
    for(const y of [.6,1.6,2.6])box(.08,.17,.1,-.92,y,.18,steel);
  }else if(filename.includes('airshower')){
    box(2.35,3.2,1.75,0,1.65,0,white);box(1.5,2.6,1.8,0,1.45,.04,dark);box(1.3,2.4,1.84,0,1.45,.06,glass);box(1.5,.18,1.9,0,2.84,0,teal);box(1.4,.04,1.5,0,2.73,.05,led);handle(.54,1.4,1.02,.12);controls(.95,2.2,.9);
    for(let i=0;i<5;i++){box(.12,.12,.05,-.54,.55+i*.39,.93,steel);box(.12,.12,.05,.54,.55+i*.39,.93,steel);}vents(0,.22,.97,1.2,3);
  }else if(filename.includes('passbox')){
    box(2.2,2.25,1.65,0,1.3,0,steel);box(1.73,1.65,.14,0,1.26,.87,white);box(1.27,1.18,.16,0,1.26,.88,dark);box(1.15,1.06,.17,0,1.26,.9,glass);handle(.7,1.3,1.02,.13);controls(.52,2.23,.9);box(2.3,.14,1.75,0,.1,0,dark);
    if(filename.includes('dynamic')){box(2.2,.65,1.65,0,2.74,0,teal);vents(0,2.55,.85,1.8,5);}else box(2.2,.12,1.65,0,2.48,0,teal);
  }else if(filename.includes('airhandling')||filename.includes('hvacsystems')){
    box(4,1.9,1.7,0,1.2,0,teal);box(4.2,.18,1.85,0,.2,0,dark);box(4.1,.12,1.8,0,2.22,0,steel);
    for(const x of [-1.22,0,1.22]){box(.035,1.9,1.73,x,1.2,0,steel);handle(x+.42,1.1,.94,.14);}box(.8,1.5,.07,-1.6,1.2,.88,dark);vents(-1.6,.58,.94,.62,16);controls(.7,1.73,.92);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(.43,.04,10,32),steel);ring.position.set(-.57,1.23,.91);root.add(ring);fan=new THREE.Group();fan.position.set(-.57,1.23,.94);root.add(fan);
    for(let i=0;i<6;i++){const blade=new THREE.Mesh(new RoundedBoxGeometry(.19,.45,.04,2,.03),dark);blade.rotation.z=i*Math.PI/3;blade.position.set(Math.sin(i*Math.PI/3)*.18,Math.cos(i*Math.PI/3)*.18,0);fan.add(blade);}
    box(.8,.8,1.2,2.4,1.35,0,steel);
  }else if(filename.includes('furniture')){
    box(3.4,.14,1.5,0,1.75,0,steel);legs(3.2,1.3,1.65);box(3,.06,1.2,0,.4,0,steel);box(1.15,1.15,1.25,-.9,1.08,0,white);
    for(let i=0;i<3;i++){box(1.08,.34,.04,-.9,.72+i*.36,.66,steel);handle(-.9,.75+i*.36,.73);}
    box(3.4,.18,.07,0,1.88,-.71,steel);box(.8,.8,.7,1.05,2.22,-.32,teal);
  }else{
    const isReverse=filename.includes('reverse');const isBio=filename.includes('biosafety');
    legs(2.7,1.5,.9);box(2.9,.12,1.7,0,.98,0,steel);box(2.9,1.6,.16,0,1.85,-.78,white);
    box(.15,1.6,1.6,-1.38,1.85,0,white);box(.15,1.6,1.6,1.38,1.85,0,white);box(2.9,.55,1.7,0,2.87,0,teal);box(2.5,.035,1.3,0,2.57,0,led);
    if(isReverse){box(2.9,.5,1.7,0,.64,0,steel);vents(0,.5,.87,2.4,5);}
    else{box(.04,1.4,1.45,-1.27,1.8,0,glass);box(.04,1.4,1.45,1.27,1.8,0,glass);box(2.5,.65,.035,0,2.28,.8,glass);}
    if(isBio)box(2.5,.08,.1,0,1.93,.82,dark);
    controls(.93,2.9,.87);vents(-.65,2.75,.87,1.1,5);
  }
  const plane=new THREE.Mesh(new THREE.PlaneGeometry(50,50),new THREE.ShadowMaterial({opacity:.15}));plane.rotation.x=-Math.PI/2;plane.receiveShadow=true;scene.add(plane);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(2.7,.008,4,90),new THREE.MeshBasicMaterial({color:0x99b18b,transparent:true,opacity:.4}));ring.rotation.x=Math.PI/2;ring.position.y=.01;scene.add(ring);
  const photo=document.createElement('img');photo.className='stage-image';photo.src=imageUrl;photo.alt='Original AEMS product photograph';photo.hidden=true;container.after(photo);
  let angle=.38,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,mode='model',dragging=false,lastX=0,visible=true;
  const resize=new ResizeObserver(()=>{const w=container.clientWidth,h=container.clientHeight;if(w<1||h<1)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.set(6,3.5,7);if(camera.aspect<1.2)camera.position.multiplyScalar(1.2);camera.lookAt(0,1.5,0);camera.updateProjectionMatrix();});resize.observe(container);
  container.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;container.setPointerCapture(e.pointerId);});container.addEventListener('pointermove',e=>{if(dragging){angle+=(e.clientX-lastX)*.009;lastX=e.clientX;}});container.addEventListener('pointerup',()=>dragging=false);container.addEventListener('pointercancel',()=>dragging=false);
  container.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home'].includes(e.key)){e.preventDefault();angle=e.key==='Home'?.38:angle+(e.key==='ArrowLeft'?-.2:.2);}});
  shell.querySelectorAll('[data-equipment]').forEach(button=>button.addEventListener('click',()=>{const action=button.dataset.equipment;if(action==='reset'){angle=.38;return;}if(action==='motion'){paused=!paused;button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'Play motion':'Pause motion';return;}mode=action;container.hidden=mode==='photo';photo.hidden=mode!=='photo';shell.querySelectorAll('[data-equipment="model"],[data-equipment="photo"]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.equipment===mode)));}));
  new IntersectionObserver(entries=>visible=entries[0].isIntersecting).observe(shell);
  let prev=performance.now();function frame(now){requestAnimationFrame(frame);const delta=Math.min((now-prev)/1000,.06);prev=now;if(!visible||document.hidden||mode==='photo')return;if(!paused&&!dragging)angle+=delta*.15;root.rotation.y=angle;if(fan&&!paused)fan.rotation.z+=delta*1.8;renderer.render(scene,camera);}requestAnimationFrame(frame);
}
