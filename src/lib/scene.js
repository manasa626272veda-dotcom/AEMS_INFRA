import * as THREE from '/assets/three.module.js';
import {RoomEnvironment} from '/assets/RoomEnvironment.js';
import {RoundedBoxGeometry} from '/assets/RoundedBoxGeometry.js';

export function createFacility(container) {
  const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');const reduced=motionPreference.matches;
  let renderer;
  try { renderer=new THREE.WebGLRenderer({antialias:true,alpha:true}); }
  catch {const shell=container.closest('.scene-shell');if(shell?.querySelector('[data-facility-title]')){shell.querySelector('[data-facility-title]').textContent='Original AEMS environment';shell.querySelector('[data-facility-description]').textContent='Interactive 3D is unavailable on this device.';}container.innerHTML='<div class="model-fallback"><img src="assets/img/about-us-img.png" alt="AEMS clean room environment"></div>';container.closest('.scene-shell')?.querySelectorAll('button').forEach(b=>b.disabled=true);container.setAttribute('aria-label','AEMS facility image. Interactive 3D is unavailable on this device.');return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<768?1.5:2));
  renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
  renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;
  container.append(renderer.domElement);
  const scene=new THREE.Scene();scene.background=new THREE.Color(0xe8eff4);
  const environment=new RoomEnvironment();const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromScene(environment,.04).texture;environment.dispose();pmrem.dispose();
  const camera=new THREE.PerspectiveCamera(34,1,.1,100);
  const focus=new THREE.Vector3(0,1.7,0);
  scene.add(new THREE.HemisphereLight(0xf5faff,0x627789,1.7));
  const sun=new THREE.DirectionalLight(0xffffff,3.3);sun.position.set(-3,10,8);sun.castShadow=true;sun.shadow.mapSize.set(innerWidth<768?1024:2048,innerWidth<768?1024:2048);sun.shadow.camera.left=-9;sun.shadow.camera.right=9;sun.shadow.camera.top=8;sun.shadow.camera.bottom=-8;sun.shadow.normalBias=.018;sun.shadow.radius=3;scene.add(sun);
  const rim=new THREE.DirectionalLight(0x9ed7f0,1.5);rim.position.set(8,5,-6);scene.add(rim);
  const root=new THREE.Group();scene.add(root);
  const mat=(color,extra={})=>new THREE.MeshStandardMaterial({color,roughness:.4,metalness:.15,envMapIntensity:.7,...extra});
  const white=mat(0xf0f3f5,{roughness:.32}), teal=mat(0x12667d,{metalness:.45,roughness:.29}),dark=mat(0x16364c),silver=mat(0xc4ced7,{metalness:.92,roughness:.24}),floor=mat(0xd2dfe7,{roughness:.23}),glass=new THREE.MeshPhysicalMaterial({color:0xb4d4e7,transparent:true,opacity:.13,metalness:.1,roughness:.035,clearcoat:1,depthWrite:false}),light=mat(0xd6f3ff,{emissive:0x8cd9ee,emissiveIntensity:.65});
  const geometries=new Map();
  function box(w,h,d,x,y,z,m=white,parent=root){const key=`${w},${h},${d}`;if(!geometries.has(key))geometries.set(key,Math.min(w,h,d)>.06?new RoundedBoxGeometry(w,h,d,2,Math.min(w,h,d,.3)*.08):new THREE.BoxGeometry(w,h,d));const mesh=new THREE.Mesh(geometries.get(key),m);mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
  function tube(points,r=.07,m=silver,parent=root){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const mesh=new THREE.Mesh(new THREE.TubeGeometry(curve,40,r,8,false),m);mesh.castShadow=true;parent.add(mesh);return curve;}
  box(8.6,.23,6.3,0,-.18,0,dark);
  box(8.45,.17,6.15,0,.02,0,floor);
  box(8.5,.035,.035,0,-.075,3.16,light);box(.035,.035,6.3,4.31,-.075,0,light);
  for(let x=-3.5;x<=3.5;x+=1)box(.008,.005,6.1,x,.112,0,mat(0x94b29c));
  for(let z=-2.5;z<=2.5;z+=1)box(8.3,.005,.008,0,.112,z,mat(0x94b29c));
  // Inert modular wall panels and recessed joints.
  for(let i=0;i<7;i++){box(1.02,2.7,.16,-3.6+i*1.04,1.42,-2.7);box(.026,2.71,.018,-3.08+i*1.04,1.42,-2.6,silver);}
  for(let i=0;i<4;i++){box(.16,2.7,1.07,-4,1.42,-2.09+i*1.1);box(.016,2.71,.025,-3.9,1.42,-1.56+i*1.1,silver);}
  box(8.15,.11,.13,0,2.82,-2.7,silver);box(.13,.11,5.5,-4,2.82,0,silver);
  // Glazed front wall, open in the centre to reveal equipment.
  for(const x of [-3.97,0,3.97])box(.075,2.75,.075,x,1.43,2.7,silver);
  box(.075,2.75,.075,3.97,1.43,-2.7,silver);box(.075,.075,5.4,3.97,2.8,0,silver);box(.035,.035,5.3,3.97,2.7,0,light);
  box(8.05,.075,.08,0,2.8,2.7,silver);box(8.05,.09,.09,0,.12,2.7,silver);
  box(3.8,2.6,.035,-2.0,1.43,2.7,glass);box(3.8,2.6,.035,2,1.43,2.7,glass);
  box(.09,2.7,5.4,0,1.42,0,glass);box(.09,.08,5.4,0,2.8,0,silver);
  // Stainless laboratory work benches and storage.
  function bench(x,z,w=2){box(w,.1,.8,x,1.05,z,silver);box(w-.12,.65,.72,x,.65,z,white);for(const dx of [-w*.32,w*.32])box(.04,.08,.2,x+dx,.87,z+.38,dark);box(w,.08,.8,x,.28,z,dark);for(const dx of [-w*.24,w*.24]){box(w*.47,.56,.025,x+dx,.66,z+.38,silver);box(.035,.16,.045,x+dx,.73,z+.415,dark);}}
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
  for(let i=0;i<8;i++)box(.035,.39,.64,-2+i*.62,3.12,-1.05,white,vents);
  // Utility piping on the exterior side.
  const pipes=new THREE.Group();root.add(pipes);
  for(let i=0;i<3;i++)tube([[4.15,.25,-2.3+i*.28],[4.15,2.9,-2.3+i*.28],[3.8,3.3,-2.3+i*.28],[.3,3.3,-2.3+i*.28]],.048,[teal,silver,dark][i],pipes);
  for(let i=0;i<4;i++)box(.4,.07,.15,4.1,.7+i*.6,-2.05,white,pipes);
  // Floor plan markers.
  for(let i=0;i<7;i++)box(.08,.009,.36,-.5,.12,-1.8+i*.58,teal);
  const ground=new THREE.Mesh(new THREE.PlaneGeometry(200,200),new THREE.MeshStandardMaterial({color:0xe8eff4,roughness:.85}));ground.rotation.x=-Math.PI/2;ground.position.y=-.36;ground.receiveShadow=true;scene.add(ground);
  const grid=new THREE.GridHelper(20,30,0x367064,0x367064);grid.position.y=-.35;grid.material.transparent=true;grid.material.opacity=.22;grid.visible=false;scene.add(grid);
  const ring=new THREE.Mesh(new THREE.TorusGeometry(6.4,.012,6,120),new THREE.MeshBasicMaterial({color:0x72a688,transparent:true,opacity:.35}));ring.rotation.x=Math.PI/2;ring.position.y=-.34;ring.visible=false;scene.add(ring);
  const paths=[[-2.4,-.8],[1.1,-1],[2.45,1.45]].map(([x,z])=>new THREE.CatmullRomCurve3([new THREE.Vector3(x,2.6,z),new THREE.Vector3(x,1.7,z),new THREE.Vector3(x+.4,.3,z+.5)]));
  const streamMaterial=new THREE.ShaderMaterial({transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,uniforms:{uTime:{value:0},uStrength:{value:0}},vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}',fragmentShader:'varying vec2 vUv; uniform float uTime; uniform float uStrength; void main(){float pulse=pow(max(0.0,sin(vUv.x*68.0-uTime*5.0)),8.0);float edge=1.0-abs(vUv.y-.5)*2.0;gl_FragColor=vec4(.67,1.0,.57,pulse*edge*uStrength);}' });
  const streams=paths.map(path=>{const mesh=new THREE.Mesh(new THREE.TubeGeometry(path,56,.105,10,false),streamMaterial);root.add(mesh);return mesh;});
  const dotmat=new THREE.MeshBasicMaterial({color:0xd8ffb3,transparent:true,opacity:.7});
  const dots=paths.flatMap((path,j)=>Array.from({length:15},(_,i)=>{const mesh=new THREE.Mesh(new THREE.SphereGeometry(.028,6,6),dotmat);root.add(mesh);return{mesh,path,offset:i/15+j*.12};}));
  let angle=.63,elevation=.49,distance=17.8,mode='all',paused=reduced,dragging=false,lastX=0,lastY=0,t=0,roofTarget=0,dirty=true;
  function size(){dirty=true;const w=container.clientWidth,h=container.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();distance=w<450?20.5:(w<620?19:17.6);}
  const observer=new ResizeObserver(size);observer.observe(container);size();
  function updateCamera(){camera.position.set(Math.sin(angle)*Math.cos(elevation)*distance,Math.sin(elevation)*distance+1.7,Math.cos(angle)*Math.cos(elevation)*distance);camera.lookAt(focus);}
  const touches=new Map();let pinchDistance=0,travel=0;
  const raycaster=new THREE.Raycaster(),mouse=new THREE.Vector2();
  const inspect=event=>{dirty=true;const rect=container.getBoundingClientRect();mouse.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(mouse,camera);const hit=raycaster.intersectObjects([ahu,vents,pipes],true)[0];if(!hit)return;let object=hit.object;while(object.parent!==root&&object.parent)object=object.parent;const item=object===ahu?['Air handling unit','Illustrative air treatment section connected to the clean room air distribution system.','air']:object===vents?['Air distribution','Ductwork and terminal outlets illustrate how conditioned air reaches the working area.','air']:['Integrated utilities','External service runs illustrate the utility connections coordinated around the enclosure.','exploded'];paused=true;const motion=shell.querySelector('[data-scene="motion"]');motion.setAttribute('aria-pressed','true');motion.textContent='Play motion';shell.querySelector('[data-facility-title]').textContent=item[0];shell.querySelector('[data-facility-description]').textContent=item[1];container.dataset.selectedSystem=item[0];changeMode(item[2]);};
  container.addEventListener('pointerdown',e=>{dirty=true;touches.set(e.pointerId,{x:e.clientX,y:e.clientY});dragging=true;travel=0;lastX=e.clientX;lastY=e.clientY;container.setPointerCapture(e.pointerId);if(touches.size===2){const [a,b]=[...touches.values()];pinchDistance=Math.hypot(a.x-b.x,a.y-b.y);}});
  container.addEventListener('pointermove',e=>{if(!touches.has(e.pointerId))return;dirty=true;touches.set(e.pointerId,{x:e.clientX,y:e.clientY});if(touches.size===2){const [a,b]=[...touches.values()],span=Math.hypot(a.x-b.x,a.y-b.y);if(span>0&&pinchDistance>0)distance=Math.max(10,Math.min(30,distance*pinchDistance/span));pinchDistance=span;travel=20;}else{travel+=Math.abs(e.clientX-lastX)+Math.abs(e.clientY-lastY);angle+=(e.clientX-lastX)*.006;elevation=Math.max(.2,Math.min(.85,elevation+(e.clientY-lastY)*.004));}lastX=e.clientX;lastY=e.clientY;});
  container.addEventListener('pointerup',e=>{if(touches.size===1&&travel<7)inspect(e);touches.delete(e.pointerId);dragging=touches.size>0;pinchDistance=0;});container.addEventListener('pointercancel',e=>{touches.delete(e.pointerId);dragging=touches.size>0;});
  const shell=container.closest('.scene-shell');
  container.addEventListener('keydown',e=>{dirty=true;if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(e.key))return;e.preventDefault();if(e.key==='ArrowLeft')angle-=.12;if(e.key==='ArrowRight')angle+=.12;if(e.key==='ArrowUp')elevation=Math.min(.85,elevation+.05);if(e.key==='ArrowDown')elevation=Math.max(.2,elevation-.05);if(e.key==='Home'){angle=.63;elevation=.49;}});
  const preferenceChange=event=>{if(event.matches){dirty=true;paused=true;const b=shell.querySelector('[data-scene="motion"]');b.setAttribute('aria-pressed','true');b.textContent='Play motion';}};motionPreference.addEventListener('change',preferenceChange);
  function changeMode(action){dirty=true;mode=action;const title=shell.querySelector('[data-facility-title]'),description=shell.querySelector('[data-facility-description]');if(!container.dataset.selectedSystem){title.textContent=action==='air'?'Air treatment and distribution':action==='exploded'?'Equipment and service layers':'Explore connected systems';description.textContent=action==='air'?'The highlighted paths illustrate supply air movement through the system.':action==='exploded'?'Equipment layers separate to reveal coordinated service routes.':'Tap the air handler, ducts or utilities to inspect a system.';}roofTarget=action==='exploded'?1.8:0;streamMaterial.uniforms.uStrength.value=action==='air'?.75:0;dotmat.opacity=action==='air'?1:0;dots.forEach(({mesh})=>mesh.scale.setScalar(action==='air'?2.1:1));glass.opacity=action==='air'?.07:.18;teal.emissive.set(action==='air'?0x0a5545:0x000000);shell.querySelectorAll('[data-scene="all"],[data-scene="air"],[data-scene="exploded"]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.scene===action)));const index=shell.querySelector('.model-index');if(index)index.textContent=action==='all'?'01 / 03':action==='air'?'02 / 03':'03 / 03';}
  shell.querySelectorAll('[data-focus]').forEach(button=>button.addEventListener('click',()=>{const kind=button.dataset.focus;changeMode(kind==='hvac'?'air':kind==='mep'?'exploded':'all');if(kind==='room'){angle=.63;elevation=.49;}}));
  shell.querySelectorAll('[data-scene]').forEach(button=>button.addEventListener('click',()=>{
    dirty=true;const action=button.dataset.scene;
    if(action==='motion'){paused=!paused;button.setAttribute('aria-pressed',String(paused));const label=button.querySelector('[data-motion-label]')||button;label.textContent=paused?'Play motion':'Pause motion';return;}
    if(action==='reset'){angle=.63;elevation=.49;size();changeMode('all');delete container.dataset.selectedSystem;shell.querySelector('[data-facility-title]').textContent='Explore connected systems';shell.querySelector('[data-facility-description]').textContent='Tap the air handler, ducts or utilities to inspect a system.';return;}
    delete container.dataset.selectedSystem;changeMode(action);
  }));
  let visible=true;const visibilityObserver=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;dirty=true;});visibilityObserver.observe(container);
  let prev=performance.now();
  let frameId,disposed=false;function animate(now){if(disposed)return;frameId=requestAnimationFrame(animate);const delta=Math.max(0,Math.min((now-prev)/1000,.05));prev=now;if(!visible||document.hidden)return;if(!dirty&&paused&&!dragging&&Math.abs(ahu.position.y-roofTarget)<.002&&Math.abs(vents.position.y-roofTarget*.55)<.002)return;if(!paused)t+=delta;
    if(!dragging&&!paused)angle+=Math.sin(t*.25)*.00014;
    ahu.position.y=THREE.MathUtils.lerp(ahu.position.y,roofTarget,motionPreference.matches?1:.1);vents.position.y=THREE.MathUtils.lerp(vents.position.y,roofTarget*.55,motionPreference.matches?1:.1);
    fan.rotation.z=paused?fan.rotation.z:t*2.5;
    streamMaterial.uniforms.uTime.value=t;streams.forEach(mesh=>mesh.visible=mode==='air');
    dots.forEach(({mesh,path,offset})=>{mesh.visible=mode!=='exploded';mesh.position.copy(path.getPoint((t*.17+offset)%1));});
    updateCamera();renderer.render(scene,camera);dirty=false;
  }frameId=requestAnimationFrame(animate);
  container.setAttribute('aria-label','Interactive 3D conceptual clean room facility. Drag with a mouse to rotate. Use the controls to explore airflow and equipment layers.');
  return {setMode:changeMode,destroy(){motionPreference.removeEventListener('change',preferenceChange);disposed=true;cancelAnimationFrame(frameId);observer.disconnect();visibilityObserver.disconnect();const materials=new Set();scene.traverse(object=>{object.geometry?.dispose();if(object.material)materials.add(object.material);});materials.forEach(m=>m.dispose());scene.environment?.dispose();renderer.dispose();renderer.forceContextLoss();renderer.domElement.remove();}};
}
