const STORAGE_KEY = "pspo_i_trainer_history_v1";
const CUSTOM_KEY = "pspo_i_trainer_custom_questions_v1";
const THEME_KEY = "pspo_i_trainer_theme_v1";
const ERROR_KEY = "pspo_i_trainer_errors_v1";
const EXAM_TOTAL_Q = 80;
const EXAM_TOTAL_SEC = 60 * 60;

// ---------------- ERROR LOG ----------------
function simpleHash(str){
  let h = 0;
  for(let i=0;i<str.length;i++){ h = (Math.imul(31,h) + str.charCodeAt(i))|0; }
  return (h>>>0).toString(36);
}
function questionUID(q){
  return q.id ? q.id : (q.topicId + "::" + simpleHash(q.q));
}
function loadErrorLog(){
  try{
    const raw = localStorage.getItem(ERROR_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveErrorLog(list){
  localStorage.setItem(ERROR_KEY, JSON.stringify(list));
}
function clearErrorLog(){
  localStorage.removeItem(ERROR_KEY);
}
function recordAnswerResult(q, isCorrect){
  const uid = questionUID(q);
  const log = loadErrorLog();
  let entry = log.find(e=>e.uid===uid);
  if(!entry){
    if(isCorrect) return;
    entry = {
      uid, topicId:q.topicId, topicName:q.topicName, type:q.type,
      q:q.q, opts:q.opts.slice(), exp:q.exp.slice(),
      correct:(Array.isArray(q.correct)?q.correct.slice():[q.correct]), trap:q.trap,
      failCount:0, streak:0, lastFailedAt:null, masteredAt:null
    };
    log.push(entry);
  }
  if(isCorrect){
    entry.streak = (entry.streak||0) + 1;
    if(entry.streak>=3 && !entry.masteredAt) entry.masteredAt = Date.now();
  } else {
    entry.failCount = (entry.failCount||0) + 1;
    entry.streak = 0;
    entry.masteredAt = null;
    entry.lastFailedAt = Date.now();
  }
  saveErrorLog(log);
}
function activeErrors(){
  return loadErrorLog().filter(e=>!e.masteredAt);
}

// ---------------- SPECIAL MODES ----------------
const TRAP_KEYWORDS = ["sempre","mai ","únicament","únic ","única ","exclusivament","només","tots els","totes les","cap ","l'única","l'únic","immediatament","obligatòriament","en cap cas"];
function detectTrapQuestions(pool){
  return pool.filter(q=>{
    const haystack = ((q.trap||"") + " " + q.opts.join(" ")).toLowerCase();
    return TRAP_KEYWORDS.some(k=>haystack.includes(k));
  });
}

function buildTfMassivePool(count, topicId){
  let base = getAllQuestionsPool().filter(q=>q.type!=="tf");
  if(topicId && topicId!=="all") base = base.filter(q=>q.topicId===topicId);
  let items = [];
  base.forEach(q=>{
    const correctSet = Array.isArray(q.correct) ? q.correct : [q.correct];
    q.opts.forEach((opt,i)=>{
      const isCorrectOpt = correctSet.includes(i);
      items.push({
        type:"tf",
        q: `Vertader o fals: "${opt}" és una resposta correcta per a — ${q.q}`,
        opts: ["Vertader","Fals"],
        correct: [isCorrectOpt?0:1],
        exp: [
          isCorrectOpt ? (q.exp[i]||"Correcte.") : "Aquesta opció no és una resposta correcta a la pregunta original.",
          !isCorrectOpt ? (q.exp[i]||"Incorrecte.") : "Aquesta opció sí és una resposta correcta a la pregunta original."
        ],
        trap: q.trap, topicId: q.topicId, topicName: q.topicName
      });
    });
  });
  return shuffle(items).slice(0, count);
}

function startRedemptionMode(){
  const pool = activeErrors().map(e=>({type:e.type, q:e.q, opts:e.opts, exp:e.exp, correct:e.correct, trap:e.trap, topicId:e.topicId, topicName:e.topicName}));
  if(!pool.length){ alert("No tens preguntes pendents al registre d'errors."); return; }
  const questions = shuffle(pool).map(prepareQuestion);
  startQuiz(questions, {mode:"redemption", label:"Test de redempció"}, null);
}

function startTfMassiveMode(){
  const countInput = document.getElementById("tfmassive-count");
  const count = countInput ? (parseInt(countInput.value,10)||20) : 20;
  const items = buildTfMassivePool(count, "all");
  if(!items.length){ alert("No hi ha prou preguntes d'opció única/múltiple per generar aquest mode."); return; }
  const questions = items.map(prepareQuestion);
  startQuiz(questions, {mode:"tfmassive", label:"Vertader/Fals massiu"}, null);
}

function startTrapMode(){
  const pool = detectTrapQuestions(getAllQuestionsPool());
  if(!pool.length){ alert("No s'han detectat preguntes trampa al banc actual."); return; }
  const questions = shuffle(pool).map(prepareQuestion);
  startQuiz(questions, {mode:"trap", label:"Preguntes trampa"}, null);
}

function renderSpecialModes(){
  const activeErr = activeErrors();
  const mcPool = getAllQuestionsPool().filter(q=>q.type!=="tf");
  const tfMax = mcPool.reduce((s,q)=>s+q.opts.length,0);
  const trapPool = detectTrapQuestions(getAllQuestionsPool());

  return `
    <h1>Modes especials</h1>
    <p class="subtitle">Estratègies de repàs pensades per reforçar exactament el que et falta.</p>
    <div class="special-grid">
      <div class="special-card">
        <h3>Bucle de fallada contínua</h3>
        <p>Repeteix només les preguntes que has fallat, en bucle, fins que les encertis 3 vegades seguides.</p>
        <div class="special-meta">${activeErr.length} pregunta${activeErr.length===1?"":"es"} activa${activeErr.length===1?"":"es"} al registre d'errors</div>
        <button class="btn amber" data-action="start-loop-mode" ${activeErr.length===0?"disabled":""}>Començar bucle ↗</button>
      </div>

      <div class="special-card">
        <h3>Test de redempció</h3>
        <p>Un test normal, d'una sola volta, amb totes les preguntes que actualment tens pendents al registre d'errors.</p>
        <div class="special-meta">${activeErr.length} pregunta${activeErr.length===1?"":"es"} disponible${activeErr.length===1?"":"s"}</div>
        <button class="btn amber" data-action="start-redemption-mode" ${activeErr.length===0?"disabled":""}>Començar redempció ↗</button>
      </div>

      <div class="special-card">
        <h3>Vertader / Fals massiu</h3>
        <p>Transforma cada opció de les preguntes d'opció única i múltiple en una pregunta independent de Vertader/Fals. Processa el triple de conceptes en menys temps.</p>
        <div class="special-meta">${mcPool.length} preguntes base · fins a ${tfMax} ítems V/F possibles</div>
        <div class="config-row">
          <label>Nombre d'ítems</label>
          <input type="number" min="5" max="${Math.max(tfMax,5)}" value="${Math.min(20,tfMax)||5}" id="tfmassive-count"/>
        </div>
        <button class="btn amber" data-action="start-tfmassive-mode" ${tfMax===0?"disabled":""}>Començar ↗</button>
      </div>

      <div class="special-card">
        <h3>Preguntes trampa</h3>
        <p>Agrupa preguntes amb paraules típiques de trampa d'examen ("sempre", "mai", "únicament"...) o opcions molt semblants, per entrenar l'atenció.</p>
        <div class="special-meta">${trapPool.length} pregunta${trapPool.length===1?"":"es"} detectada${trapPool.length===1?"":"es"}</div>
        <button class="btn amber" data-action="start-trap-mode" ${trapPool.length===0?"disabled":""}>Començar ↗</button>
      </div>
    </div>
  `;
}

// ---------------- LOOP MODE (bucle de fallada contínua) ----------------
let loopQuiz = null;

function currentLoopEntry(){
  if(!loopQuiz || !loopQuiz.queue.length) return null;
  const uid = loopQuiz.queue[0];
  return loadErrorLog().find(e=>e.uid===uid) || null;
}

function advanceLoop(){
  while(loopQuiz.queue.length){
    const entry = currentLoopEntry();
    if(entry && !entry.masteredAt) break;
    loopQuiz.queue.shift();
  }
  if(!loopQuiz.queue.length){ loopQuiz.current = null; return; }
  const entry = currentLoopEntry();
  loopQuiz.current = prepareQuestion({
    type:entry.type, q:entry.q, opts:entry.opts, exp:entry.exp,
    correct:entry.correct, trap:entry.trap, topicId:entry.topicId, topicName:entry.topicName
  });
  loopQuiz.selected = [];
  loopQuiz.locked = false;
}

function startLoopMode(){
  const active = activeErrors();
  if(!active.length){ alert("No tens preguntes pendents al registre d'errors."); return; }
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  loopQuiz = {
    queue: shuffle(active.map(e=>e.uid)),
    current: null, selected:[], locked:false,
    correctCount:0, wrongCount:0, startedAt: Date.now()
  };
  advanceLoop();
  setView("loop-quiz");
}

function pickLoopOption(i){
  if(loopQuiz.locked) return;
  const q = loopQuiz.current;
  if(q.type==="multi"){
    const pos = loopQuiz.selected.indexOf(i);
    if(pos>=0) loopQuiz.selected.splice(pos,1); else loopQuiz.selected.push(i);
  } else {
    loopQuiz.selected = [i];
  }
  render();
}

function loopCheckAnswer(){
  const q = loopQuiz.current;
  const isRight = loopQuiz.selected.length===q.correct.length && loopQuiz.selected.every(s=>q.correct.includes(s));
  loopQuiz.locked = true;
  loopQuiz.lastResult = isRight;
  recordAnswerResult(q, isRight);
  if(isRight) loopQuiz.correctCount++; else loopQuiz.wrongCount++;
  render();
}

function loopNext(){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  const uid = loopQuiz.queue.shift();
  const entry = loadErrorLog().find(e=>e.uid===uid);
  if(entry && !entry.masteredAt) loopQuiz.queue.push(uid);
  advanceLoop();
  if(!loopQuiz.current){ setView("loop-score"); } else { render(); }
}

function renderLoopQuiz(){
  if(!loopQuiz || !loopQuiz.current) return "";
  const q = loopQuiz.current;
  const entry = currentLoopEntry();
  let optsHtml = q.opts.map((o,i)=>{
    let cls="opt";
    if(loopQuiz.locked){
      cls+=" locked";
      const isCorrect = q.correct.includes(i);
      const wasSelected = loopQuiz.selected.includes(i);
      if(isCorrect) cls+=" correct";
      else if(wasSelected) cls+=" incorrect";
    } else if(loopQuiz.selected.includes(i)){
      cls+=" selected";
    }
    return `<button class="${cls}" data-loop-pick="${i}" ${loopQuiz.locked?"disabled":""}><b>${String.fromCharCode(65+i)}</b>${o}</button>`;
  }).join("");
  let hint = q.type==="multi" ? '<div class="hint">Selecciona totes les que corresponguin</div>' : "";
  let feedbackHtml = "";
  if(loopQuiz.locked){
    feedbackHtml = `<div class="feedback ${loopQuiz.lastResult?'ok':'bad'}">
      <strong>${loopQuiz.lastResult?"Correcte.":"Incorrecte."}</strong>
      <ul class="explist">${q.exp.map((e,i)=>`<li><b>${String.fromCharCode(65+i)}.</b> ${e}</li>`).join("")}</ul>
      <span class="trap">Nota d'examen: ${q.trap}</span>
    </div>`;
  }
  return `
    <div class="topbar-quiz">
      <span>Bucle de fallada contínua · queden ${loopQuiz.queue.length} preguntes actives</span>
      <span class="timer">Ratxa: ${entry?entry.streak:0}/3</span>
    </div>
    <div class="card">
      <span class="block-tag">${q.type==="multi"?"Resposta múltiple":q.type==="tf"?"Vertader / Fals":"Opció única"} · ${q.topicName}</span>
      <div class="quiz-toolbar">
        <button type="button" class="icon-btn" data-action="speak-loop-question" title="Escolta la pregunta">${ICON_SPEAKER}Escolta</button>
      </div>
      <p class="qtext">${q.q}</p>
      ${hint}
      ${optsHtml}
      ${feedbackHtml}
      <div class="actions">
        <button class="btn secondary" data-action="quit-loop">Abandonar</button>
        <button class="btn" id="btn-loop-next" ${(!loopQuiz.locked && loopQuiz.selected.length===0)?"disabled":""}>${loopQuiz.locked?"Següent":"Comprovar"}</button>
      </div>
    </div>
  `;
}

function renderLoopScore(){
  return `
    <div class="score-screen">
      <div class="score-lbl">Bucle de fallada contínua completat</div>
      <div class="score-num">✓</div>
      <div class="score-lbl">Has dominat totes les preguntes actives (3 encerts seguits cadascuna)</div>
      <div style="display:flex; gap:10px; justify-content:center; margin-top:18px;">
        <button class="btn secondary" data-nav="dashboard">Tornar a l'inici</button>
        <button class="btn amber" data-nav="special-modes">Tornar als modes especials</button>
      </div>
    </div>
  `;
}

// ---------------- THEME ----------------
function loadTheme(){
  try{ return localStorage.getItem(THEME_KEY) || "dark"; }catch(e){ return "dark"; }
}
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
}
let currentTheme = loadTheme();
applyTheme(currentTheme);

function toggleTheme(){
  currentTheme = currentTheme==="dark" ? "light" : "dark";
  try{ localStorage.setItem(THEME_KEY, currentTheme); }catch(e){}
  applyTheme(currentTheme);
  render();
}

// ---------------- POMODORO ----------------
let pomodoro = {
  running:false, phase:"focus", secondsLeft:25*60,
  focusMin:25, breakMin:5, handle:null
};

function fmtTime(sec){
  const m = Math.floor(sec/60), s = sec%60;
  return `${m}:${s.toString().padStart(2,"0")}`;
}

function playChime(){
  try{
    const ctx = new (window.AudioContext||window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = 880;
    osc.connect(gain); gain.connect(ctx.destination);
    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    osc.start();
    osc.stop(ctx.currentTime+0.35);
  }catch(e){}
}

function updatePomodoroDisplay(){
  const el = document.getElementById("pomodoro-time");
  if(el) el.textContent = fmtTime(pomodoro.secondsLeft);
}

function pomodoroTick(){
  pomodoro.secondsLeft--;
  if(pomodoro.secondsLeft<=0){
    pomodoro.phase = pomodoro.phase==="focus" ? "break" : "focus";
    pomodoro.secondsLeft = (pomodoro.phase==="focus"?pomodoro.focusMin:pomodoro.breakMin)*60;
    playChime();
    render();
    return;
  }
  updatePomodoroDisplay();
}

function pomodoroToggle(){
  if(pomodoro.running){
    clearInterval(pomodoro.handle);
    pomodoro.running = false;
  } else {
    pomodoro.running = true;
    pomodoro.handle = setInterval(pomodoroTick, 1000);
  }
  render();
}

function pomodoroReset(){
  clearInterval(pomodoro.handle);
  pomodoro.running = false;
  pomodoro.phase = "focus";
  pomodoro.secondsLeft = pomodoro.focusMin*60;
  render();
}

// ---------------- CUSTOM QUESTIONS ----------------
function loadCustomQuestions(){
  try{
    const raw = localStorage.getItem(CUSTOM_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveCustomQuestions(list){
  localStorage.setItem(CUSTOM_KEY, JSON.stringify(list));
}
function addCustomQuestion(q){
  const list = loadCustomQuestions();
  list.push(q);
  saveCustomQuestions(list);
}
function deleteCustomQuestion(id){
  saveCustomQuestions(loadCustomQuestions().filter(q=>q.id!==id));
}
function topicQuestionCount(topicId){
  const topic = TOPICS.find(t=>t.id===topicId);
  const officialCount = topic ? topic.questions.length : 0;
  const customCount = loadCustomQuestions().filter(q=>q.topicId===topicId).length;
  return officialCount + customCount;
}
function getTopicPool(topicId){
  const topic = TOPICS.find(t=>t.id===topicId);
  const official = topic ? topic.questions.map(q=>({...q, topicId:topic.id, topicName:topic.name})) : [];
  const custom = loadCustomQuestions().filter(q=>q.topicId===topicId).map(q=>({...q, topicName: topic?topic.name:q.topicId}));
  return official.concat(custom);
}
function getAllQuestionsPool(){
  const custom = loadCustomQuestions().map(q=>{
    const topic = TOPICS.find(t=>t.id===q.topicId);
    return {...q, topicName: topic?topic.name:q.topicId};
  });
  return ALL_QUESTIONS.concat(custom);
}
function escapeHtml(str){
  return String(str==null?"":str).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}
function escapeAttr(str){
  return escapeHtml(str).replace(/"/g,"&quot;");
}

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
let customDraft = null; // active custom-question form draft

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
      ${navItem("special-modes","Modes especials")}
      <div class="nav-sep"></div>
      ${navItem("custom-questions","Preguntes pròpies")}
      <div class="nav-sep"></div>
      ${navItem("stats","Historial i estadístiques")}
      <div class="nav-sep"></div>
      ${navItem("info","Sobre l'app")}
      <div class="sidebar-bottom">
        <div class="pomodoro-widget">
          <div class="pomo-label">${pomodoro.phase==="focus"?"Enfocament":"Descans"}</div>
          <div class="pomo-time" id="pomodoro-time">${fmtTime(pomodoro.secondsLeft)}</div>
          <div class="pomo-controls">
            <button type="button" class="icon-btn" data-action="pomodoro-toggle">${pomodoro.running?"Pausa":"Inicia"}</button>
            <button type="button" class="icon-btn" data-action="pomodoro-reset" title="Reinicia">↺</button>
          </div>
        </div>
        <div class="theme-toggle" data-action="toggle-theme" title="Canvia el tema">
          ${currentTheme==="dark" ? ICON_SUN : ICON_MOON}
          <span>${currentTheme==="dark" ? "Mode clar" : "Mode fosc"}</span>
        </div>
      </div>
    </div>
    <div class="main" id="main"></div>
  `;
  document.getElementById("main").innerHTML = renderMain();
  attachHandlers();
}

const ICON_SPEAKER = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 6.2h2.4L8 3.2v9.6L4.9 9.8H2.5Z"/><path d="M10.3 5.8a3.4 3.4 0 0 1 0 4.4"/><path d="M12.2 4a6 6 0 0 1 0 8"/></svg>';
const ICON_FLAG = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2.5h8v11l-4-2.6-4 2.6Z"/></svg>';

function speakQuestion(){
  if(!('speechSynthesis' in window)){ alert("Aquest entorn no admet la lectura en veu alta."); return; }
  const q = quiz.questions[quiz.idx];
  const parts = [q.q];
  q.opts.forEach((o,i)=> parts.push(`Opció ${String.fromCharCode(65+i)}: ${o}`));
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(parts.join(". "));
  utter.lang = "ca-ES";
  window.speechSynthesis.speak(utter);
}

function toggleFlag(){
  const idx = quiz.idx;
  const pos = quiz.flagged.indexOf(idx);
  if(pos>=0) quiz.flagged.splice(pos,1); else quiz.flagged.push(idx);
  render();
}

const ICON_SUN = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3"/><path d="M8 1.5v1.7M8 12.8v1.7M1.5 8h1.7M12.8 8h1.7M3.6 3.6l1.2 1.2M11.2 11.2l1.2 1.2M3.6 12.4l1.2-1.2M11.2 4.8l1.2-1.2"/></svg>';
const ICON_MOON = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M13.2 9.6A5.6 5.6 0 0 1 6.4 2.8a5.6 5.6 0 1 0 6.8 6.8Z"/></svg>';

const NAV_ICONS = {
  "dashboard": '<path d="M2.5 8.5 8 3l5.5 5.5"/><path d="M3.8 7.2V13h8.4V7.2"/>',
  "theory-list": '<path d="M2.5 3.2h4a2 2 0 0 1 2 2v8.6a1.6 1.6 0 0 0-1.6-1.6h-4.4Z"/><path d="M13.5 3.2h-4a2 2 0 0 0-2 2v8.6a1.6 1.6 0 0 1 1.6-1.6h4.4Z"/>',
  "test-topic-config": '<circle cx="8" cy="8" r="5.2"/><circle cx="8" cy="8" r="2.1"/>',
  "test-general-config": '<path d="M2.5 5h3.4l2 2.2"/><path d="M2.5 11h3.4l6.6-7.4h1"/><path d="M9.9 9.8l2.6 3.2h1"/><path d="M11.5 2.7 13.5 3.6l-2 1"/><path d="M11.5 13.3 13.5 12.4l-2-1"/>',
  "test-final-config": '<path d="M3.5 2.5v11"/><path d="M3.5 3.2h8l-1.6 2.4 1.6 2.4h-8Z"/>',
  "special-modes": '<path d="M8.7 2.2 3.8 8.6h3.1l-1 5.2 5.4-6.9H8.3Z"/>',
  "custom-questions": '<path d="M9.8 2.9a1.4 1.4 0 0 1 2 2L5.4 11.3l-2.7.6.6-2.7Z"/><path d="M8.7 4l1.9 1.9"/>',
  "stats": '<path d="M3 13V6.5"/><path d="M7.5 13V3"/><path d="M12 13V9"/><path d="M2 13.5h12"/>',
  "info": '<circle cx="8" cy="8" r="5.3"/><path d="M8 7.3v3.7"/><circle cx="8" cy="5" r="0.75" fill="currentColor" stroke="none"/>'
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
    case "special-modes": return renderSpecialModes();
    case "loop-quiz": return renderLoopQuiz();
    case "loop-score": return renderLoopScore();
    case "custom-questions": return renderCustom();
    case "stats": return renderStats();
    case "info": return renderInfo();
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
      <div class="stat-card"><div class="lbl">Banc de preguntes</div><div class="val">${getAllQuestionsPool().length}</div></div>
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
          <div class="meta">${topicQuestionCount(t.id)} preguntes al banc · ${d.total ? pct+"% encert" : "sense intents"}</div>
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
        <div class="meta">${topicQuestionCount(t.id)} preguntes de pràctica</div>
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
  const counts = countsByType(getTopicPool(topicId));
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
  const pool = getAllQuestionsPool();
  const counts = countsByType(pool);
  return `
    <h1>Test general</h1>
    <p class="subtitle">Preguntes de tots els temes barrejades. Tria quantes vols de cada tipus (fins al màxim disponible: ${pool.length}).</p>
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
  const pool = getAllQuestionsPool();
  const n = Math.min(EXAM_TOTAL_Q, pool.length);
  const secs = Math.round(EXAM_TOTAL_SEC * n / EXAM_TOTAL_Q);
  const mins = Math.round(secs/60);
  return `
    <h1>Test final — simulació d'examen</h1>
    <p class="subtitle">Barreja tots els temes i tots els tipus de pregunta, amb temporitzador fix, tal com l'examen real (${EXAM_TOTAL_Q} preguntes / 60 min).</p>
    <div class="config-box">
      <div class="config-row"><label>Preguntes d'aquest test</label><span class="max">${n} de ${pool.length} disponibles</span></div>
      <div class="config-row"><label>Temps disponible</label><span class="max">${mins} min (proporcional si hi ha menys de ${EXAM_TOTAL_Q})</span></div>
      <div class="config-row"><label>Ordre</label><span class="max">totalment aleatori, diferent cada vegada</span></div>
      <button class="btn amber" id="btn-start-final" style="width:100%; margin-top:8px;">Començar examen ↗</button>
    </div>
  `;
}

// ---------------- QUIZ ENGINE ----------------
function startQuiz(questions, meta, timerSec){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
  quiz = {
    questions, idx:0, selected:[], locked:false, results:[], flagged:[],
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
  const isFlagged = quiz.flagged && quiz.flagged.includes(quiz.idx);

  return `
    <div class="track">${dots}</div>
    <div class="topbar-quiz">
      <span>Pregunta ${quiz.idx+1} / ${quiz.questions.length} — ${quiz.meta.label}</span>
      ${timerHtml}
    </div>
    <div class="card">
      <span class="block-tag">${q.type==="multi"?"Resposta múltiple":q.type==="tf"?"Vertader / Fals":"Opció única"} · ${q.topicName}</span>
      <div class="quiz-toolbar">
        <button type="button" class="icon-btn" data-action="speak-question" title="Escolta la pregunta">${ICON_SPEAKER}Escolta</button>
        <button type="button" class="icon-btn ${isFlagged?'active':''}" data-action="toggle-flag" title="Marca per revisar (Dubte Extrem)">${ICON_FLAG}${isFlagged?"Marcada":"Marca per revisar"}</button>
      </div>
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
  recordAnswerResult(q, isRight);
  render();
}

function nextQuestion(){
  if(window.speechSynthesis) window.speechSynthesis.cancel();
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
  if(window.speechSynthesis) window.speechSynthesis.cancel();
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

  const flaggedIdxs = (quiz && quiz.flagged) || [];
  const flaggedHtml = flaggedIdxs.length ? `
    <div class="breakdown" style="margin-top:16px;">
      <div class="brow"><b>Marcades per revisar (Dubte Extrem)</b><b></b></div>
      ${flaggedIdxs.map(i=>{
        const fq = quiz.questions[i];
        const ok = quiz.results[i];
        return `<div class="brow"><span>${escapeHtml(fq.q)}</span><span${ok?'':' class="bad-block"'}>${ok?"Encertada":"Fallada"}</span></div>`;
      }).join("")}
    </div>
  ` : "";

  return `
    <div class="score-screen">
      <div class="score-lbl">${e.timedOut ? "Temps esgotat — " : ""}Resultat: ${e.label}</div>
      <div class="score-num">${e.pct}%</div>
      <div class="score-lbl">${e.correct} de ${e.total} correctes · ${mins} min ${secs}s</div>
      <div class="breakdown">
        <div class="brow"><b>Tema</b><b>Encerts</b></div>
        ${rows}
      </div>
      ${flaggedHtml}
      ${weakNames.length ? `<p class="muted">Temes a repassar: ${weakNames.join(", ")}. Queden anotats a l'historial.</p>` : `<p class="muted">100% en tots els temes d'aquest test.</p>`}
      <div style="display:flex; gap:10px; justify-content:center; margin-top:18px;">
        <button class="btn secondary" data-nav="dashboard">Tornar a l'inici</button>
        <button class="btn amber" data-action="repeat-same-config">Repetir amb la mateixa configuració ↗</button>
      </div>
    </div>
  `;
}

// ---------------- INFO ----------------
function renderInfo(){
  return `
    <h1>Sobre l'aplicació</h1>
    <p class="subtitle">Tot el que pots fer amb l'Entrenador PSPO I</p>
    <div class="theory-box">
      <h3>Temari</h3>
      <p>Repassa la teoria de cada tema (basada en la Scrum Guide novembre 2020) abans de fer-ne el test corresponent.</p>

      <h3>Tests estàndard</h3>
      <ul>
        <li><b>Test per tema:</b> tria un tema i quantes preguntes de cada tipus vols practicar.</li>
        <li><b>Test general:</b> preguntes de tots els temes barrejades.</li>
        <li><b>Test final (examen):</b> simulació completa amb temporitzador fix, igual que l'examen real (${EXAM_TOTAL_Q} preguntes / 60 min).</li>
      </ul>

      <h3>Modes especials</h3>
      <ul>
        <li><b>Bucle de fallada contínua:</b> repeteix només les preguntes que has fallat, en bucle, fins a encertar-les 3 vegades seguides.</li>
        <li><b>Test de redempció:</b> un test normal, d'una sola volta, amb totes les preguntes pendents del registre d'errors.</li>
        <li><b>Vertader/Fals massiu:</b> converteix cada opció de les preguntes d'opció única i múltiple en un ítem independent de Vertader/Fals.</li>
        <li><b>Preguntes trampa:</b> agrupa preguntes amb paraules o patrons típics de trampa d'examen ("sempre", "mai", "únicament"...).</li>
      </ul>

      <h3>Durant el test</h3>
      <ul>
        <li><b>Escolta:</b> lectura en veu alta de la pregunta i les opcions.</li>
        <li><b>Marca per revisar (Dubte Extrem):</b> senyala preguntes que has encertat per pur atzar, per repassar-les al final del test.</li>
      </ul>

      <h3>Preguntes pròpies</h3>
      <p>Crea preguntes personalitzades (opció única, múltiple o Vertader/Fals) amb explicació per opció i nota d'examen. S'integren automàticament al Test per tema, Test general i Test final.</p>

      <h3>Historial i estadístiques</h3>
      <ul>
        <li>Resum global, evolució del rendiment, precisió per tipus de pregunta i rendiment per tipus de test.</li>
        <li><b>Mapa de calor de coneixement:</b> visió ràpida de quins temes domines i quins necessites repassar.</li>
        <li><b>Predicció de nota:</b> estimació de la nota que trauries a l'examen real, segons el teu progrés actual.</li>
        <li><b>Historial d'errors:</b> totes les preguntes fallades, amb la seva ratxa d'encerts consecutius.</li>
        <li>Filtres combinables per tipus de test, tema i rang de dies.</li>
      </ul>

      <h3>Altres</h3>
      <ul>
        <li><b>Mode clar / fosc</b> commutable des del sidebar.</li>
        <li><b>Pomodoro:</b> temporitzador d'estudi (${pomodoro.focusMin} min d'enfocament / ${pomodoro.breakMin} min de descans) integrat al sidebar.</li>
      </ul>
    </div>
  `;
}

// ---------------- CUSTOM QUESTIONS SCREEN ----------------
function defaultDraft(){
  return { topicId: TOPICS[0].id, type:"single", q:"", opts:["",""], exp:["",""], correct:[], trap:"" };
}

function renderCustom(){
  const list = loadCustomQuestions().slice().sort((a,b)=>b.createdAt-a.createdAt);
  const rows = list.map(q=>{
    const topic = TOPICS.find(t=>t.id===q.topicId);
    return `<div class="custom-row">
      <div class="custom-row-main">
        <span class="custom-row-topic">${TYPE_LABELS[q.type]} · ${topic?topic.name:q.topicId}</span>
        <p class="custom-row-q">${escapeHtml(q.q)}</p>
      </div>
      <button class="btn secondary small" data-action="delete-custom" data-id="${q.id}">Elimina</button>
    </div>`;
  }).join("");

  return `
    <h1>Preguntes pròpies</h1>
    <p class="subtitle">Afegeix preguntes personalitzades que s'integren automàticament als tests per tema, generals i a l'examen final. ${list.length} pregunta${list.length===1?"":"s"} pròpia${list.length===1?"":"es"}.</p>
    ${customDraft ? renderCustomForm(customDraft) : `<button class="btn amber" data-action="new-custom">+ Nova pregunta</button>`}
    <div class="section-title" style="margin-top:32px;">Preguntes afegides</div>
    <div class="custom-list">
      ${rows || '<div class="empty-hint">Encara no has afegit cap pregunta pròpia.</div>'}
    </div>
  `;
}

function renderCustomForm(d){
  const isTf = d.type==="tf";
  const optRows = d.opts.map((opt,i)=>{
    const checked = d.correct.includes(i);
    const inputType = d.type==="multi" ? "checkbox" : "radio";
    return `<div class="custom-opt-row">
      <input type="${inputType}" name="custom-correct" data-correct-idx="${i}" ${checked?"checked":""}/>
      ${isTf
        ? `<span class="custom-opt-tf">${i===0?"Vertader":"Fals"}</span>`
        : `<input type="text" class="custom-opt-text" placeholder="Text de l'opció ${String.fromCharCode(65+i)}" data-opt-idx="${i}" value="${escapeAttr(opt)}"/>`
      }
      <textarea class="custom-exp-text" placeholder="Explicació d'aquesta opció" data-exp-idx="${i}">${escapeHtml(d.exp[i]||"")}</textarea>
      ${!isTf && d.opts.length>2 ? `<button type="button" class="btn secondary small" data-action="remove-opt" data-idx="${i}">✕</button>` : ""}
    </div>`;
  }).join("");

  return `
    <div class="config-box" style="max-width:640px;">
      <div class="config-row">
        <label>Tema</label>
        <select data-custom-field="topicId">
          ${TOPICS.map(t=>`<option value="${t.id}" ${t.id===d.topicId?"selected":""}>${t.name}</option>`).join("")}
        </select>
      </div>
      <div class="config-row">
        <label>Tipus de pregunta</label>
        <select data-custom-field="type">
          <option value="single" ${d.type==="single"?"selected":""}>Opció única</option>
          <option value="multi" ${d.type==="multi"?"selected":""}>Resposta múltiple</option>
          <option value="tf" ${d.type==="tf"?"selected":""}>Vertader / Fals</option>
        </select>
      </div>
      <div class="custom-field-block">
        <label>Enunciat</label>
        <textarea data-custom-field="q" placeholder="Escriu la pregunta...">${escapeHtml(d.q)}</textarea>
      </div>
      <div class="custom-field-block">
        <label>Opcions ${d.type==="multi"?"(marca totes les correctes)":"(marca la correcta)"}</label>
        ${optRows}
        ${!isTf && d.opts.length<6 ? `<button type="button" class="btn secondary small" data-action="add-opt">+ Afegir opció</button>` : ""}
      </div>
      <div class="custom-field-block">
        <label>Nota d'examen (trampa habitual)</label>
        <textarea data-custom-field="trap" placeholder="Ex: no confondre X amb Y...">${escapeHtml(d.trap)}</textarea>
      </div>
      <div class="actions" style="margin-top:6px;">
        <button class="btn secondary" data-action="cancel-custom">Cancel·la</button>
        <button class="btn amber" data-action="save-custom">Desar pregunta</button>
      </div>
    </div>
  `;
}

// ---------------- STATS ----------------
const MODE_LABELS = {topic:"Test per tema", general:"Test general", final:"Test final", redemption:"Test de redempció", tfmassive:"V/F massiu", trap:"Preguntes trampa"};
const CORE_MODES = ["topic","general","final"];
const TYPE_LABELS = {single:"Opció única", multi:"Resposta múltiple", tf:"Vertader / Fals"};
const DAYS_LABELS = {"all":"Tot", "7":"7 dies", "30":"30 dies", "90":"90 dies"};

function filterHistory(hist, filter){
  if(!filter || filter==="all") return hist;
  return hist.filter(h=>h.mode===filter);
}

function filterByTopic(hist, topicId){
  if(!topicId || topicId==="all") return hist;
  return hist.filter(h=> h.byTopic && h.byTopic[topicId]);
}

function filterByDays(hist, days){
  if(!days || days==="all") return hist;
  const cutoff = Date.now() - Number(days)*24*60*60*1000;
  return hist.filter(h=> h.ts >= cutoff);
}

function sessionPct(h, topicId){
  if(topicId && topicId!=="all" && h.byTopic && h.byTopic[topicId]){
    const d = h.byTopic[topicId];
    return d.total ? Math.round(100*d.ok/d.total) : 0;
  }
  return h.pct;
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
  const agg = {};
  hist.forEach(h=>{
    if(!agg[h.mode]) agg[h.mode] = {n:0,sum:0};
    agg[h.mode].n++; agg[h.mode].sum += h.pct;
  });
  return agg;
}

function computeStreak(histDesc, topicId){
  let streak = 0;
  for(const h of histDesc){
    if(sessionPct(h, topicId)>=80) streak++; else break;
  }
  return streak;
}

function pctColor(pct){
  return pct>=80 ? "var(--green-line)" : pct>=60 ? "var(--amber)" : "var(--red-line)";
}

function heatColor(pct){
  const hue = Math.max(0, Math.min(120, pct*1.2));
  return `hsl(${hue}, 55%, 42%)`;
}

const EXAM_PASS_THRESHOLD = 85;
function predictExamScore(hist){
  if(!hist.length) return null;
  const overallAvg = hist.reduce((s,h)=>s+h.pct,0)/hist.length;
  const byTopic = aggregateByTopic(hist);
  let weightedSum = 0, totalWeight = 0;
  TOPICS.forEach(t=>{
    const d = byTopic[t.id];
    const weight = t.questions.length || 1;
    const topicPct = (d && d.total>=3) ? (100*d.ok/d.total) : overallAvg;
    weightedSum += topicPct * weight;
    totalWeight += weight;
  });
  return totalWeight ? Math.round(weightedSum/totalWeight) : Math.round(overallAvg);
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

function renderErrorHistoryTab(){
  const filter = state.errorFilter || "active";
  const log = loadErrorLog().slice().sort((a,b)=>(b.lastFailedAt||0)-(a.lastFailedAt||0));
  const activeCount = log.filter(e=>!e.masteredAt).length;
  const masteredCount = log.filter(e=>e.masteredAt).length;
  const filtered = filter==="all" ? log : filter==="mastered" ? log.filter(e=>e.masteredAt) : log.filter(e=>!e.masteredAt);

  const errTabs = [["active",`Actives (${activeCount})`],["mastered",`Dominades (${masteredCount})`],["all",`Totes (${log.length})`]]
    .map(([k,label])=>`<div class="tab ${filter===k?'active':''}" data-error-filter="${k}">${label}</div>`).join("");

  const rows = filtered.map(e=>{
    const topic = TOPICS.find(t=>t.id===e.topicId);
    const dateStr = e.lastFailedAt ? new Date(e.lastFailedAt).toLocaleDateString() : "—";
    const statusLabel = e.masteredAt ? "Dominada" : `Ratxa ${e.streak}/3`;
    return `<div class="custom-row">
      <div class="custom-row-main">
        <span class="custom-row-topic">${topic?topic.name:e.topicId} · ${statusLabel} · ${e.failCount} fallada${e.failCount===1?"":"es"}</span>
        <p class="custom-row-q">${escapeHtml(e.q)}</p>
      </div>
      <span class="muted" style="white-space:nowrap;">${dateStr}</span>
    </div>`;
  }).join("");

  return `
    <div class="tabs" style="margin-bottom:18px;">${errTabs}</div>
    <div class="custom-list">${rows || '<div class="empty-hint">Cap pregunta en aquesta categoria.</div>'}</div>
    ${log.length ? '<button class="btn secondary small" id="btn-clear-errors" style="margin-top:18px;">Esborrar registre d\'errors</button>' : ""}
  `;
}

function renderStats(){
  const statsView = state.statsView || "summary";
  const allHistRaw = loadHistory();
  const viewTabs = `
    <div class="tabs" style="margin-bottom:22px;">
      <div class="tab ${statsView==='summary'?'active':''}" data-stats-view="summary">Resum i evolució</div>
      <div class="tab ${statsView==='errors'?'active':''}" data-stats-view="errors">Historial d'errors (${activeErrors().length})</div>
    </div>
  `;

  if(statsView==="errors"){
    return `
      <h1>Historial i estadístiques</h1>
      <p class="subtitle">${allHistRaw.length} tests registrats a aquest ordinador</p>
      ${viewTabs}
      ${renderErrorHistoryTab()}
    `;
  }

  const filter = state.statsFilter || "all";
  const topicFilter = state.statsTopic || "all";
  const daysFilter = state.statsDays || "all";
  const allHist = allHistRaw;
  const predictedScore = predictExamScore(allHist);
  let hist = filterHistory(allHist, filter);
  hist = filterByTopic(hist, topicFilter);
  hist = filterByDays(hist, daysFilter);
  hist = hist.slice().sort((a,b)=>b.ts-a.ts);
  const histAsc = hist.slice().sort((a,b)=>a.ts-b.ts);

  const totalTests = hist.length;
  const avgPct = totalTests ? Math.round(hist.reduce((s,h)=>s+sessionPct(h,topicFilter),0)/totalTests) : null;
  const totalQuestions = topicFilter==="all"
    ? hist.reduce((s,h)=>s+h.total,0)
    : hist.reduce((s,h)=>{ const d=h.byTopic&&h.byTopic[topicFilter]; return s+(d?d.total:0); },0);
  const totalSec = hist.reduce((s,h)=>s+(h.durationSec||0),0);
  const totalHours = Math.floor(totalSec/3600), totalMins = Math.floor((totalSec%3600)/60);
  const streak = computeStreak(hist, topicFilter);

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
  const sparkline = buildSparkline(histAsc.map(h=>({pct: sessionPct(h, topicFilter)})));

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

  const specialModesUsed = Object.keys(modeAgg).filter(m=>!CORE_MODES.includes(m) && modeAgg[m].n>0);
  const modeCards = CORE_MODES.concat(specialModesUsed).map(m=>{
    const d = modeAgg[m] || {n:0,sum:0};
    const avg = d.n ? Math.round(d.sum/d.n) : null;
    return `<div class="mode-card">
      <div class="mlbl">${MODE_LABELS[m]||m}</div>
      <div class="mval">${avg===null?"—":avg+"%"}</div>
      <div class="msub">${d.n} test${d.n===1?"":"s"}</div>
    </div>`;
  }).join("");

  const histRows = hist.slice(0,40).map(h=>{
    const date = new Date(h.ts).toLocaleString();
    const scoreD = (topicFilter!=="all" && h.byTopic && h.byTopic[topicFilter]) ? h.byTopic[topicFilter] : {ok:h.correct, total:h.total};
    const pct = sessionPct(h, topicFilter);
    const cls = pct>=80?"ok":pct>=60?"mid":"bad";
    const mins = Math.floor(h.durationSec/60), secs = h.durationSec%60;
    return `<tr>
      <td>${date}</td><td>${h.label}</td><td>${scoreD.ok}/${scoreD.total}</td>
      <td><span class="pill ${cls}">${pct}%</span></td>
      <td>${mins}m ${secs}s${h.timedOut?" · temps esgotat":""}</td>
    </tr>`;
  }).join("");

  const tabs = ["all","topic","general","final"].map(f=>{
    const label = f==="all" ? "Tots" : MODE_LABELS[f];
    return `<div class="tab ${filter===f?'active':''}" data-stats-filter="${f}">${label}</div>`;
  }).join("");

  const daysTabs = ["all","7","30","90"].map(d=>{
    return `<div class="tab ${daysFilter===d?'active':''}" data-stats-days="${d}">${DAYS_LABELS[d]}</div>`;
  }).join("");

  const topicSelect = `<select class="stats-select" data-stats-topic>
    <option value="all" ${topicFilter==="all"?"selected":""}>Tots els temes</option>
    ${TOPICS.map(t=>`<option value="${t.id}" ${topicFilter===t.id?"selected":""}>${t.name}</option>`).join("")}
  </select>`;

  const body = totalTests ? `
    <div class="grid">
      <div class="stat-card"><div class="lbl">Tests</div><div class="val">${totalTests}</div></div>
      <div class="stat-card"><div class="lbl">Mitjana</div><div class="val">${avgPct}%</div></div>
      <div class="stat-card"><div class="lbl">Preguntes respostes</div><div class="val">${totalQuestions}</div></div>
      <div class="stat-card"><div class="lbl">Temps dedicat</div><div class="val small">${totalHours}h ${totalMins}m</div></div>
      <div class="stat-card"><div class="lbl">Ratxa actual (≥80%)</div><div class="val">${streak}</div><div class="sub">tests seguits</div></div>
      <div class="stat-card"><div class="lbl">Tema més fort</div><div class="val small" style="color:${strongest?'var(--green-line)':'var(--text-mute)'}">${strongest ? strongest.name : "encara no prou dades"}</div></div>
      <div class="stat-card"><div class="lbl">Tema a reforçar</div><div class="val small" style="color:${weakest?'var(--red-line)':'var(--text-mute)'}">${weakest ? weakest.name : "encara no prou dades"}</div></div>
      <div class="stat-card">
        <div class="lbl">Predicció nota (global)</div>
        <div class="val" style="color:${predictedScore===null?'var(--text-mute)':predictedScore>=EXAM_PASS_THRESHOLD?'var(--green-line)':'var(--red-line)'}">${predictedScore===null?"—":predictedScore+"%"}</div>
        <div class="sub">${predictedScore===null?"cal fer algun test":(predictedScore>=EXAM_PASS_THRESHOLD?"per sobre del ":"per sota del ")+"llindar d'aprovat ("+EXAM_PASS_THRESHOLD+"%)"}</div>
      </div>
    </div>

    <div class="section-title">Mapa de calor de coneixement</div>
    <div class="stats-panel">
      <div class="heatmap-grid">
        ${TOPICS.map(t=>{
          const d = byTopic[t.id] || {ok:0,total:0,name:t.name};
          const hasData = d.total>0;
          const pct = hasData ? Math.round(100*d.ok/d.total) : null;
          const bg = hasData ? heatColor(pct) : "var(--bg-panel-hi)";
          const color = hasData ? "#fff" : "var(--text-mute)";
          return `<div class="heat-tile" style="background:${bg}; color:${color};">
            <div class="htitle">${t.name}</div>
            <div>
              <div class="hpct">${hasData?pct+"%":"—"}</div>
              <div class="hsub">${hasData?d.ok+"/"+d.total:"sense intents"}</div>
            </div>
          </div>`;
        }).join("")}
      </div>
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
  ` : `<div class="empty-hint" style="margin-bottom:24px;">Encara no hi ha tests que coincideixin amb aquests filtres. Prova d'ampliar-los o fes algun test nou.</div>`;

  return `
    <h1>Historial i estadístiques</h1>
    <p class="subtitle">${allHist.length} tests registrats a aquest ordinador</p>
    ${viewTabs}
    <div class="stats-controls">
      <div class="tabs">${tabs}</div>
      ${topicSelect}
      <div class="tabs">${daysTabs}</div>
    </div>
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
      const pool = getTopicPool(topic.id);
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
      const questions = buildQuestionSet(getAllQuestionsPool(), counts);
      if(!questions.length){ alert("Selecciona almenys una pregunta."); return; }
      const secs = timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
      lastConfig = {type:"general", counts, timerOn};
      startQuiz(questions, {mode:"general", label:"Test general"}, secs);
    });
  }

  const startFinal = document.getElementById("btn-start-final");
  if(startFinal){
    startFinal.addEventListener("click", ()=>{
      const pool = getAllQuestionsPool();
      const n = Math.min(EXAM_TOTAL_Q, pool.length);
      const questions = shuffle(pool).slice(0,n).map(prepareQuestion);
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
        if(window.speechSynthesis) window.speechSynthesis.cancel();
        if(quiz && quiz.timerHandle) clearInterval(quiz.timerHandle);
        setView("dashboard");
      }
    });
  }

  const speakBtn = root.querySelector('[data-action="speak-question"]');
  if(speakBtn){
    speakBtn.addEventListener("click", speakQuestion);
  }

  const flagBtn = root.querySelector('[data-action="toggle-flag"]');
  if(flagBtn){
    flagBtn.addEventListener("click", toggleFlag);
  }

  const startLoopBtn = root.querySelector('[data-action="start-loop-mode"]');
  if(startLoopBtn){ startLoopBtn.addEventListener("click", startLoopMode); }

  const startRedemptionBtn = root.querySelector('[data-action="start-redemption-mode"]');
  if(startRedemptionBtn){ startRedemptionBtn.addEventListener("click", startRedemptionMode); }

  const startTfMassiveBtn = root.querySelector('[data-action="start-tfmassive-mode"]');
  if(startTfMassiveBtn){ startTfMassiveBtn.addEventListener("click", startTfMassiveMode); }

  const startTrapBtn = root.querySelector('[data-action="start-trap-mode"]');
  if(startTrapBtn){ startTrapBtn.addEventListener("click", startTrapMode); }

  root.querySelectorAll("[data-loop-pick]").forEach(el=>{
    el.addEventListener("click", ()=> pickLoopOption(parseInt(el.getAttribute("data-loop-pick"),10)));
  });

  const loopNextBtn = document.getElementById("btn-loop-next");
  if(loopNextBtn){
    loopNextBtn.addEventListener("click", ()=>{ if(!loopQuiz.locked) loopCheckAnswer(); else loopNext(); });
  }

  const speakLoopBtn = root.querySelector('[data-action="speak-loop-question"]');
  if(speakLoopBtn){
    speakLoopBtn.addEventListener("click", ()=>{
      if(!('speechSynthesis' in window)) return;
      const q = loopQuiz.current;
      const parts = [q.q];
      q.opts.forEach((o,i)=> parts.push(`Opció ${String.fromCharCode(65+i)}: ${o}`));
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(parts.join(". "));
      utter.lang = "ca-ES";
      window.speechSynthesis.speak(utter);
    });
  }

  const quitLoopBtn = root.querySelector('[data-action="quit-loop"]');
  if(quitLoopBtn){
    quitLoopBtn.addEventListener("click", ()=>{
      if(confirm("Segur que vols abandonar el bucle? El progrés de ratxa ja fet es conserva.")){
        if(window.speechSynthesis) window.speechSynthesis.cancel();
        setView("special-modes");
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
        const pool = getAllQuestionsPool();
        const n = Math.min(EXAM_TOTAL_Q, pool.length);
        const questions = shuffle(pool).slice(0,n).map(prepareQuestion);
        const secs = Math.round(EXAM_TOTAL_SEC * n / EXAM_TOTAL_Q);
        startQuiz(questions, {mode:"final", label:"Test final (examen)"}, secs);
      } else if(lastConfig.type==="general"){
        const questions = buildQuestionSet(getAllQuestionsPool(), lastConfig.counts);
        const secs = lastConfig.timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
        startQuiz(questions, {mode:"general", label:"Test general"}, secs);
      } else {
        const topic = TOPICS.find(t=>t.id===lastConfig.topicId);
        const pool = getTopicPool(topic.id);
        const questions = buildQuestionSet(pool, lastConfig.counts);
        const secs = lastConfig.timerOn ? Math.round(EXAM_TOTAL_SEC * questions.length / EXAM_TOTAL_Q) : null;
        startQuiz(questions, {mode:"topic", topicId:topic.id, label:`Tema: ${topic.name}`}, secs);
      }
    });
  }

  root.querySelectorAll("[data-stats-view]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsView: el.getAttribute("data-stats-view"), statsFilter: state.statsFilter, statsTopic: state.statsTopic, statsDays: state.statsDays});
    });
  });

  root.querySelectorAll("[data-error-filter]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsView:"errors", errorFilter: el.getAttribute("data-error-filter")});
    });
  });

  const clearErrBtn = document.getElementById("btn-clear-errors");
  if(clearErrBtn){
    clearErrBtn.addEventListener("click", ()=>{
      if(confirm("Esborrar tot el registre d'errors? Es perdrà el progrés de ratxes de dominis.")){
        clearErrorLog();
        render();
      }
    });
  }

  root.querySelectorAll("[data-stats-filter]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsView: state.statsView, statsFilter: el.getAttribute("data-stats-filter"), statsTopic: state.statsTopic, statsDays: state.statsDays});
    });
  });

  const statsTopicSelect = root.querySelector('[data-stats-topic]');
  if(statsTopicSelect){
    statsTopicSelect.addEventListener("change", (e)=>{
      setView("stats", {statsView: state.statsView, statsFilter: state.statsFilter, statsTopic: e.target.value, statsDays: state.statsDays});
    });
  }

  root.querySelectorAll("[data-stats-days]").forEach(el=>{
    el.addEventListener("click", ()=>{
      setView("stats", {statsView: state.statsView, statsFilter: state.statsFilter, statsTopic: state.statsTopic, statsDays: el.getAttribute("data-stats-days")});
    });
  });

  const themeToggle = root.querySelector('[data-action="toggle-theme"]');
  if(themeToggle){
    themeToggle.addEventListener("click", toggleTheme);
  }

  const pomodoroToggleBtn = root.querySelector('[data-action="pomodoro-toggle"]');
  if(pomodoroToggleBtn){
    pomodoroToggleBtn.addEventListener("click", pomodoroToggle);
  }
  const pomodoroResetBtn = root.querySelector('[data-action="pomodoro-reset"]');
  if(pomodoroResetBtn){
    pomodoroResetBtn.addEventListener("click", pomodoroReset);
  }

  const newCustomBtn = root.querySelector('[data-action="new-custom"]');
  if(newCustomBtn){
    newCustomBtn.addEventListener("click", ()=>{ customDraft = defaultDraft(); render(); });
  }

  const cancelCustomBtn = root.querySelector('[data-action="cancel-custom"]');
  if(cancelCustomBtn){
    cancelCustomBtn.addEventListener("click", ()=>{ customDraft = null; render(); });
  }

  const customTopicField = root.querySelector('[data-custom-field="topicId"]');
  if(customTopicField){
    customTopicField.addEventListener("change", e=>{ customDraft.topicId = e.target.value; });
  }

  const customTypeField = root.querySelector('[data-custom-field="type"]');
  if(customTypeField){
    customTypeField.addEventListener("change", e=>{
      const newType = e.target.value;
      const wasTf = customDraft.type==="tf";
      customDraft.type = newType;
      if(newType==="tf"){
        customDraft.opts = ["Vertader","Fals"];
        customDraft.exp = [customDraft.exp[0]||"", customDraft.exp[1]||""];
        customDraft.correct = customDraft.correct.filter(i=>i<2);
      } else if(wasTf){
        customDraft.opts = ["",""];
        customDraft.exp = ["",""];
        customDraft.correct = [];
      } else if(newType==="single" && customDraft.correct.length>1){
        customDraft.correct = [customDraft.correct[0]];
      }
      render();
    });
  }

  const customQField = root.querySelector('[data-custom-field="q"]');
  if(customQField){
    customQField.addEventListener("input", e=>{ customDraft.q = e.target.value; });
  }
  const customTrapField = root.querySelector('[data-custom-field="trap"]');
  if(customTrapField){
    customTrapField.addEventListener("input", e=>{ customDraft.trap = e.target.value; });
  }

  root.querySelectorAll('[data-opt-idx]').forEach(el=>{
    el.addEventListener("input", ()=>{
      const idx = parseInt(el.getAttribute("data-opt-idx"),10);
      customDraft.opts[idx] = el.value;
    });
  });
  root.querySelectorAll('[data-exp-idx]').forEach(el=>{
    el.addEventListener("input", ()=>{
      const idx = parseInt(el.getAttribute("data-exp-idx"),10);
      customDraft.exp[idx] = el.value;
    });
  });
  root.querySelectorAll('[data-correct-idx]').forEach(el=>{
    el.addEventListener("change", ()=>{
      const idx = parseInt(el.getAttribute("data-correct-idx"),10);
      if(customDraft.type==="multi"){
        const pos = customDraft.correct.indexOf(idx);
        if(el.checked && pos<0) customDraft.correct.push(idx);
        else if(!el.checked && pos>=0) customDraft.correct.splice(pos,1);
      } else {
        customDraft.correct = [idx];
      }
    });
  });

  const addOptBtn = root.querySelector('[data-action="add-opt"]');
  if(addOptBtn){
    addOptBtn.addEventListener("click", ()=>{
      customDraft.opts.push("");
      customDraft.exp.push("");
      render();
    });
  }
  root.querySelectorAll('[data-action="remove-opt"]').forEach(el=>{
    el.addEventListener("click", ()=>{
      const idx = parseInt(el.getAttribute("data-idx"),10);
      customDraft.opts.splice(idx,1);
      customDraft.exp.splice(idx,1);
      customDraft.correct = customDraft.correct.filter(i=>i!==idx).map(i=>i>idx?i-1:i);
      render();
    });
  });

  const saveCustomBtn = root.querySelector('[data-action="save-custom"]');
  if(saveCustomBtn){
    saveCustomBtn.addEventListener("click", ()=>{
      const d = customDraft;
      if(!d.q.trim()){ alert("Escriu l'enunciat de la pregunta."); return; }
      if(d.opts.some(o=>!o.trim())){ alert("Totes les opcions han de tenir text."); return; }
      if(d.exp.some(e=>!e.trim())){ alert("Cal escriure una explicació per a cada opció."); return; }
      if(!d.trap.trim()){ alert("Cal afegir una nota d'examen (trampa habitual)."); return; }
      if(d.type==="multi" && d.correct.length<1){ alert("Marca almenys una opció correcta."); return; }
      if(d.type!=="multi" && d.correct.length!==1){ alert("Marca exactament una opció correcta."); return; }
      addCustomQuestion({
        id: "c"+Date.now()+Math.random().toString(36).slice(2,7),
        topicId: d.topicId, type: d.type, q: d.q.trim(),
        opts: d.opts.map(o=>o.trim()), exp: d.exp.map(e=>e.trim()),
        correct: d.correct.slice(), trap: d.trap.trim(),
        createdAt: Date.now()
      });
      customDraft = null;
      render();
    });
  }

  root.querySelectorAll('[data-action="delete-custom"]').forEach(el=>{
    el.addEventListener("click", ()=>{
      if(confirm("Eliminar aquesta pregunta pròpia? Aquesta acció no es pot desfer.")){
        deleteCustomQuestion(el.getAttribute("data-id"));
        render();
      }
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
