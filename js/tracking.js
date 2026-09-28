/* Pure, testable progress calculations. Scores are learning signals, not exam predictions. */
window.SCHOOL = (() => {
  const seconds = duration => String(duration || '0:00').split(':').reduce((n,v)=>n*60+Number(v),0);
  const time = n => { n=Math.max(0,Math.round(n)); const h=Math.floor(n/3600),m=Math.floor(n%3600/60),s=n%60;return [h?h+'h':'',m?m+'m':'',s?s+'s':''].filter(Boolean).join(' ')||'0m'; };
  function migrate(s, videos) {
    s.objectives??={};s.history??=[];s.labs??={};s.videos??={};s.intros??={};
    if(s._questionArchive){for(const h of s.history)for(const r of h.results||[])if(typeof r.question==='string'&&s._questionArchive[r.question])r.question=s._questionArchive[r.question];delete s._questionArchive;}
    if(!s.schoolSchema){
      for(const [id,o] of Object.entries(s.objectives))if(o.status==='complete'){
        o.learningComplete=true;
        for(const v of videos[id]||[])if(s.videos[v.url]===undefined)s.videos[v.url]=true;
      }
      s.schoolSchema=1;
    }
    return s;
  }
  const pre = h => h.phase==='pre'||/^Pre-video /.test(h.label||'')||h.results?.some(r=>r.question?.phase==='pre');
  function videoTime(s,vs){const total=vs.reduce((a,v)=>a+seconds(v.duration),0),watched=vs.filter(v=>s.videos?.[v.url]===true).reduce((a,v)=>a+seconds(v.duration),0);return {total,watched,left:total-watched,count:vs.length,watchedCount:vs.filter(v=>s.videos?.[v.url]===true).length};}
  function objective(s,id,videos){
    const history=[...s.history].sort((a,b)=>b.at-a.at),o=s.objectives[id]||{};
    const baseline=history.filter(h=>pre(h)&&h.results?.some(r=>r.objective===id)).at(-1);
    const sets=history.filter(h=>!pre(h)&&new RegExp('^'+id.replace('.','\\.')+' · Set [ABC]$').test(h.label||''));
    const latest=sets[0]||null,bySet=Object.fromEntries(['A','B','C'].map(k=>[k,sets.find(h=>h.label.endsWith('Set '+k))||null]));
    const strongSets=Object.values(bySet).filter(h=>h&&h.percent>=85).length;
    const complete=o.learningComplete===true||o.status==='complete';
    let level='Not assessed',priority=4,action=complete?'Take Set A':'Read introduction → pre-check → videos';
    if(latest){
      if(latest.percent<70){level='Focused lesson needed';priority=0;action='Review missed concepts, then take the next unused set';}
      else if(latest.percent<85){level='Reinforce';priority=1;action='Review the distinctions you missed, then check again';}
      else if(complete&&strongSets>=2){level='Retain & revisit';priority=3;action='Continue; revisit later with mixed practice';}
      else {level='Strong first evidence';priority=2;action='Confirm retention with another distinct set after a break';}
    }
    if(o.status==='review'){level='Review requested';priority=0;action='Revisit notes and missed concepts before another set';}
    const seen=new Set(),misses=[];let attempted=0,credit=0;
    for(const h of history){if(pre(h))continue;for(const r of h.results||[]){if(r.objective!==id||r.lab||!r.question)continue;attempted++;credit+=r.credit;const key=r.question.concept||r.id;if(seen.has(key))continue;seen.add(key);if(r.credit<1)misses.push({concept:r.question.concept||r.question.prompt,question:r.question,answer:r.answer,at:h.at,attempt:h.id});}}
    const delta=baseline&&latest?latest.percent-baseline.percent:null;
    const trend=sets.length>=2?sets[0].percent-sets[1].percent:null;
    return {id,complete,baseline,latest,bySet,strongSets,level,priority,action,misses,delta,trend,attempted,average:attempted?Math.round(credit/attempted*100):null,...videoTime(s,videos[id]||[])};
  }
  function overview(s,c,videos){const objectives=c.objectives.map(o=>({...o,...objective(s,o.id,videos)}));const domains=[1,2,3,4,5].map(id=>{const rows=objectives.filter(o=>o.id.startsWith(id+'.'));return {id,rows,total:rows.reduce((a,x)=>a+x.total,0),watched:rows.reduce((a,x)=>a+x.watched,0),left:rows.reduce((a,x)=>a+x.left,0),completed:rows.filter(x=>x.complete).length,count:rows.length,review:rows.filter(x=>x.priority<=1).length};});return {objectives,domains,total:domains.reduce((a,x)=>a+x.total,0),watched:domains.reduce((a,x)=>a+x.watched,0),left:domains.reduce((a,x)=>a+x.left,0),completed:objectives.filter(o=>o.complete).length,domainsDone:domains.filter(d=>d.completed===d.count).length,review:objectives.filter(o=>o.priority<=1),queue:objectives.filter(o=>o.latest&&(o.misses.length||o.priority<=1)||s.objectives[o.id]?.status==='review').sort((a,b)=>a.priority-b.priority||a.id.localeCompare(b.id))};}
  function merge(local,incoming,videos){
    // Existing device values win; missing history and fields from the backup are added.
    incoming=migrate(JSON.parse(JSON.stringify(incoming)),videos);
    const out=JSON.parse(JSON.stringify(local));
    for(const k of ['objectives','videos','labs','intros','guided']){out[k]??={};for(const [id,v] of Object.entries(incoming[k]||{})){if(out[k][id]===undefined)out[k][id]=v;else if(k==='objectives')out[k][id]={...v,...out[k][id]};}}
    const ids=new Set(out.history.map(h=>String(h.id)));for(const h of incoming.history||[])if(!ids.has(String(h.id))){out.history.push(h);ids.add(String(h.id));}out.history.sort((a,b)=>b.at-a.at);
    if(!out.active&&incoming.active)out.active=incoming.active;
    return migrate(out,videos);
  }
  function serialize(s){
    // Preserve all attempts without repeatedly storing full copies of the same question.
    // Archive the actual wording/options so later content edits cannot rewrite old evidence.
    const archive={},lookup=new Map();
    const history=s.history.map(h=>({...h,results:(h.results||[]).map(r=>{
      if(!r.question)return r;
      const {order,...question}=r.question,key=JSON.stringify(question);
      if(!lookup.has(key)){const ref='q'+lookup.size;lookup.set(key,ref);archive[ref]=question;}
      return {...r,question:lookup.get(key)};
    })}));
    return JSON.stringify({...s,history,_questionArchive:archive});
  }
  return {seconds,time,migrate,pre,videoTime,objective,overview,merge,serialize};
})();
