import json, re, html
from html.parser import HTMLParser
from pathlib import Path
ROOT=Path(__file__).parent
class Node:
    def __init__(self,tag='',attrs=None,parent=None): self.tag=tag; self.attrs=dict(attrs or []); self.parent=parent; self.children=[]
    def text(self): return ''.join(c.text() if isinstance(c,Node) else c for c in self.children)
    def walk(self):
        yield self
        for c in self.children:
            if isinstance(c,Node): yield from c.walk()
class Parser(HTMLParser):
    def __init__(self): super().__init__(); self.root=Node(); self.current=self.root
    def handle_starttag(self,tag,attrs):
        n=Node(tag,attrs,self.current); self.current.children.append(n)
        if tag not in ['img','br','hr','input','meta','link','source','wbr']: self.current=n
    def handle_endtag(self,tag):
        n=self.current
        while n.parent:
            if n.tag==tag: self.current=n.parent; break
            n=n.parent
    def handle_data(self,data): self.current.children.append(data)
def escape(s): return html.escape(s,quote=True)
allowed={'p','ul','ol','li','table','thead','tbody','tr','th','td','strong','em','b','span','br','h1','h2','h3','h4','h5','h6','a'}
def render(n):
    if not isinstance(n,Node): return escape(n)
    children=''.join(render(c) for c in n.children)
    if n.tag not in allowed: return children
    tag='h3' if re.match('h[1-6]',n.tag) else n.tag
    attrs=''
    if tag=='a':
        href=n.attrs.get('href','')
        if href and not href.startswith('javascript:'): attrs=' href="'+escape(href)+'"'
    if tag in ['th','td']:
        for key in ['rowspan','colspan']:
            if n.attrs.get(key,'').isdigit(): attrs+=' '+key+'="'+n.attrs[key]+'"'
    return '<'+tag+attrs+'>'+children+'</'+tag+'>' if tag!='br' else '<br>'
data={}
for file in (ROOT/'research'/'original').glob('*.html'):
    parser=Parser(); parser.feed(file.read_text(encoding='utf-8')); nodes=list(parser.root.walk())
    sections=[n for n in nodes if n.tag=='section' and 'banner_sec' not in n.attrs.get('class','')]
    blocks=[]; images=[]
    for section in sections:
        for n in section.walk():
            chain=[]; a=n.parent
            while a and a!=section: chain.append(a); a=a.parent
            if any('types' in a.attrs.get('class','') or a.tag in ['script','style'] for a in chain): continue
            if n.tag=='img': images.append('assets/'+n.attrs.get('src','').removeprefix('./'))
            if n.tag in ['p','ul','ol','table','h1','h2','h3','h4','h5','h6'] and not any(a.tag in ['p','ul','ol','table'] for a in chain):
                if n.text().strip(): blocks.append(render(n))
    heads=[n for n in nodes if re.match('h[1-6]$',n.tag) and n.text().strip()]
    title=re.sub(r'\s+',' ',heads[0].text()).strip() if heads else file.stem
    paras=[n for n in nodes if n.tag=='p' and n.text().strip()]
    desc=re.sub(r'\s+',' ',paras[0].text()).strip() if paras else ''
    data[file.name]={'title':title,'description':desc,'content':'\n'.join(blocks),'images':list(dict.fromkeys(images))}
(ROOT/'dist'/'content.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
print('Extracted',len(data),'pages with original content and tables')
