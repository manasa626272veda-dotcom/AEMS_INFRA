import * as THREE from './assets/three.module.js';

export function createFacility(container) {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer;
  try { renderer=new THREE.WebGLRenderer({antialias:true,alpha:true}); }
  catch { container.innerHTML='<div class="model-fallback"><img src="assets/img/about-us-img.png" alt="AEMS clean room environment"></div>';return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.8));
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
  container.append(renderer.domElement);
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(34,1,.1,100);
  const focus=new THREE.Vector3(0,1.3,0);
  scene.add(new THREE.HemisphereLight(0xe9ffff,0x607d80,3));
  const sun=new THREE.DirectionalLight(0xffffff,4);sun.position.set(-3,10,8);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=8;sun.shadow.camera.bottom=-8;sun.shadow.normalBias=.05;scene.add(sun);
  const rim=new THREE.DirectionalLight(0x6abfb4,2);rim.position.set(8,5,-6);scene.add(rim);
  const root=new THREE.Group();scene.add(root);
  const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.55,metalness:.15,...extra});
  const white=mat(0xeef3ee), teal=mat(0x178f88),dark=mat(0x304951),silver=mat(0xb8cacb,{metalness:.55,roughness:.32}),floor=mat(0xd2e6df),glass=mat(0x89cbc5,{transparent:true,opacity:.2,metalness:.1,roughness:.1,depthWrite:false}),light=mat(0xd3f4ee,{emissive:0x7ed7c2,emissiveIntensity:.4});
  function box(w,h,d,x,y,z,m=white,parent=root){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function tube(points,r=.07,m=silver,parent=root){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,40,r,8,false),m);mesh.castShadow=true;parent.add(mesh);return curve;}
  box(8.6,.23,6.3,0,-.18,0,dark);
  box(8.45,.17,6.15,0,.02,0,floor);
  // Inert modular wall panels and recessed joints.
  for(let i=0;i<7;i++){box(1.02,2.7,.16,-3.6+i*1.04,1.42,-2.7);box(.026,2.71,.018,-3.08+i*1.04,1.42,-2.6,silver);}
  for(let i=0;i<4;i++){box(.16,2.7,1.07,-4,1.42,-2.09+i*1.1);box(.016,2.71,.025,-3.9,1.42,-1.56+i*1.1,silver);}
  box(8.15,.11,.13,0,2.82,-2.7,silver);box(.13,.11,5.5,-4,2.82,0,silver);
  // Glazed front wall, open in the centre to reveal equipment.
  for(const x of [-3.97,0,3.97])box(.075,2.75,.075,x,1.43,2.7,silver);
  box(8.05,.075,.08,0,2.8,2.7,silver);box(8.05,.09,.09,0,.12,2.7,silver);
  box(3.8,2.6,.035,-2.0,1.43,2.7,glass);box(3.8,2.6,.035,2,1.43,2.7,glass);
  box(.09,2.7,5.4,0,1.42,0,glass);box(.09,.08,5.4,0,2.8,0,silver);
  // Stainless laboratory work benches and storage.
  function bench(x,z,w=2){box(w,.1,.8,x,1.05,z,silver);box(w-.12,.65,.72,x,.65,z,white);for(const dx of [-w*.32,w*.32])box(.04,.08,.2,x+dx,.87,z+.38,dark);box(w,.08,.8,x,.28,z,dark);}
  bench(-2.55,-1.9,2.3);bench(2.15,-1.85,2.5);bench(-2.6,.6,1.8);
  box(1.45,1.2,.14,-2.5,1.72,-2.42,teal);box(1.24,1.04,.12,-2.5,1.75,-2.31,glass);
  box(1.5,.2,.8,-2.5,2.38,-1.9,white);box(1.23,.055,.62,-2.5,2.26,-1.85,light);
  // Laminar work station and stainless pass box.
  box(1.45,1.12,.92,2.2,.65,.55,silver);box(1.4,.14,.98,2.2,1.29,.55,dark);
  box(1.48,1.05,.08,2.2,1.86,.13,white);box(1.48,.2,.98,2.2,2.42,.55,white);
  for(const x of [1.49,2.91])box(.035,1.0,.94,x,1.86,.55,glass);
  box(1.25,.03,.7,2.2,2.29,.6,light);
  box(.8,.85,.78,-.1,1.75,-1.5,silver);box(.65,.61,.028,-.1,1.75,-1.09,glass);box(.035,.23,.04,.18,1.73,-1.05,dark);
  // Air handling unit on a raised service platform.
  const ahu=new THREE.Group();root.add(ahu);
  box(2.5,.15,1.6,-2.2,3.4,-.45,silver,ahu);
  box(2.3,1.03,1.45,-2.2,4,-.45,teal,ahu);
  for(const x of [-3.25,-2.5,-1.65])box(.025,1.03,1.47,x,4,-.45,silver,ahu);
  box(.75,.76,.035,-2.72,4,.29,dark,ahu);
  for(let i=0;i<7;i++)box(.65,.02,.035,-2.72,3.73+i*.085,.33,silver,ahu);
  box(.65,.63,.055,-1.65,4,.31,silver,ahu);
  const fan=new THREE.Group();fan.position.set(-1.65,4,.36);ahu.add(fan);
  for(let i=0;i<6;i++){const blade=box(.13,.34,.025,0,.13,0,dark,fan);blade.rotation.z=i*Math.PI/3;blade.position.x=Math.sin(i*Math.PI/3)*.14;blade.position.y=Math.cos(i*Math.PI/3)*.14;}
  const vents=new THREE.Group();root.add(vents);
  box(5.2,.36,.6,.15,3.12,-1.05,silver,vents);box(.58,.36,3.5,2.48,3.12,.45,silver,vents);
  for(const [x,z] of [[-2.4,-.8],[1.1,-1],[2.45,1.45]]){box(.45,.2,.45,x,2.78,z,silver,vents);box(.7,.04,.7,x,2.66,z,white,vents);for(let i=0;i<5;i++)box(.53,.01,.025,x,2.625,z-.2+i*.1,dark,vents);}
  // Utility piping on the exterior side.
  const pipes=new THREE.Group();root.add(pipes);
  for(let i=0;i<3;i++)tube([[4.15,.25,-2.3+i*.28],[4.15,2.9,-2.3+i*.28],[3.8,3.3,-2.3+i*.28],[.3,3.3,-2.3+i*.28]],.048,[teal,silver,dark][i],pipes);
  for(let i=0;i<4;i++)box(.4,.07,.15,4.1,.7+i*.6,-2.05,white,pipes);
  // Floor plan markers.
  for(let i=0;i<7;i++)box(.08,.009,.36,-.5,.12,-1.8+i*.58,teal);
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.ShadowMaterial({opacity:.13}));ground.rotation.x=-Math.PI/2;ground.position.y=-.31;ground.receiveShadow=true;scene.add(ground);
  const grid=new THREE.GridHelper(18,24,0xceded9,0xdbe6e2);grid.position.y=-.305;grid.material.transparent=true;grid.material.opacity=.4;scene.add(grid);
  const paths=[[-2.4,-.8],[1.1,-1],[2.45,1.45]].map(([x,z])=>new THREE.CatmullRomCurve3([new THREE.Vector3(x,2.6,z),new THREE.Vector3(x,1.7,z),new THREE.Vector3(x+.4,.3,z+.5)]));
  const dotmat=new THREE.MeshBasicMaterial({color:0x1cab99,transparent:true,opacity:.6});
  const dots=paths.flatMap((path,j)=>Array.from({length:7},(_,i)=>{const mesh=new THREE.Mesh(new THREE.SphereGeometry(.028,6,6),dotmat);root.add(mesh);return{mesh,path,offset:i/7+j*.12};}));
  let angle=.63,elevation=.44,distance=17.8,mode='all',paused=reduced,dragging=false,lastX=0,lastY=0,t=0,roofTarget=0;
  function size(){const w=container.clientWidth,h=container.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();distance=w<450?19.5:17.8;}
  const observer=new ResizeObserver(size);observer.observe(container);size();
  function updateCamera(){camera.position.set(Math.sin(angle)*Math.cos(elevation)*distance,Math.sin(elevation)*distance+1.3,Math.cos(angle)*Math.cos(elevation)*distance);camera.lookAt(focus);}
  container.addEventListener('pointerdown',e=>{if(e.pointerType==='touch')return;dragging=true;lastX=e.clientX;lastY=e.clientY;container.setPointerCapture(e.pointerId);});
  container.addEventListener('pointermove',e=>{if(!dragging)return;angle+=(e.clientX-lastX)*.006;elevation=Math.max(.2,Math.min(.8,elevation+(e.clientY-lastY)*.004));lastX=e.clientX;lastY=e.clientY;});
  container.addEventListener('pointerup',()=>dragging=false);container.addEventListener('pointercancel',()=>dragging=false);
  const shell=container.closest('.scene-shell');
  shell.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>{
    const action=button.dataset.scene;
    if(action==='motion'){paused=!paused;button.setAttribute('aria-pressed',String(paused));button.textContent=paused?'Play motion':'Pause motion';return;}
    if(action==='reset'){angle=.63;elevation=.44;roofTarget=0;mode='all';shell.querySelectorAll('[data-scene="all"],[data-scene="air"],[data-scene="exploded"]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scene==='all')));return;}
    mode=action;roofTarget=action==='exploded'?1.1:0;dotmat.opacity=action==='air'?.95:.6;dots.forEach(({mesh})=>mesh.scale.setScalar(action==='air'?1.8:1));shell.querySelectorAll('[data-scene="all"],[data-scene="air"],[data-scene="exploded"]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
  }));
  let visible=true;new IntersectionObserver(entries=>visible=entries[0].isIntersecting).observe(container);
  let prev=performance.now();
  function animate(now){requestAnimationFrame(animate);const delta=Math.min((now-prev)/1000,.05);prev=now;if(!visible||document.hidden)return;if(!paused)t+=delta;
    if(!dragging&&!paused)angle+=Math.sin(t*.25)*.00014;
    ahu.position.y=THREE.MathUtils.lerp(ahu.position.y,roofTarget,.06);vents.position.y=THREE.MathUtils.lerp(vents.position.y,roofTarget*.55,.06);
    fan.rotation.z=paused?fan.rotation.z:t*2.5;
    dots.forEach(({mesh,path,offset})=>{mesh.visible=mode!=='exploded';mesh.position.copy(path.getPoint((t*.17+offset)%1));});
    updateCamera();renderer.render(scene,camera);
  }requestAnimationFrame(animate);
  container.setAttribute('aria-label','Interactive 3D conceptual clean room facility. Drag with a mouse to rotate. Use the controls to explore airflow and equipment layers.');
}
