"""Compile two hand-authored, disjoint SY0-701 challenge forms. No private data."""
import json, random, re
from pathlib import Path
from collections import Counter
ROOT=Path(__file__).resolve().parents[2]
HERE=Path(__file__).resolve().parent
weights={'1':12,'2':22,'3':18,'4':28,'5':20}
exams=[]
for n in (1,2):
    refine={}
    for line in (HERE/f'refine{n}.txt').read_text().splitlines():
        if not line or line.startswith('#'): continue
        parts=line.split('|')
        assert len(parts)==4,parts
        assert parts[0] not in refine
        refine[parts[0]]=parts[1:]
    rows=[]
    concepts=set()
    for line in (HERE/f'exam{n}.txt').read_text().splitlines():
        if not line or line.startswith('#'):continue
        fields=line.split('|')
        assert len(fields)==7, fields
        obj,concept,prompt,*choices=fields
        concepts.add(concept)
        if concept in refine: choices=[choices[0],*refine[concept]]
        parsed=[c.split('~') for c in choices]
        assert all(len(c)==2 for c in parsed)
        assert len(set(c[0] for c in parsed))==4
        # Stable, balanced stored keys; display ordering is independently shuffled per attempt.
        target=(len(rows)+n)%4
        order=list(range(4));order[0],order[target]=order[target],order[0]
        rows.append(dict(id=f'CH{n}-{len(rows)+1:03}',objective=obj,concept=concept,
                         prompt=prompt,options=[parsed[i][0] for i in order],
                         explanations=[parsed[i][1] for i in order],correct=target,
                         examId=f'challenge-{n}',revision='challenge-v13',type='mcq',provenance='Original practice'))
    assert not set(refine)-concepts,set(refine)-concepts
    assert len(rows)==100
    assert Counter(q['objective'][0] for q in rows)==weights
    assert Counter(q['correct'] for q in rows)=={0:25,1:25,2:25,3:25}
    assert len(set(q['objective'] for q in rows))==28
    exams.append(dict(id=f'challenge-{n}',name=f'Challenge Exam {n}',questions=rows))
allq=[q for e in exams for q in e['questions']]
assert len(set(q['prompt'] for q in allq))==200
out='/* Original challenge questions. Regenerate with authoring/challenge/build.py. */\nwindow.CHALLENGE_EXAMS='+json.dumps(exams,ensure_ascii=False,separators=(',',':'))+';\n'
(ROOT/'js/challenge-data.js').write_text(out)
print('Built 2 exams, 200 questions; exact blueprint; 28 objectives/form; balanced keys.')
