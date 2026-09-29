import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
lessons = {}
for line in (root / 'authoring/deep-lessons.txt').read_text().splitlines():
    if not line or line.startswith('#'):
        continue
    objective, bridge, example, distinction = line.split('|')
    lessons[objective] = dict(bridge=bridge, example=example, distinction=distinction)
assert len(lessons) == 28
(root / 'js/deep-lessons.js').write_text('window.DEEP_LESSONS=' + json.dumps(lessons, ensure_ascii=False, separators=(',', ':')) + ';')
print('Deep lessons:', len(lessons))
