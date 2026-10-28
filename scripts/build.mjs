import {build} from 'esbuild';
import {cp,readFile,writeFile,mkdir,rm} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
await mkdir('dist',{recursive:true});await cp('public','dist',{recursive:true});
await writeFile('dist/index.html',await readFile('src/index.html'));
await writeFile('dist/routes.js',await readFile('src/lib/routes.js'));
await build({entryPoints:['src/main.jsx'],outfile:'dist/app.js',bundle:true,format:'esm',target:'es2022',minify:true,sourcemap:true,plugins:[{name:'local-three-assets',setup(build){build.onResolve({filter:/^\/assets\//},args=>({path:'.'+args.path,external:true}));}}],define:{'process.env.NODE_ENV':'"production"'},jsx:'automatic'});
for(const file of ['equipment.js','scene.js','motion.js','product-photo.js','premium-home.js'])await rm('dist/'+file,{force:true});
const content=JSON.parse(await readFile('public/content.json','utf8'));const shell=await readFile('dist/index.html','utf8');
const escape=s=>s.replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
for(const [name,page] of Object.entries(content)){if(name!=='index.html')await writeFile('dist/'+name,shell.replace(/<title>.*?<\/title>/,'<title>'+escape(page.title)+' | AEMS Infra</title>'));}
await writeFile('dist/products.html',shell.replace(/<title>.*?<\/title>/,'<title>Product catalogue | AEMS Infra</title>'));await writeFile('dist/404.html',shell);
execFileSync(process.execPath,['prepare-routes.mjs'],{stdio:'inherit'});
console.log('Built React website with 26 preserved page routes');
