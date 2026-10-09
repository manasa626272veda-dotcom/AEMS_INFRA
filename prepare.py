import json, html
from pathlib import Path
ROOT=Path(__file__).parent
DIST=ROOT/'dist'
data=json.loads((DIST/'content.json').read_text(encoding='utf-8'))
shell=(DIST/'index.html').read_text(encoding='utf-8')
for name,page in data.items():
    if name=='index.html':continue
    title=html.escape(page['title'])+' | AEMS Infra'
    output=shell.replace('AEMS Infra — Precision in every environment</title>',title+'</title>')
    (DIST/name).write_text(output,encoding='utf-8')
(DIST/'products.html').write_text(shell.replace('AEMS Infra — Precision in every environment</title>','Product catalogue | AEMS Infra</title>'),encoding='utf-8')
(DIST/'404.html').write_text(shell,encoding='utf-8')
manifest=ROOT/'.openai'/'hosting.json'
config=json.loads(manifest.read_text());config['static']={'directory':'dist'}
manifest.write_text(json.dumps(config,indent=2)+'\n')
print('Prepared',len(data)+1,'static routes')
