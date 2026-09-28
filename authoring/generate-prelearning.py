"""Generate an independent 280-item foundation bank, never reuse post-video prompts."""
from pathlib import Path
import json, random
root=Path(__file__).resolve().parents[1]
concepts={}
for line in (root/'authoring/curriculum.txt').read_text().splitlines():
    if not line.strip(): continue
    if line.startswith('#'):
        if '|' in line: current=line[1:].split('|')[0];concepts[current]=[]
    elif '|' in line:
        label,definition,*_=line.split('|');concepts[current].append((label,definition))
prompts={}
for line in (root/'authoring/prechecks.txt').read_text().splitlines():
    if not line.strip():continue
    if line.startswith('#'):
        if line[1:2].isdigit():current=line[1:];prompts[current]=[]
    else:prompts[current].append(line)
lessons={}
for line in (root/'authoring/introductions.txt').read_text().splitlines():
    if not line.strip() or line.startswith('#'):continue
    id,bridge,teach,example,watch=line.split('|')
    lessons[id]={'bridge':bridge,'teach':teach,'example':example,'watch':watch.split(' • '),'questions':[]}
    assert len(prompts[id])==len(concepts[id])==10,id
    for i,prompt in enumerate(prompts[id]):
        rng=random.Random(id+'-'+str(i));target=concepts[id][i]
        # Control categories and functions stay on the same axis; other distractors are same-objective.
        pool=concepts[id][:4] if id=='1.1' and i<4 else concepts[id][4:] if id=='1.1' else concepts[id]
        alternatives=[x for x in pool if x!=target]
        options=[target]+rng.sample(alternatives,3);rng.shuffle(options)
        lessons[id]['questions'].append({'id':'PRE-'+id+'-'+str(i+1),'phase':'pre','objective':id,'concept':target[0], 'prompt':prompt,'options':[o[0] for o in options], 'correct':options.index(target),'explanations':[f'{label}: {definition} '+('This is the role or property required by the scenario.' if label==target[0] else f'The scenario instead calls for {target[0]}: {target[1]}') for label,definition in options]})
assert len(lessons)==28
all_prompts=[q['prompt'] for o in lessons.values() for q in o['questions']]
assert len(set(all_prompts))==280
(root/'js/prelearning.js').write_text('window.PRELEARNING = '+json.dumps(lessons,ensure_ascii=False,indent=2)+';\n')
print('Generated 28 introductory lessons and 280 independent foundation questions.')
