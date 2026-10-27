import http from 'node:http';
import {readFile,stat} from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {resolvePage} from './dist/routes.js';
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2'};
export async function createAemsServer(root=path.resolve('dist')){
  const content=JSON.parse(await readFile(path.join(root,'content.json'),'utf8'));
  const filenames=[...Object.keys(content),'products.html'];
  return http.createServer(async(req,res)=>{
    try{
      const pathname=new URL(req.url,'http://localhost').pathname;
      const page=resolvePage(pathname,filenames);
      const relative=page||decodeURIComponent(pathname).replace(/^\//,'');
      const file=path.resolve(root,relative);
      if(!file.startsWith(root+path.sep))throw Error('Invalid path');
      if(!(await stat(file)).isFile())throw Error('Not a file');
      res.setHeader('Content-Type',mime[path.extname(file)]||'application/octet-stream');
      res.setHeader('Cache-Control','no-cache');
      res.end(await readFile(file));
    }catch{
      res.statusCode=404;
      if(/\.(js|css|json|png|svg|woff2)$/.test(req.url.split('?')[0])){res.setHeader('Content-Type','text/plain');res.end('Not found');return;}
      res.setHeader('Content-Type','text/html; charset=utf-8');res.end(await readFile(path.join(root,'404.html')));
    }
  });
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
  const server=await createAemsServer();server.listen(4173,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:4173'));
}
