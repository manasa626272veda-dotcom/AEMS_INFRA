import concurrent.futures, json, re, subprocess
from pathlib import Path
from urllib.parse import urljoin, urlparse

ROOT=Path(__file__).parent
RAW=ROOT/'research'/'original'; RAW.mkdir(parents=True,exist_ok=True)
ASSETS=ROOT/'dist'/'assets'; ASSETS.mkdir(parents=True,exist_ok=True)
base='https://aemsinfra.com/'
home=(ROOT/'original.html').read_text(encoding='utf-8')
(RAW/'index.html').write_text(home,encoding='utf-8')
pages=sorted(set(re.findall(r'href="([^"#]+\.html)"',home)))
def fetch(name, folder):
    dest=folder/name
    dest.parent.mkdir(parents=True,exist_ok=True)
    url=urljoin(base,name)
    result=subprocess.run(['curl.exe','-sS','-L','--retry','2','--max-time','55',url,'-o',str(dest)],capture_output=True)
    return name, result.returncode==0 and dest.exists() and dest.stat().st_size>100
with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
    results=list(pool.map(lambda p:fetch(p,RAW),[p for p in pages if p!='index.html']))
print('Pages:',json.dumps(results))
assets=set()
for file in RAW.glob('*.html'):
    for src in re.findall(r'<img[^>]+src=[\"\']([^\"\']+)',file.read_text(encoding='utf-8')):
        src=src.removeprefix('./')
        if src.startswith('img/'): assets.add(src)
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as pool:
    results=list(pool.map(lambda p:fetch(p,ASSETS),sorted(assets)))
print('Assets:',json.dumps(results))
print('Complete',len(pages),'pages,',len(assets),'assets')
