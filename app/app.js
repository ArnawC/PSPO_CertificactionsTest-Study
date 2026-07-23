const STORAGE_KEY = "pspo_i_trainer_history_v1";
const EXAM_TOTAL_Q = 80;
const EXAM_TOTAL_SEC = 60 * 60;

function loadHistory(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveSession(entry){
  const h = loadHistory();
  h.push(entry);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(h));
}
function clearHistory(){
  localStorage.removeItem(STORAGE_KEY);
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function countsByType(pool){
  const c = {single:0, multi:0, tf:0};
  pool.forEach(q=>{ c[q.type] = (c[q.type]||0) + 1; });
  return c;
}

function prepareQuestion(q){
  const order = shuffle(q.opts.map((_,i)=>i));
  const opts = order.map(i=>q.opts[i]);
  const exp = order.map(i=>q.exp[i]);
  const correctArr = Array.isArray(q.correct) ? q.correct : [q.correct];
  const newCorrect = [];
  order.forEach((origIdx, newIdx)=>{ if(correctArr.includes(origIdx)) newCorrect.push(newIdx); });
  return { type:q.type, q:q.q, opts, exp, trap:q.trap, topicId:q.topicId, topicName:q.topicName, correct:newCorrect };
}

function buildQuestionSet(pool, counts){
  let picked = [];
  ["single","multi","tf"].forEach(t=>{
    const ofType = pool.filter(q=>q.type===t);
    const n = Math.min(counts[t]||0, ofType.length);
    picked = picked.concat(shuffle(ofType).slice(0,n));
  });
  picked = shuffle(picked);
  return picked.map(prepareQuestion);
}

// ---------------- STATE ----------------
let state = { view:"dashboard" };
let quiz = null; // active quiz runtime object

const root = document.getElementById("root");

function setView(view, params={}){
  state = { view, ...params };
  render();
}

function render(){
  root.innerHTML = `
    <div class="sidebar">
      <div class="brand">
        <img src="logo.svg" alt="logo"/>
        <div class="name"><b>PSPO I</b>Entrenador d'examen</div>
      </div>
      ${navItem("dashboard","Inici")}
      ${navItem("theory-list","Temari per temes")}
      ${navItem("test-topic-config","Test per tema")}
      <div class="nav-sep"></div>
      ${navItem("test-general-config","Test general")}
      ${navItem("test-final-config","Test final (examen)")}
      <div class="nav-sep"></div>
      ${navItem("stats","Historial i estadístiques")}
    </div>
    <div class="main" id="main"></div>
  `;
  document.getElementById("main").innerHTML = renderMain();
  attachHandlers();
}

const NAV_ICONS = {
  "dashboard": '<path d="M2.5 8.5 8 3l5.5 5.5"/><path d="M3.8 7.2V13h8.4V7.2"/>',
  "theory-list": '<path d="M2.5 3.2h4a2 2 0 0 1 2 2v8.6a1.6 1.6 0 0 0-1.6-1.6h-4.4Z"/><path d="M13.5 3.2h-4a2 2 0 0 0-2 2v8.6a1.6 1.6 0 0 1 1.6-1.6h4.4Z"/>',
  "test-topic-config": '<circle cx="8" cy="8" r="5.2"/><circle cx="8" cy="8" r="2.1"/>',
  "test-general-config": '<path d="M2.5 5h3.4l2 2.2"/><path d="M2.5 11h3.4l6.6-7.4h1"/><path d="M9.9 9.8l2.6 3.2h1"/><path d="M11.5 2.7 13.5 3.6l-2 1"/><path d="M11.5 13.3 13.5 12.4l-2-1"/>',
  "test-final-config": '<path d="M3.5 2.5v11"/><path d="M3.5 3.2h8l-1.6 2.4 1.6 2.4h-8Z"/>',
  "stats": '<path d="M3 13V6.5"/><path d="M7.5 13V3"/><path d="M12 13V9"/><path d="M2 13.5h12"/>'
};

function navItem(view, label){
  const active = state.view===view || (state.view==="theory-detail" && view==="theory-list") ? "active" : "";
  const icon = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${NAV_ICONS[view]||""}</svg>`;
  return `<div class="nav-item ${active}" data-nav="${view}">${icon}<span>${label}</span></div>`;
}

function renderMain(){
  switch(state.view){
    case "dashboard": return renderDashboard();
    case "theory-list": return renderTheoryList();
    case "theory-detail": return renderTheoryDetail(state.topicId);
    case "test-topic-config": return renderTopicConfig();
    case "test-general-config": return renderGeneralConfig();
    case "test-final-config": return renderFinalConfig();
    case "quiz": return renderQuiz();
    case "score": return renderScore();
    case "stats": return renderStats();
    default: return "";
  }
}

// ---------------- DASHBOARD ----------------
function renderDashboard(){
  const hist = loadHistory();
  const totalTests = hist.length;
  const avgPct = totalTests ? Math.round(hist.reduce((s,h)=>s+h.pct,0)/totalTests) : null;
  const byTopic = aggregateByTopic(hist);
  let weakest = null;
  Object.entries(byTopic).forEach(([id,d])=>{
    const pct = d.total ? d.ok/d.total : 1;
    if(d.total>=3 && (weakest===null || pct < weakest.pct)) weakest = {id, name:d.name, pct};
  });

  return `
    <h1>Benvingut/a de nou</h1>
    <p class="subtitle">Preparació per al PSPO I — Scrum Guide 2020</p>
    <div class="grid">
      <div class="stat-card"><div class="lbl">Tests realitzats</div><div class="val">${totalTests}</div></div>
      <div class="stat-card"><div class="lbl">Mitjana global</div><div class="val">${avgPct===null?"—":avgPct+"%"}</div></div>
      <div class="stat-card"><div class="lbl">Banc de preguntes</div><div class="val">${ALL_QUESTIONS.length}</div></div>
      <div class="stat-card"><div class="lbl">Tema més fluix</div><div class="val" style="font-size:16px; color:${weakest?'var(--red-line)':'var(--text-mute)'}">${weakest ? weakest.name : "encara no prou dades"}</div></div>
    </div>
    <div style="display:flex; gap:12px; margin-bottom:30px;">
      <button class="btn amber" data-nav="test-general-config">Fer un test general ↗</button>
      <button class="btn secondary" data-nav="test-final-config">Simular examen complet ↗</button>
    </div>
    <h1 style="font-size:18px;">Progrés per tema</h1>
    <div class="card-list">
      ${TOPICS.map(t=>{
        const d = byTopic[t.id] || {ok:0, total:0};
        const pct = d.total ? Math.round(100*d.ok/d.total) : 0;
        return `<div class="topic-card" data-nav="theory-detail" data-topic="${t.id}">
          <h3>${t.name}</h3>
          <div class="meta">${t.questions.length} preguntes al banc · ${d.total ? pct+"% encert" : "sense intents"}</div>
          <div class="bar-bg"><div class="bar-fill" style="width:${pct}%; background:${pctColor(pct)}"></div></div>
        </div>`;
      }).join("")}
    </div>
  `;
}

function aggregateByTopic(hist){
  const agg = {};
  TOPICS.forEach(t=> agg[t.id] = {ok:0, total:0, name:t.name});
  hist.forEach(h=>{
    Object.entries(h.byTopic||{}).forEach(([id,d])=>{
      if(!agg[id]) agg[id] = {ok:0,total:0,name:d.name||id};
      agg[id].ok += d.ok; agg[id].total += d.total;
    });
  });
  return agg;
}

// ---------------- THEORY ----------------
function renderTheoryList(){
  return `
    <h1>Temari</h1>
    <p class="subtitle">Repassa cada bloc abans de fer el test corresponent</p>
    <div class="card-list">
      ${TOPICS.map(t=>`<div class="topic-card" data-nav="theory-detail" data-topic="${t.id}">
        <h3>${t.name}</h3>
        <div class="meta">${t.questions.length} preguntes de pràctica</div>
      </div>`).join("")}
    </div>
  `;
}

function renderTheoryDetail(topicId){
  const t = TOPICS.find(x=>x.id===topicId) || TOPICS[0];
  return `
    <button class="btn secondary small" data-nav="theory-list" style="margin-bottom:16px;">← Tots els temes</button>
    <h1>${t.name}</h1>
    <div class="theory-box">${t.theory}</div>
    <div style="margin-top:20px;">
      <button class="btn amber" data-action="start-topic-test" data-topic="${t.id}">Fer test d'aquest tema ↗</button>
    </div>
  `;
}

// ---------------- TEST PER TEMA — CONFIG ----------------
function renderTopicConfig(){
  const topicId = state.topicId || TOPICS[0].id;
  const topic = TOPICS.find(t=>t.id===topicId);
  const counts = countsByType(topic.questions);
  return `
    <h1>Test per tema</h1>
    <p class="subtitle">Tria el tema i quantes preguntes de cada tipus vols practicar</p>
    <div class="config-row">
      <label>Tema</label>
      <select id="cfg-topic">
        ${TOPICS.map(t=>`<option value="${t.id}" ${t.id===topicId?"selected":""}>${t.name}</option>`).join("")}
      </select>
    </div>
    <div class="config-box">
      ${typeRow("single","Opció única", counts.single)}
      ${typeRow("multi","Resposta múltiple", counts.multi)}
      ${typeRow("tf","Vertader / Fals", counts.tf)}
      <div class="config-row">
        <label>Ordre aleatori i preguntes diferents cada vegada</label>
        <span class="max">sempre actiu</span>
      </div>
      <div class="config-row">
        <label>Temporitzador (relatiu a 60 min / 80 preguntes)</label>
        <input type="checkbox" id="cfg-timer"/>
      </div>
      <button class="btn amber" id="btn-start-topic" style="width:100%; margin-top:8px;">Començar test ↗</button>
    </div>
  `;
}

function typeRow(key, label, max){
  const def = Math.min(max, key==="tf"?6:8);
  return `<div class="config-row">
    <label>${label}</label>
    <span class="max">màx. ${max}</span>
    <input type="number" min="0" max="${max}" value="${def}" data-count="${key}" id="cnt-${key}"/>
  </div>`;
}

// ---------------- TEST GENERAL — CONFIG ----------------
function renderGeneralConfig(){
  const counts = countsByType(ALL_QUESTIONS);
  return `
    <h1>Test general</h1>
    <p class="subtitle">Preguntes de tots els temes barrejades. Tria quantes vols de cada tipus (fins al màxim disponible: ${ALL_QUESTIONS.length}).</p>
    <div class="config-box">
      ${typeRow("single","Opció única", counts.single)}
      ${typeRow("multi","Resposta múltiple", counts.multi)}
      ${typeRow("tf","Vertader / Fals", counts.tf)}
      <div class="config-row">
        <label>Temporitzador (relatiu a 60 min / 80 preguntes)</label>
        <input type="checkbox" id="cfg-timer"/>
      </div>
      <button class="btn amber" id="btn-start-general" style="width:100%; margin-top:8px;">Començar test ↗</button>
    </div>
  `;
}

// ---------------- TEST FINAL — CONFIG ----------------
function renderFinalConfig(){
  const n = Math.min(EXAM_TOTAL_Q, ALL_QUESTIONS.length);
  const secs = Math.round(EXAM_TOTAL_SEC * n / EXAM_TOTAL_Q);
  const mins = Math.round(secs/60);
  return `
    <h1>Test final — simulació d'examen</h1>
    <p class="subtitle">Barreja tots els temes i tots els tipus de pregunta, amb temporitzador fix, tal com l'examen real (${EXAM_TOTAL_Q} preguntes / 60 min).</p>
    <div class="config-box">
      <div class="config-row"><label>Preguntes d'aquest test</label><span class="max">${n} de ${ALL_QUESTIONS.length} disponibles</span></div>
      <div class="config-row"><label>Temps disponible</label><span class="max">${mins} min (proporcional si hi ha menys de ${EXAM_TOTAL_Q})</span></div>
      <div class="config-row"><label>Ordre</label><span class="max">totalment aleatori, diferent cada vegada</span></div>
      <button class="btn amber" id="btn-start-final" style="width:100%; margin-top:8px;">Començar examen ↗</button>
    </div>
  `;
}

// ---------------- QUIZ ENGINE ----------------
function startQuiz(questions, meta, timerSec){
  quiz = {
    questions, idx:0, selected:[], locked:false, results:[],
    meta, // {mode, topicId, topicName}
    timerSec: timerSec || null,
    timeLeft: timerSec || null,
    startedAt: Date.now(),
    timerHandle: null
  };
  setView("quiz");
  if(quiz.timerSec){
    quiz.timerHandle = setInterval(()=>{
      quiz.timeLeft--;
      if(quiz.timeLeft<=0){
        clearInterval(quiz.timerHandle);
        finishQuiz(true);
      } else {
        updateTimerDisplay();
      }
    },1000);
  }
}

function updateTimerDisplay(){
  const el = document.getElementById("quiz-timer");
  if(!el) return;
  const m = Math.floor(quiz.timeLeft/60), s = quiz.timeLeft%60;
  el.textContent = `${m}:${s.toString().padStart(2,"0")}`;
  el.classList.toggle("low", quiz.timeLeft < 60);
}

function renderQuiz(){
  if(!quiz) return "";
  const q = quiz.questions[quiz.idx];
  let dots = quiz.questions.map((_,i)=>{
    let cls="dot";
    if(quiz.results[i]===true) cls+=" done";
    else if(quiz.results[i]===false) cls+=" wrong";
    return `<div class="${cls}"></div>`;
  }).join("");

  let optsHtml = q.opts.map((o,i)=>{
    let cls="opt";
    if(quiz.locked){
      cls+=" locked";
      const isCorrect = q.correct.includes(i);
      const wasSelected = quiz.selected.includes(i);
      if(isCorrect) cls+=" correct";
      else if(wasSelected) cls+=" incorrect";
    } else if(quiz.selected.includes(i)){
      cls+=" selected";
    }
    return `<button class="${cls}" data-pick="${i}" ${quiz.locked?"disabled":""}><b>${String.fromCharCode(65+i)}</b>${o}</button>`;
  }).join("");

  let hint = q.type==="multi" ? '<div class="hint">Selecciona totes les que corresponguin</div>' : "";
  let feedbackHtml = "";
  if(quiz.locked){
    const isRight = quiz.results[quiz.idx];
    feedbackHtml = `<div class="feedback ${isRight?'ok':'bad'}">
      <strong>${isRight?"Correcte.":"Incorrecte."}</strong>
      <ul class="explist">${q.exp.map((e,i)=>`<li><b>${String.fromCharCode(65+i)}.</b> ${e}</li>`).join("")}</ul>
      <span class="trap">Nota d'examen: ${q.trap}</span>
    </div>`;
  }

  const timerHtml = quiz.timerSec ? `<span class="timer" id="quiz-timer">${Math.floor(quiz.timeLeft/60)}:${(quiz.timeLeft%60).toString().padStart(2,"0")}</span>` : "";
  const isLast = quiz.idx === quiz.questions.length-1;

  return `
    <div class="track">${dots}</div>
    <div class="topbar-quiz">
      <span>Pregunta ${quiz.idx+1} / ${quiz.questions.length} — ${quiz.meta.label}</span>
      ${timerHtml}
    </div>
    <div class="card">
      <span class="block-tag">${q.type==="multi"?"Resposta múltiple":q.type==="tf"?"Vertader / Fals":"Opció única"} · ${q.topicName}</span>
      <p class="qtext">${q.q}</p>
      ${hint}
      ${optsHtml}
      ${feedbackHtml}
      <div class="actions">
        <button class="btn secondary" data-action="quit-quiz">Abandonar</button>
        <button class="btn" id="btn-quiz-next" ${(!quiz.locked && quiz.selected.length===0)?"disabled":""}>${quiz.locked ? (isLast?"Veure resultat":"Següent") : "Comprovar"}</button>
      </div>
    </div>
  `;
}

function pickOption(i){
  if(quiz.locked) return;
  const q = quiz.questions[quiz.idx];
  if(q.type==="multi"){
    const pos = quiz.selected.indexOf(i);
    if(pos>=0) quiz.selected.splice(pos,1); else quiz.selected.push(i);
  } else {
    quiz.selected = [i];
  }
  render();
}

function checkAnswer(){
  const q = quiz.questions[quiz.idx];
  const isRight = quiz.selected.length===q.correct.length && quiz.selected.every(s=>q.correct.includes(s));
  quiz.results[quiz.idx] = isRight;
  quiz.locked = true;
  render();
}

function nextQuestion(){
  if(quiz.idx === quiz.questions.length-1){
    finishQuiz(false);
    return;
  }
  quiz.idx++;
  quiz.selected=[];
  quiz.locked=false;
  render();
}

function finishQuiz(timedOut){
  if(quiz.timerHandle) clearInterval(quiz.timerHandle);
  const total = quiz.questions.length;
  const correctCount = quiz.results.filter(r=>r===true).length;
  const pct = total ? Math.round((correctCount/total)*100) : 0;
  const byTopic = {};
  const byType = {single:{ok:0,total:0}, multi:{ok:0,total:0}, tf:{ok:0,total:0}};
  quiz.questions.forEach((q,i)=>{
    if(!byTopic[q.topicId]) byTopic[q.topicId] = {ok:0,total:0,name:q.topicName};
    byTopic[q.topicId].total++;
    if(quiz.results[i]) byTopic[q.topicId].ok++;
    byType[q.type].total++;
    if(quiz.results[i]) byType[q.type].ok++;
  });
  const durationSec = Math.round((Date.now()-quiz.startedAt)/1000);
  const entry = { ts:Date.now(), mode:quiz.meta.mode, label:quiz.meta.label, total, correct:correctCount, pct, byTopic, byType, durationSec, timedOut };
  saveSession(entry);
  quiz.finishedEntry = entry;
  setView("score");
}

function renderScore(){
  const e = quiz.finishedEntry;
  if(!e) return "";
  const rows = Object.entries(e.byTopic).map(([id,d])=>{
    const weak = d.ok < d.total;
    return `<div class="brow"><span${weak?' class="bad-block"':''}>${d.name}</span><span${weak?' class="bad-block"':''}>${d.ok}/${d.total}</span></div>`;
  }).join("");
  const weakNames = Object.values(e.byTopic).filter(d=>d.ok<d.total).map(d=>d.name);
  const mins = Math.floor(e.durationSec/60), secs = e.durationSec%60;

  return `
    <div class="score-screen">
      <div class="score-lbl">${e.timedOut ? "Temps esgotat — " : ""}Resultat: ${e.label}</div>
      <div class="score-num">${e.pct}%</div>
      <div class="score-lbl">${e.correct} de ${e.total} correctes · ${mins} min ${secs}s</div>
      <div class="breakdown">
        <div class="brow"><b>Tema</b><b>Encerts</b></div>
        ${rows}
      </div>
      ${weakNames.length ? `<p class="muted">Temes a repassar: ${weakNames.join(", ")}. Queden anotats a l'historial.</p>` : `<p class="muted">100% en tots els temes d'aquest test.</p>`}
      <div style="display:flex; gap:10px; justify-content:center; margin-top:18px;">
        <button class="btn secondary" data-nav="dashboard">Tornar a l'inici</button>
        <button class="btn amber" data-action="repeat-same-config">Repetir amb la mateixa configuració ↗</button>
      </div>
    </div>
  `;
}

// ---------------- STATS ----------------
const MODE_LABELS = {topic:"Test per tema", general:"Test general", final:"Test final"};
const TYPE_LABELS = {single:"Opció única", multi:"Resposta múltiple", tf:"Vertader / Fals"};

function filterHistory(hist, filter){
  if(!filter || filter==="all") return hist;
  return hist.filter(h=>h.mode===filter);
}

function aggregateByType(hist){
  const agg = {single:{ok:0,total:0}, multi:{ok:0,total:0}, tf:{ok:0,total:0}};
  hist.forEach(h=>{
    Object.entries(h.byType||{}).forEach(([t,d])=>{
      if(!agg[t]) agg[t] = {ok:0,total:0};
      agg[t].ok += d.ok; agg[t].total += d.total;
    });
  });
  return agg;
}

function modeBreakdown(hist){
  const agg = {topic:{n:0,sum:0}, general:{n:0,sum:0}, final:{n:0,sum:0}};
  hist.forEach(h=>{
    if(!agg[h.mode]) agg[h.mode] = {n:0,sum:0};
    agg[h.mode].n++; agg[h.mode].sum += h.pct;
  });
  return agg;
}

function computeStreak(histDesc){
  let streak = 0;
  for(const h of histDesc){
    if(h.pct>=80) streak++; else break;
  }
  return streak;
}

function pctColor(pct){
  return pct>=80 ? "var(--green-line)" : pct>=60 ? "var(--amber)" : "var(--red-line)";
}

function buildSparkline(histAsc){
  const pts = histAsc.slice(-25);
  if(pts.length<2) return null;
  const w = Math.max(380, pts.length*28), h = 116, padX = 16, padY = 16;
  const innerH = h - padY*2;
  const stepX = pts.length>1 ? (w - padX*2)/(pts.length-1) : 0;
  const xy = pts.map((p,i)=>({ x: padX + i*stepX, y: padY + (1 - p.pct/100)*innerH, pct: p.pct }));
  const line = xy.map((p,i)=> (i===0?"M":"L") + p.x.toFixed(1) + "," + p.y.toFixed(1)).join(" ");
  const area = line + ` L${xy[xy.length-1].x.toFixed(1)},${(h-padY).toFixed(1)} L${xy[0].x.toFixed(1)},${(h-padY).toFixed(1)} Z`;
  const gridY = [60,80].map(v=> (padY + (1-v/100)*innerH).toFixed(1));
  const dots = xy.map(p=>`<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="3.2" style="fill:${pctColor(p.pct)}" stroke="var(--bg-panel-hi)" stroke-width="1.4"/>`).join("");
  return `<svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
    <line x1="${padX}" y1="${gridY[0]}" x2="${w-padX}" y2="${gridY[0]}" style="stroke:var(--border-soft)" stroke-dasharray="3,4"/>
    <line x1="${padX}" y1="${gridY[1]}" x2="${w-padX}" y2="${gridY[1]}" style="stroke:var(--border-soft)" stroke-dasharray="3,4"/>
    <path d="${area}" style="fill:var(--amber-glow)"/>
    <path d="${line}" style="fill:none; stroke:var(--amber); stroke-width:2px;"/>
    ${dots}
  </svg>`;
}

function renderStats(){
  const filter = state.statsFilter || "all";
  const allHist = loadHistory();
  const hist = filterHistory(allHist, filter).slice().sort((a,b)=>b.ts-a.ts);
  const histAsc = hist.slice().sort((a,b)=>a.ts-b.ts);

  const totalTests = hist.length;
  const avgPct = totalTests ? Math.round(hist.reduce((s,h)=>s+h.pct,0)/totalTests) : null;
  const totalQuestions = hist.reduce((s,h)=>s+h.total,0);
  const totalSec = hist.reduce((s,h)=>s+(h.durationSec||0),0);
  const totalHours = Math.floor(totalSec/3600), totalMins = Math.floor((totalSec%3600)/60);
  const streak = computeStreak(hist);

  const byTopic = aggregateByTopic(hist);
  const topicEntries = Object.entries(byTopic).filter(([id,d])=>d.total>0);
  let weakest=null, strongest=null;
  topicEntries.forEach(([id,d])=>{
    const pct = d.ok/d.total;
    if(d.total>=3){
      if(weakest===null || pct<weakest.pct) weakest={name:d.name,pct};
      if(strongest===null || pct>strongest.pct) strongest={name:d.name,pct};
    }
  });

  const byType = aggregateByType(hist);
  const modeAgg = modeBreakdown(hist);
  const sparkline = buildSparkline(histAsc);

  const topicRows = topicEntries
    .sort((a,b)=> (a[1].ok/a[1].total) - (b[1].ok/b[1].total))
    .map(([id,d])=>{
      const pct = Math.round(100*d.ok/d.total);
      return `<div class="topic-bar-row">
        <div class="thead"><span>${d.name}</span><span class="pct">${pct}% (${d.ok}/${d.total})</span></div>
        <div class="tbar-bg"><div class="tbar-fill" style="width:${pct}%; background:${pctColor(pct)};"></div></div>
      </div>`;
    }).join("");

  const typeRows = ["single","multi","tf"].map(t=>{
    const d = byType[t];
    const pct = d.total ? Math.round(100*d.ok/d.total) : 0;
    return `<div class="type-bar-row">
      <span class="tlabel">${TYPE_LABELS[t]}</span>
      <div class="tbar-bg"><div class="tbar-fill" style="width:${pct}%; background:${d.total?pctColor(pct):'transparent'};"></div></div>
      <span class="tval">${d.total ? pct+"% ("+d.ok+"/"+d.total+")" : "sense dades"}</span>
    </div>`;
  }).join("");

  const modeCards = ["topic","general","final"].map(m=>{
    const d = modeAgg[m] || {n:0,sum:0};
    const avg = d.n ? Math.round(d.sum/d.n) : null;
    return `<div class="mode-card">
      <div class="mlbl">${MODE_LABELS[m]}</div>
      <div class="mval">${avg===null?"—":avg+"%"}</div>
      <div class="msub">${d.n} test${d.n===1?"":"s"}</div>
    </div>`;
  }).join("");

  const histRows = hist.slice(0,40).map(h=>{
    const date = new Date(h.ts).toLocaleString();
    const cls = h.pct>=80?"ok":h.pct>=60?"mid":"bad";
    const mins = Math.floor(h.durationSec/60), secs = h.durationSec%60;
    return `<tr>
      <td>${date}</td><td>${h.label}</td><td>${h.correct}/${h.total}</td>
      <td><span class="pill ${cls}">${h.pct}%</span></td>
      <td>${mins}m ${secs}s${h.timedOut?" · temps esgotat":""}</td>
    </tr>`;
  }).join("");

  const tabs = ["all","topic","general","final"].map(f=>{
    const label = f==="all" ? "Tots" : MODE_LABELS[f];
    return `<div class="tab ${filter===f?'active':''}" data-stats-filter="${f}">${label}</div>`;
  }).join("");

  const body = totalTests ? `
    <div class="grid">
      <div class="stat-card"><div class="lbl">Tests</div><div class="val">${totalTests}</div></div>
      <div class="stat-card"><div class="lbl">Mitjana</div><div class="val">${avgPct}%</div></div>
      <div class="stat-card"><div class="lbl">Preguntes respostes</div><div class="val">${totalQuestions}</div></div>
      <div class="stat-card"><div class="lbl">Temps dedicat</div><div class="val small">${totalHours}h ${totalMins}m</div></div>
      <div class="stat-card"><div class="lbl">Ratxa actual (≥80%)</div><div class="val">${streak}</div><div class="sub">tests seguits</div></div>
      <div class="stat-card"><div class="lbl">Tema més fort</div><div class="val small" style="color:${strongest?'var(--green-line)':'var(--text-mute)'}">${strongest ? strongest.name : "encara no prou dades"}</div></div>
      <div class="stat-card"><div class="lbl">Tema a reforçar</div><div class="val small" style="color:${weakest?'var(--red-line)':'var(--text-mute)'}">${weakest ? weakest.name : "encara no prou dades"}</div></div>
    </div>

    <div class="section-title">Evolució del rendiment</div>
    <div class="stats-panel">
      ${sparkline ? `<div class="chart-wrap">${sparkline}</div>` : `<div class="empty-hint">Fes almenys 2 tests per veure la corba d'evolució.</div>`}
    </div>

    <div class="section-title">Precisió per tipus de pregunta</div>
    <div class="stats-panel"><div class="type-bars">${typeRows}</div></div>

    <div class="section-title">Rendiment per tipus de test</div>
    <div class="stats-panel"><div class="mode-cards">${modeCards}</div></div>

    <div class="section-title">Progrés per tema</div>
    <div class="stats-panel">${topicRows || '<div class="empty-hint">Encara no hi ha prou dades. Fes algun test!</div>'}</div>
  ` : `<div class="empty-hint" style="margin-bottom:24px;">Encara no hi ha tests${filter!=="all"?" d'aquest tipus":""} registrats. Fes-ne un per començar a veure estadístiques.</div>`;

  return `
    <h1>Historial i estadístiques</h1>
    <p class="subtitle">${allHist.length} tests registrats a aquest ordinador</p>
    <div class="tabs">${tabs}</div>
    ${body}
    <div class="section-title">Historial detallat</div>
    <table class="history">
      <tr><th>Data</th><th>Test</th><th>Puntuació</th><th>%</th><th>Durada</th></tr>
      ${histRows || '<tr><td colspan="5">Sense historial encara.</td></tr>'}
    </table>
    ${allHist.length ? '<button class="btn secondary small" id="btn-clear-history" style="margin-top:18px;">Esborrar historial</button>' : ""}
  `;
}

// ---------------- EVENT HANDLERS ----------------
function attachHandlers(){
  root.querySelectorAll("[data-nav]").forEach(el=>{
    el.addEventListener("click", ()=>{
      const view = el.getAttribute("data-nav");
      const topic = el.getAttribute("data-topic");
      setView(view, topic ? {topicId:topic} : {});
    });
  });

  const topicSelect = document.getElementById("cfg-topic");
  if(topicSelect){
    topicSelect.addEventListener("change", (e)=>{ setView("test-topic-config", {topicId:e.target.value}); });
  }

  const startTopic = document.getElementById("btn-start-topic");
  if(startTopic){
    startTopic.addEventListener("click", ()=>{
      const topicId = document.getElementById("cfg-topic").value;
      const topic = TOPICS.find(t=>t.id===topicId);
      const counts = readCounts();
      const timerOn = document.getElementById("cfg-timer").checked;
      const pool = topic.questions.map(q=>({...q, topicId:topic.id, topicName:topic.name}));
      const questions = buildQuestionSet(pool, counts);
      if(!questions.length){ alert("Selecciona almenys una pregunta."); return; }
      const secs = timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
      lastConfig = {type:"topic", topicId, counts, timerOn};
      startQuiz(questions, {mode:"topic", topicId, label:`Tema: ${topic.name}`}, secs);
    });
  }

  const startGeneral = document.getElementById("btn-start-general");
  if(startGeneral){
    startGeneral.addEventListener("click", ()=>{
      const counts = readCounts();
      const timerOn = document.getElementById("cfg-timer").checked;
      const questions = buildQuestionSet(ALL_QUESTIONS, counts);
      if(!questions.length){ alert("Selecciona almenys una pregunta."); return; }
      const secs = timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
      lastConfig = {type:"general", counts, timerOn};
      startQuiz(questions, {mode:"general", label:"Test general"}, secs);
    });
  }

  const startFinal = document.getElementById("btn-start-final");
  if(startFinal){
    startFinal.addEventListener("click", ()=>{
      const n = Math.min(EXAM_TOTAL_Q, ALL_QUESTIONS.length);
      const questions = shuffle(ALL_QUESTIONS).slice(0,n).map(prepareQuestion);
      const secs = Math.round(EXAM_TOTAL_SEC * n / EXAM_TOTAL_Q);
      lastConfig = {type:"final"};
      startQuiz(questions, {mode:"final", label:"Test final (examen)"}, secs);
    });
  }

  root.querySelectorAll("[data-pick]").forEach(el=>{
    el.addEventListener("click", ()=> pickOption(parseInt(el.getAttribute("data-pick"),10)));
  });

  const nextBtn = document.getElementById("btn-quiz-next");
  if(nextBtn){
    nextBtn.addEventListener("click", ()=>{
      if(!quiz.locked) checkAnswer(); else nextQuestion();
    });
  }

  const quitBtn = root.querySelector('[data-action="quit-quiz"]');
  if(quitBtn){
    quitBtn.addEventListener("click", ()=>{
      if(confirm("Segur que vols abandonar el test? Es perdrà el progrés actual.")){
        if(quiz && quiz.timerHandle) clearInterval(quiz.timerHandle);
        setView("dashboard");
      }
    });
  }

  const startTopicTest = root.querySelector('[data-action="start-topic-test"]');
  if(startTopicTest){
    startTopicTest.addEventListener("click", ()=>{
      setView("test-topic-config", {topicId: startTopicTest.getAttribute("data-topic")});
    });
  }

  const repeatBtn = root.querySelector('[data-action="repeat-same-config"]');
  if(repeatBtn){
    repeatBtn.addEventListener("click", ()=>{
      if(!lastConfig) { setView("dashboard"); return; }
      if(lastConfig.type==="final"){
        const n = Math.min(EXAM_TOTAL_Q, ALL_QUESTIONS.length);
        const questions = shuffle(ALL_QUESTIONS).slice(0,n).map(prepareQuestion);
        const secs = Math.round(EXAM_TOTAL_SEC * n / EXAM_TOTAL_Q);
        startQuiz(questions, {mode:"final", label:"Test final (examen)"}, secs);
      } else if(lastConfig.type==="general"){
        const questions = buildQuestionSet(ALL_QUESTIONS, lastConfig.counts);
        const secs = lastConfig.timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
        startQuiz(questions, {mode:"general", label:"Test general"}, secs);
      } else {
        const topic = TOPICS.find(t=>t.id===lastConfig.topicId);
        const pool = topic.questions.map(q=>({...q, topicId:topic.id, topicName:topic.name}));
        const questions = buildQuestionSet(pool, lastConfig.counts);
        const secs = lastConfig.timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
        startQuiz(questions, {mode:"topic", topicId:topic.id, label:`Tema: ${topic.name}`}, secs);
      }
    });
  }

  root.querySelectorAll("[data-stats-filter]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsFilter: el.getAttribute("data-stats-filter")});
    });
  });

  const clearBtn = document.getElementById("btn-clear-history");
  if(clearBtn){
    clearBtn.addEventListener("click", ()=>{
      if(confirm("Esborrar tot l'historial de tests? Aquesta acció no es pot desfer.")){
        clearHistory();
        render();
      }
    });
  }
}

function readCounts(){
  return {
    single: parseInt(document.getElementById("cnt-single").value,10) || 0,
    multi: parseInt(document.getElementById("cnt-multi").value,10) || 0,
    tf: parseInt(document.getElementById("cnt-tf").value,10) || 0
  };
}

let lastConfig = null;

render();
