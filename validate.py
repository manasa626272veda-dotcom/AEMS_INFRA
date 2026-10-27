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
for asset in ['assets/three.module.js','assets/RoomEnvironment.js','assets/RoundedBoxGeometry.js','assets/gsap.min.js','assets/ScrollTrigger.min.js','style.css','material.css','experience.css','app.js','scene.js','equipment.js','routes.js','motion.js']:
    assert (DIST/asset).stat().st_size>100
assert 'export {' in (DIST/'assets/three.module.js').read_text(encoding='utf-8')
for name in list(data)+['products.html']:
    shell=(DIST/name).read_text(encoding='utf-8')
    assert 'href="material.css"' in shell, 'Material 3 styles missing: '+name
    assert '<base href="/">' in shell, 'Root asset base missing: '+name
    assert 'href="experience.css"' in shell, 'Enhanced experience styles missing: '+name
    if name!='index.html':
        assert (DIST/name.replace('.html','')/'index.html').is_file(), 'Trailing slash entry missing: '+name
    assert shell.index('type="importmap"') < shell.index('type="module"'), 'Import map must precede modules'
for module in ['app.js','scene.js','equipment.js','routes.js','motion.js','assets/RoomEnvironment.js','assets/RoundedBoxGeometry.js']:
    file=DIST/module
    for src in re.findall(r"from ['\"]([^'\"]+)['\"]",file.read_text(encoding='utf-8')):
        assert (file.parent/src).is_file(), 'Missing module: '+src
tables=sum(p['content'].count('<table>') for p in data.values())
assert tables>=3, 'Specification tables missing'
if errors:raise SystemExit('\n'.join(errors))
print(f'PASS: {len(data)} original routes + product catalogue; {len(list((DIST/"assets/img").glob("*.png")))} valid PNG assets; {tables} retained specification tables; original local links resolve.')
