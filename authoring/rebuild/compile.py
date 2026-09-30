from pathlib import Path
import json,hashlib
root=Path(__file__).resolve().parents[2]
modules={}
for p in sorted(Path(__file__).parent.glob('*.txt')):
 current=None
 for line in p.read_text().splitlines():
  line=line.strip()
  if not line or line.startswith('#'):continue
  if line.startswith('@'):
   current={'id':line[1:],'teach':[],'terms':[],'questions':[]};modules[current['id']]=current
  elif line.startswith('T|'):
   _,name,description=line.split('|',2);current['terms'].append([name,description])
  elif line.startswith('P|'):current['teach'].append(line[2:])
  elif line.startswith('F|'):current['flow']=line[2:].split('|')
  elif line.startswith('E|'):current['example']=line[2:]
  elif line.startswith('Q|'):
   _,indices,prompt,why=line.split('|',3);ix=list(map(int,indices.split(',')));assert len(ix)==4 and len(set(ix))==4,(p,line)
   terms=current['terms'];opts=[terms[i][0] for i in ix];n=len(current['questions']);correct=n%4
   options=opts[-correct:]+opts[:-correct] if correct else opts
   explanations=[]
   for option in options:
    definition=next(t[1] for t in terms if t[0]==option)
    explanations.append(('Best fit. '+why+' '+definition) if option==opts[0] else (definition+' In this situation, '+why[0].lower()+why[1:]))
   current['questions'].append({'id':f"R11-{current['id']}-{n+1}",'objective':current['id'],'set':n//10+1,'concept':opts[0],'prompt':prompt.replace('\\n','\n'),'options':options,'correct':correct,'explanations':explanations,'revision':'reasoning-v11','evidence':why})
overrides=json.loads((Path(__file__).parent/'applied.json').read_text())
for oid,n,prompt,opts,why in overrides:
 old=modules[oid]['questions'][n];rotation=n%4
 options=opts[-rotation:]+opts[:-rotation] if rotation else opts
 old.update(concept=opts[0],prompt=prompt,options=options,correct=rotation,evidence=why,explanations=[('Best answer. ' if o==opts[0] else 'Not the best answer. ')+why for o in options])
for id,m in modules.items():
 assert len(m['questions'])==30,(id,len(m['questions']))
 assert len(m['teach'])>=2 and m.get('example') and len(m['terms'])>=10,id
out='window.REBUILT_CONTENT='+json.dumps(modules,ensure_ascii=False,separators=(',',':'))+';\n'
(root/'js/rebuilt-content.js').write_text(out)
print(f"{len(modules)} guides / {sum(len(m['questions']) for m in modules.values())} new questions")
