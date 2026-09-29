"""Build revised practice variants from the authored objective scenarios.

Domain 1/2 Set A retains its original IDs and exact question data so prior
completion history continues to refer to the same items.
"""
import json
import random
import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
objectives = []
for line in (root / 'authoring/curriculum.txt').read_text().splitlines():
    if not line:
        continue
    if line.startswith('#'):
        oid, title, tip, flow = line[1:].split('|')
        obj = dict(id=oid, title=title, tip=tip, flow=flow.split(' → '), concepts=[])
        objectives.append(obj)
    else:
        label, definition, cases = line.split('|')
        obj['concepts'].append(dict(label=label, definition=definition, cases=cases.split('~')))

original = json.loads((root / 'js/curriculum.js').read_text().removeprefix('window.CURRICULUM=').removesuffix(';'))
by_id = {q['id']: q for q in original['questions']}

def related(a, b):
    def words(s):
        return set(re.findall(r'[a-z]{4,}', s.lower())) - {'with', 'that', 'from', 'where', 'which', 'their', 'when', 'into', 'using'}
    return len(words(a['definition']) & words(b['definition']))

questions = []
for obj in objectives:
    oid = obj['id']
    concepts = obj['concepts']
    assert len(concepts) == 10
    for n, concept in enumerate(concepts):
        assert len(concept['cases']) == 3
        for set_number in (1, 2, 3):
            if oid.startswith(('1.', '2.')) and set_number == 1:
                questions.append(by_id[f'{oid}-1-{n+1}'])
                continue
            rng = random.Random(f'security-plus-v9:{oid}:{set_number}:{n}')
            peers = [c for i, c in enumerate(concepts) if i != n]
            if oid == '1.1':
                peers = [c for i, c in enumerate(concepts) if i != n and (i < 4) == (n < 4)]
            if oid == '2.1' and 6 <= n <= 8:
                peers = [c for i, c in enumerate(concepts) if i != n and 6 <= i <= 8]
            if len(peers) < 3:
                peers = [c for i, c in enumerate(concepts) if i != n]
            peers.sort(key=lambda c: (related(concept, c), rng.random()), reverse=True)
            options = [concept] + peers[:3]
            rng.shuffle(options)
            evidence = concept['cases'][(set_number + n) % 3].rstrip('.')
            prompt = f'{evidence}. Which approach BEST matches the specific requirement in this scenario?'
            explanations = []
            for option in options:
                if option is concept:
                    explanations.append(f'Best answer. {concept["definition"]} This is the decisive property in the scenario.')
                else:
                    explanations.append(f'{option["label"]} instead means {option["definition"]} '
                                        f'The scenario requires {concept["label"]}: {concept["definition"]}')
            questions.append(dict(id=f'{oid}-r9-{set_number}-{n+1}', objective=oid,
                                  set=set_number, concept=concept['label'], prompt=prompt,
                                  options=[c['label'] for c in options], correct=options.index(concept),
                                  explanations=explanations))

assert len(questions) == 840
assert len({q['id'] for q in questions}) == 840
assert sum('-r9-' in q['id'] for q in questions) == 750
data = dict(objectives=objectives, questions=questions)
(root / 'js/curriculum.js').write_text('window.CURRICULUM=' + json.dumps(data, ensure_ascii=False, separators=(',', ':')) + ';')
print('840 questions: 750 revised, 90 original Domain 1/2 Set A')
