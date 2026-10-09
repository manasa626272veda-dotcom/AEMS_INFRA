import json, re
from pathlib import Path
ROOT=Path(__file__).parent; DIST=ROOT/'dist'
data=json.loads((DIST/'content.json').read_text(encoding='utf-8'))
assert len(data)==25, 'Incomplete original page coverage'
errors=[]
for name,page in data.items():
    if not (DIST/name).is_file():errors.append('Missing route: '+name)
    if not page['content'] and name not in ['clients.html','affiliations.html']:errors.append('Empty page content: '+name)
    for src in page['images']:
        path=DIST/src
        if not path.is_file():errors.append('Missing image: '+src)
        elif path.suffix=='.png' and not path.read_bytes().startswith(b'\x89PNG'):errors.append('Invalid PNG: '+src)
    for href in re.findall(r'href="([^"#]+)"',page['content']):
        if ':' not in href and href.endswith('.html') and not (DIST/href).exists():errors.append('Broken original link: '+href)
for asset in ['assets/three.module.js','style.css','app.js','scene.js']:
    assert (DIST/asset).stat().st_size>100
assert 'export {' in (DIST/'assets/three.module.js').read_text(encoding='utf-8')
tables=sum(p['content'].count('<table>') for p in data.values())
assert tables>=3, 'Specification tables missing'
if errors:raise SystemExit('\n'.join(errors))
print(f'PASS: {len(data)} original routes + product catalogue; {len(list((DIST/"assets/img").glob("*.png")))} valid PNG assets; {tables} retained specification tables; original local links resolve.')
