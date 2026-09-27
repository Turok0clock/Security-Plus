import json,random
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
objectives=[];questions=[]
for line in (ROOT/'authoring/curriculum.txt').read_text().splitlines():
 if not line:continue
 if line.startswith('#'):
  id,title,tip,flow=line[1:].split('|'); obj={'id':id,'title':title,'tip':tip,'flow':flow.split(' → '),'concepts':[]};objectives.append(obj)
 else:
  label,definition,cases=line.split('|');obj['concepts'].append({'label':label,'definition':definition,'cases':cases.split('~')})
for o in objectives:
 assert len(o['concepts'])==10,o['id']
 for i,c in enumerate(o['concepts']):
  assert len(c['cases'])==3
  for s,case in enumerate(c['cases']):
   rng=random.Random(f"{o['id']}-{i}-{s}")
   peers=[x for x in o['concepts'] if x is not c]
   if o['id']=='1.1':peers=[x for x in peers if (o['concepts'].index(x)<4)==(i<4)]
   if o['id']=='2.1':peers=[x for x in peers if (6<=o['concepts'].index(x)<=8)==(6<=i<=8)]
   if len(peers)<3:peers=[x for x in o['concepts'] if x is not c]
   opts=[c]+rng.sample(peers,3);rng.shuffle(opts)
   axis='implementation category' if o['id']=='1.1' and i<4 else 'control purpose' if o['id']=='1.1' else 'motivation' if o['id']=='2.1' and 6<=i<=8 else 'term or approach'
   questions.append({'id':f"{o['id']}-{s+1}-{i+1}",'objective':o['id'],'set':s+1,'concept':c['label'],'prompt':case+' Which '+axis+' BEST matches this scenario?','options':[x['label'] for x in opts],'correct':opts.index(c),'explanations':[('Correct. ' if x is c else 'Not the best match. ')+x['definition']+(' The scenario describes this property or behavior.' if x is c else ' The scenario instead points to '+c['label']+'.') for x in opts]})
(ROOT/'js/curriculum.js').write_text('window.CURRICULUM='+json.dumps({'objectives':objectives,'questions':questions},ensure_ascii=False)+';')
print(len(objectives),len(questions))
