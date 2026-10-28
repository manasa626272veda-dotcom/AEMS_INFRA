import {mountInspection} from './equipment-inspection.js';
import {animateSwap} from './motion.js';
import {mountProductPhoto,openProductPhoto} from './product-photo.js';
import * as THREE from '/assets/three.module.js';
import {RoomEnvironment} from '/assets/RoomEnvironment.js';
import {RoundedBoxGeometry} from '/assets/RoundedBoxGeometry.js';

// Concept models communicate the equipment type; supplied photos and technical
// specifications remain the source for actual construction and dimensions.
export function createEquipment(container, filename, imageUrl) {
  const shell=container.closest('.equipment-stage');
  let renderer;
  try {renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});}
  catch {
    container.hidden=true;shell.dataset.interactive='false';shell.dataset.viewMode='photo';shell.querySelector('[data-equipment-view]')?.setAttribute('disabled','');const description=shell.querySelector('[data-selection-description]');const title=shell.querySelector('[data-selection-title]');if(title)title.textContent='Original product photograph';if(description)description.textContent='3D is unavailable on this device. Zoom or open the original photograph for a closer look.';
    const fallback=mountProductPhoto(shell,imageUrl,{top:82,bottom:200,padding:18});let zoom=1;
    shell.querySelectorAll('[data-equipment]').forEach(button=>{
      const action=button.dataset.equipment;
      if(['model','motion','explode','inspect-next','fullscreen'].includes(action))button.disabled=true;
      if(['model','photo'].includes(action))button.setAttribute('aria-pressed',String(action==='photo'));
      button.addEventListener('click',()=>{if(action==='full-size')openProductPhoto(fallback.image);else if(action==='zoom-in')fallback.setZoom(zoom=Math.min(2.5,zoom+.2));else if(action==='zoom-out')fallback.setZoom(zoom=Math.max(.65,zoom-.2));else if(action==='reset')fallback.setZoom(zoom=1);});
    });
    const hint=shell.querySelector('.equipment-hint');if(hint)hint.textContent='Original product photograph · Open full size for a closer look';
    return {destroy(){fallback.destroy();fallback.element.remove();}};
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<768?1.5:2));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
  container.append(renderer.domElement);
  const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(35,1,.1,100);camera.position.set(6,3.5,7);camera.lookAt(0,1.4,0);
  const room=new RoomEnvironment();const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromScene(room,.04).texture;pmrem.dispose();room.dispose();
  scene.add(new THREE.HemisphereLight(0xf1f8ff,0x596979,1.7));const key=new THREE.DirectionalLight(0xffffff,3.4);key.position.set(-3,8,6);key.castShadow=true;key.shadow.mapSize.set(innerWidth<768?1024:2048,innerWidth<768?1024:2048);key.shadow.normalBias=.018;key.shadow.camera.left=-5;key.shadow.camera.right=5;key.shadow.camera.top=5;key.shadow.camera.bottom=-5;key.shadow.radius=4;scene.add(key);const rim=new THREE.DirectionalLight(0xb5d9f1,1.4);rim.position.set(5,4,-4);scene.add(rim);
  const root=new THREE.Group();scene.add(root);
  const brushedCanvas=document.createElement('canvas');brushedCanvas.width=256;brushedCanvas.height=256;const ctx=brushedCanvas.getContext('2d');const pixels=ctx.createImageData(256,256);let seed=712;
  for(let y=0;y<256;y++){seed=(seed*16807)%2147483647;const tone=145+(seed%50);for(let x=0;x<256;x++){const i=(y*256+x)*4;pixels.data[i]=pixels.data[i+1]=pixels.data[i+2]=tone+(x%7===0?10:0);pixels.data[i+3]=255;}}ctx.putImageData(pixels,0,0);const brushed=new THREE.CanvasTexture(brushedCanvas);brushed.wrapS=brushed.wrapT=THREE.RepeatWrapping;brushed.repeat.set(2,3);
  const steel=new THREE.MeshStandardMaterial({color:0xc2cbd2,metalness:.92,roughness:.38,roughnessMap:brushed,envMapIntensity:1.1});
  const white=new THREE.MeshPhysicalMaterial({color:0xf1f3f4,metalness:.08,roughness:.32,clearcoat:.3});
  const dark=new THREE.MeshStandardMaterial({color:0x142b3c,metalness:.65,roughness:.3});
  const teal=new THREE.MeshPhysicalMaterial({color:0x075b72,metalness:.35,roughness:.3,clearcoat:.4});
  const copper=new THREE.MeshStandardMaterial({color:0xba7853,metalness:.83,roughness:.25});
  const glass=new THREE.MeshPhysicalMaterial({color:0xb5d6e6,roughness:.035,transparent:true,opacity:.16,clearcoat:1,metalness:.1,depthWrite:false,ior:1.5});
  const led=new THREE.MeshStandardMaterial({color:0xc4f4ff,emissive:0x56c4d8,emissiveIntensity:.75});
  const filterPaper=new THREE.MeshStandardMaterial({color:0xe7e0cb,roughness:.92,metalness:0});
  const epoxy=new THREE.MeshPhysicalMaterial({color:0x202b32,roughness:.22,metalness:.04,clearcoat:.6});
  for(const [material,name,group] of [[steel,'Metal frame and fittings','structure'],[white,'Enclosure panel','envelope'],[dark,'Support frame and hardware','structure'],[teal,'Access enclosure','envelope'],[copper,'Copper coil assembly','heatExchange'],[glass,'Viewing panel','glazing'],[led,'Work-area lighting','lighting'],[filterPaper,'Pleated filter module','filtration'],[epoxy,'Laboratory work surface','worktop']]){material.name=name;material.userData.inspectionGroup=group;}
  function box(w,h,d,x,y,z,material=steel){const geometry=new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d,.12)*.22);const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;root.add(mesh);return mesh;}
  function handle(x,y,z,w=.32){box(w,.045,.07,x,y,z,dark);box(.035,.07,.08,x-w/2+.02,y,z-.025,steel);box(.035,.07,.08,x+w/2-.02,y,z-.025,steel);}
  function legs(width,depth,height=.8,y=height/2){for(const x of [-width/2+.1,width/2-.1])for(const z of [-depth/2+.1,depth/2-.1])box(.08,height,.08,x,y,z,steel);}
  function vents(x,y,z,w,count=8){for(let i=0;i<count;i++)box(w,.018,.018,x,y+i*.075,z,dark);}
  function controls(x,y,z){const start=root.children.length;box(.3,.2,.028,x,y,z,dark);box(.18,.09,.032,x-.025,y+.015,z+.02,led);for(let i=0;i<3;i++)box(.028,.025,.03,x-.08+i*.07,y-.06,z+.02,white);const pieces=root.children.slice(start),assembly=new THREE.Group();assembly.userData.component='Control interface';assembly.userData.inspectionGroup='controls';pieces.forEach(piece=>assembly.add(piece));root.add(assembly);}
  function bolt(x,y,z){const m=new THREE.Mesh(new THREE.CylinderGeometry(.025,.025,.018,6),steel);m.rotation.x=Math.PI/2;m.position.set(x,y,z);root.add(m);}
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
    box(2.35,.14,1.8,0,.1,0,steel);box(.18,2.9,1.75,-1.08,1.62,0,white);box(.18,2.9,1.75,1.08,1.62,0,white);box(2.35,.35,1.8,0,3.18,0,teal);
    box(1.95,2.76,.04,0,1.58,-.83,glass);box(1.95,2.76,.04,0,1.58,.88,glass);box(1.98,.07,.08,0,2.94,.9,steel);box(1.98,.07,.08,0,.22,.9,steel);
    for(const x of [-.96,.96])box(.065,2.76,.08,x,1.58,.9,steel);handle(.8,1.4,1.0,.12);controls(1.08,2.25,.91);box(1.8,.03,1.3,0,2.96,.05,led);
    for(let i=0;i<6;i++){for(const x of [-.95,.95]){const nozzle=new THREE.Mesh(new THREE.CylinderGeometry(.057,.042,.06,20),steel);nozzle.rotation.z=Math.PI/2;nozzle.position.set(x,.55+i*.36,.15);root.add(nozzle);}}vents(0,.23,.95,1.7,2);
  }else if(filename.includes('passbox')){
    box(2.2,.12,1.65,0,.23,0,steel);box(2.2,.12,1.65,0,2.36,0,steel);box(.11,2.05,1.65,-1.05,1.3,0,steel);box(.11,2.05,1.65,1.05,1.3,0,steel);box(2.0,2.0,.07,0,1.3,-.79,steel);
    for(const x of [-.86,.86])box(.25,1.9,.12,x,1.28,.86,steel);for(const y of [.43,2.13])box(1.5,.25,.12,0,y,.86,steel);box(1.48,1.48,.045,0,1.28,.91,glass);box(1.78,.04,1.4,0,.44,0,white);
    handle(.88,1.3,1.02,.13);controls(.6,2.3,.91);box(2.3,.14,1.75,0,.1,0,dark);for(const x of [-.98,.98])for(const y of [.48,2.12])bolt(x,y,.94);
    if(filename.includes('dynamic')){box(2.2,.65,1.65,0,2.74,0,teal);vents(0,2.55,.85,1.8,5);}else box(2.2,.12,1.65,0,2.48,0,teal);
  }else if(filename.includes('airhandling')||filename.includes('hvacsystems')){
    box(4.85,.19,1.95,0,.2,0,dark);box(4.8,.12,1.9,0,2.44,0,dark);box(4.7,.07,1.82,0,.36,0,steel);
    for(const x of [-2.35,-.78,.78,2.35]){for(const z of [-.89,.89])box(.075,2.08,.075,x,1.4,z,dark);box(.075,.075,1.84,x,1.4,0,steel);}
    for(const x of [-1.56,0,1.56])box(1.48,2.0,.055,x,1.4,-.91,steel);
    box(.06,2.05,1.8,-2.39,1.4,0,teal);box(.06,2.05,1.8,2.39,1.4,0,steel);
    for(const x of [-1.9,1.9]){for(const z of [-.68,.68])box(.5,.18,.35,x,.07,z,dark);}
    box(1.35,.12,1.2,-1.56,.53,0,steel);box(.38,.48,.45,-1.56,.82,-.45,dark);
    const housing=new THREE.Mesh(new THREE.CylinderGeometry(.64,.64,.43,48,1,true),steel);housing.rotation.x=Math.PI/2;housing.position.set(-1.56,1.35,.05);root.add(housing);
    const ring=new THREE.Mesh(new THREE.TorusGeometry(.55,.055,12,64),steel);ring.position.set(-1.56,1.35,.3);root.add(ring);fan=new THREE.Group();fan.position.set(-1.56,1.35,.31);root.add(fan);
    const hub=new THREE.Mesh(new THREE.CylinderGeometry(.17,.17,.12,32),dark);hub.rotation.x=Math.PI/2;fan.add(hub);
    for(let i=0;i<12;i++){const blade=new THREE.Mesh(new RoundedBoxGeometry(.11,.4,.055,3,.025),steel);blade.rotation.z=i*Math.PI/6+.18;blade.position.set(Math.sin(i*Math.PI/6)*.34,Math.cos(i*Math.PI/6)*.34,0);fan.add(blade);}
    box(1.34,.09,1.5,0,.62,0,steel);box(1.34,.09,1.5,0,2.14,0,steel);
    for(let i=0;i<8;i++){const bag=new THREE.Mesh(new THREE.CapsuleGeometry(.062,1.27,5,12),filterPaper);bag.userData.component='Filter bank';bag.userData.inspectionGroup='filtration';bag.position.set(-.53+i*.15,1.38,.2);bag.scale.z=2.8;bag.castShadow=true;root.add(bag);}
    for(let i=0;i<20;i++)box(.014,1.52,1.24,1.05+i*.056,1.38,-.07,steel);
    for(let i=0;i<9;i++){const coil=new THREE.Mesh(new THREE.CylinderGeometry(.033,.033,.92,14),copper);coil.rotation.z=Math.PI/2;coil.position.set(1.58,.72+i*.16,.64);root.add(coil);for(const x of [1.1,2.06]){const bend=new THREE.Mesh(new THREE.TorusGeometry(.065,.033,8,14,Math.PI),copper);bend.position.set(x,.8+i*.16,.64);bend.rotation.z=x<1.5?Math.PI/2:-Math.PI/2;root.add(bend);}}
    box(.4,2.0,.055,2.13,1.4,.92,steel);box(.2,1.8,.075,-2.23,1.4,.93,teal);controls(2.13,1.8,.97);handle(2.13,1.03,1.02,.13);
    for(const x of [-2.35,-.78,.78,2.35])for(const y of [.48,1.0,1.8,2.32])bolt(x,y,.946);
  }else if(filename.includes('furniture')){
    const lab=filename.includes('labfurniture');
    const tops=lab?[box(2.075,.13,1.65,-.8625,1.85,0,epoxy),box(1.075,.13,1.65,1.3625,1.85,0,epoxy),box(.65,.13,.72,.5,1.85,.465,epoxy),box(.65,.13,.48,.5,1.85,-.585,epoxy)]:[box(3.8,.13,1.65,0,1.85,0,steel)];for(const top of tops){top.userData.component=lab?'Laboratory work surface':'Stainless steel work surface';top.userData.inspectionGroup='worktop';}legs(3.6,1.45,lab?1.7:1.48,lab?.85:.96);const shelf=box(3.45,.06,1.35,0,.32,0,steel);shelf.userData.component='Lower storage shelf';
    if(lab){
      for(const x of [-1.18,1.18]){box(1.08,1.42,1.36,x,1.04,0,white);for(let i=0;i<4;i++){box(1.02,.31,.045,x,.53+i*.335,.71,teal);handle(x,.56+i*.335,.77,.38);}}
      box(3.8,.19,.08,0,2.01,-.78,steel);box(3.4,.055,.34,0,2.55,-.6,white);for(const x of [-1.5,1.5])box(.045,.72,.045,x,2.2,-.72,steel);
      const basin=[box(.65,.025,.45,.5,1.69,-.12,steel),box(.022,.21,.45,.175,1.8,-.12,steel),box(.022,.21,.45,.825,1.8,-.12,steel),box(.65,.21,.022,.5,1.8,-.345,steel),box(.65,.21,.022,.5,1.8,.105,steel)];for(const part of basin){part.userData.component='Recessed sink basin';part.userData.inspectionGroup='worktop';}
      const pipe=new THREE.CatmullRomCurve3([new THREE.Vector3(.5,1.92,-.55),new THREE.Vector3(.5,2.36,-.55),new THREE.Vector3(.5,2.49,-.37),new THREE.Vector3(.5,2.31,-.22)]);
      const faucet=new THREE.Mesh(new THREE.TubeGeometry(pipe,36,.025,10,false),steel);faucet.userData.component='Sink and faucet fitting';faucet.userData.inspectionGroup='worktop';root.add(faucet);
      for(const x of [-.7,-.4]){box(.18,.23,.05,x,2.06,-.69,white);box(.045,.055,.06,x,2.06,-.65,dark);}
    }else{
      box(1.15,.42,1.38,-1.15,1.52,0,steel);handle(-1.15,1.52,.77,.5);box(3.7,.1,.055,0,1.97,-.79,steel);
      for(const x of [-1.7,1.7])for(const z of [-.65,.65]){const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.1,.1,.07,24),dark);wheel.userData.component='Castor wheel';wheel.rotation.z=Math.PI/2;wheel.position.set(x,.11,z);root.add(wheel);}
      for(let i=0;i<18;i++)box(.025,.025,1.28,-1.55+i*.18,.4,0,steel);
    }
  }else{
    const isReverse=filename.includes('reverse');const isBio=filename.includes('biosafety');
    legs(2.7,1.5,.9);box(2.9,.12,1.7,0,.98,0,steel);box(2.9,1.6,.16,0,1.85,-.78,white);
    box(.15,1.6,1.6,-1.38,1.85,0,white);box(.15,1.6,1.6,1.38,1.85,0,white);box(2.9,.55,1.7,0,2.87,0,teal);box(2.5,.035,1.3,0,2.57,0,led);
    if(isReverse){box(2.9,.5,1.7,0,.64,0,steel);vents(0,.5,.87,2.4,5);}
    else{box(.04,1.4,1.45,-1.27,1.8,0,glass);box(.04,1.4,1.45,1.27,1.8,0,glass);box(2.5,.65,.035,0,2.28,.8,glass);}
    if(isBio)box(2.5,.08,.1,0,1.93,.82,dark);
    controls(.93,2.9,.87);vents(-.65,2.75,.87,1.1,5);
  }
  // Small construction details improve legibility at realistic viewing distances.
  if(filename.includes('laminar')||filename.includes('biosafety')){
    const horizontal=filename.includes('horizontal');
    for(let i=0;i<34;i++){
      const pleat=horizontal?box(.043,1.18,.055,-1.15+i*.07,1.86,-.66,filterPaper):box(.043,.045,1.2,-1.15+i*.07,2.54,-.05,filterPaper);
      pleat.userData.component=horizontal?'Rear filter module':'Overhead filter module';
    }
    for(let i=0;i<22;i++)box(.065,.018,.22,-1.08+i*.1,1.055,.59,dark);
    if(filename.includes('biosafety')){const sash=box(2.5,.74,.035,0,2.15,.78,glass);sash.rotation.x=-.16;sash.userData.component='Front viewing sash';}
  }
  if(filename.includes('airhandling')||filename.includes('hvacsystems')){
    const roof=box(4.68,.045,1.78,0,2.48,0,steel);roof.userData.component='Upper access panel';roof.userData.inspectionGroup='envelope';
    for(const x of [-.74,.74]){const edge=box(.045,2.03,.08,x,1.42,.93,dark);edge.userData.component='Service section frame';}
  }
  for(const child of root.children){if(child===fan){child.userData.component='Blower assembly';child.userData.inspectionGroup='airMovement';}}
  return mountInspection({container,shell,renderer,scene,camera,root,fan,imageUrl,brushed});
}
