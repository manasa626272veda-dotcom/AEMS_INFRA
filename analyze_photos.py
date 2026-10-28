"""Measure empty image margins; keep every original image byte-for-byte intact."""
import json
from pathlib import Path
from PIL import Image, ImageChops

ROOT=Path(__file__).parent
result={}
for file in sorted((ROOT/'dist/assets/img').glob('*.png')):
    if file.name.startswith(('AEMS','c1','c2','c3','c4','c5','c6','c7','c8','c9','affiliations')):
        continue
    image=Image.open(file).convert('RGBA')
    width,height=image.size
    rgb=image.convert('RGB')
    # Only white/transparent edge canvases qualify for margin trimming.
    edge=[]
    for x in range(0,width,max(1,width//100)):
        edge.extend([image.getpixel((x,0)),image.getpixel((x,height-1))])
    for y in range(0,height,max(1,height//100)):
        edge.extend([image.getpixel((0,y)),image.getpixel((width-1,y))])
    white_edges=sum(1 for r,g,b,a in edge if a<20 or min(r,g,b)>242)/len(edge)
    bounds=(0,0,width,height)
    if white_edges>.92:
        difference=ImageChops.difference(rgb,Image.new('RGB',image.size,'white'))
        mask=difference.convert('L').point(lambda v:255 if v>20 else 0)
        mask=ImageChops.multiply(mask,image.getchannel('A').point(lambda a:255 if a>20 else 0))
        detected=mask.getbbox()
        if detected:
            left,top,right,bottom=detected
            pad=max(3,round(max(right-left,bottom-top)*.025))
            bounds=(max(0,left-pad),max(0,top-pad),min(width,right+pad),min(height,bottom+pad))
    result['assets/img/'+file.name]={'width':width,'height':height,'bounds':list(bounds)}
(ROOT/'dist/photo-bounds.json').write_text(json.dumps(result,indent=2)+'\n')
for name in ['lab-furniture.png','reverse-l-f.png']:
    print(name,result.get('assets/img/'+name))
print('Measured',len(result),'original photos without modifying them')
