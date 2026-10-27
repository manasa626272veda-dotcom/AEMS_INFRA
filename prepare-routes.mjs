import {readFile,writeFile,mkdir} from 'node:fs/promises';
import {aliases,pagePath} from './dist/routes.js';
const root=new URL('./dist/',import.meta.url);
const content=JSON.parse(await readFile(new URL('content.json',root),'utf8'));
const pages=[...Object.keys(content),'products.html'];
const manifest={pages:pages.map(filename=>({filename,path:pagePath(filename),title:content[filename]?.title||'Product catalogue'})),aliases};
// Root-relative assets let file.html and file/index.html serve the same page.
for(const filename of pages){
  if(filename==='index.html')continue;
  const directory=new URL(filename.replace(/\.html$/,'')+'/',root);
  await mkdir(directory,{recursive:true});
  await writeFile(new URL('index.html',directory),await readFile(new URL(filename,root)));
}
for(const [slug,filename] of Object.entries(aliases)){
  const directory=new URL(slug+'/',root);await mkdir(directory,{recursive:true});
  await writeFile(new URL('index.html',directory),await readFile(new URL(filename,root)));
}
await writeFile(new URL('routes-manifest.json',root),JSON.stringify(manifest,null,2)+'\n');
console.log(`Prepared clean URL and trailing-slash entries for ${pages.length} pages and ${Object.keys(aliases).length} aliases`);
