"""Index supplied v1.8 PDF without rewriting any question or rendering."""
import fitz, json, re, hashlib
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
path=ROOT/'assets/messer-sy0-701-v18.pdf'
pdf=fitz.open(path)
exams={}
for letter,first,last,quick,answers,end in [('A',9,40,41,43,139),('B',139,168,169,171,265),('C',265,296,297,299,393)]:
    key={int(n):re.findall(r'\b[A-H]\b',value) for n,value in re.findall(rf'{letter}(\d+)\.\s*([^\n]+)',pdf[quick].get_text())}
    assert set(key)==set(range(6,91)),letter
    details={}
    for pi in range(answers,end):
        text=pdf[pi].get_text()
        matches=re.findall(rf'^{letter}(\d+)\.\s',text,re.M)
        if matches:
            n=int(matches[0]);details[n]={'page':pi+1,'objectives':re.findall(r'SY0-701, (?:Objective|Section) (\d\.\d)',text),'text':text}
    assert set(details)==set(range(1,91)),(letter,len(details))
    questions=[]
    for pi in range(first,last):
        page=pdf[pi]
        anchors=sorted([w for w in page.get_text('words') if re.fullmatch(rf'{letter}\d+\.',w[4])],key=lambda w:w[1])
        for ix,w in enumerate(anchors):
            n=int(w[4][1:-1]);bottom=anchors[ix+1][1]-6 if ix+1<len(anchors) else 610
            clip=[24,round(w[1]-4,3),410,round(bottom,3)]
            text=page.get_text(clip=fitz.Rect(clip))
            options=re.findall(r'❍\s*([A-H])\.\s*([^❍]+)',text)
            # Pull clean option wording from the matching detailed-answer page.
            detail=details[n]['text']
            part=detail.split('The Answer')[0]
            opts=re.findall(r'❍\s*([A-H])\.\s*([^❍]+)',part)
            choice=[{'letter':a,'text':' '.join(b.split())} for a,b in opts] if n>5 else []
            if n>5:
                assert len(choice)>=4,(letter,n,choice)
                assert set(key[n])<=set(c['letter'] for c in choice)
                answer_section=detail.split('The Answer',1)[1].split('The incorrect answers:',1)[0]
                assert all(re.search(rf'\b{v}\.',answer_section) for v in key[n]),(letter,n,key[n])
            nextpage=details[n+1]['page'] if n<90 else min(end+1,details[n]['page']+2)
            q={'id':f'{letter}{n}','number':n,'page':pi+1,'clip':clip,'text':text,'choices':choice,'correct':key.get(n,[]),'answerPages':list(range(details[n]['page'],nextpage)),'objectives':details[n]['objectives']}
            questions.append(q)
    questions.sort(key=lambda q:q['number'])
    assert [q['number'] for q in questions]==list(range(1,91))
    exams[letter]=questions
payload={'version':'1.8','sha256':hashlib.sha256(path.read_bytes()).hexdigest(),'exams':exams}
(ROOT/'js/messer-data.js').write_text('window.MESSER_EXAMS='+json.dumps(payload,ensure_ascii=False,separators=(',',':'))+';')
print('Indexed 270 source questions, 255 multiple-choice keys, 15 original PBQs')
