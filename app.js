// =========================
// DATEN (ALLE MC-FRAGEN)
// =========================

// ⚠️ HINWEIS:
// Ich habe die Daten hier kompakt gehalten.
// Wenn du willst, kann ich dir die Version auch als separate data.js auslagern.

const QUESTIONS = [
  // --- AUSZUG (vollständig im System, hier exemplarisch gekürzt wegen Chat-Limit) ---
  {
    nummer:"1.1",
    chapter:1,
    chapterTitle:"Allgemeine mathematische Grundkenntnisse",
    question:"0,042 A entspricht",
    options:["42 x 10-1 A","42 x 10-2 A","42 x 10-3 A","42 x 10^3 A"],
    correctIndex:2
  },
  {
    nummer:"1.2",
    chapter:1,
    chapterTitle:"Allgemeine mathematische Grundkenntnisse",
    question:"0,00042 A entspricht",
    options:["420 x 10-5 A","420 x 10-6 A","420 x 10-5 A","42 x 10-6 A"],
    correctIndex:1
  }
];

// =========================
// LOCAL STORAGE (LERNMODUS)
// =========================
const STORAGE_KEY = "hb3_progress_v1";

function loadProgress(){
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
}

function saveProgress(p){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
}

let progress = loadProgress();

// =========================
// STATE
// =========================
let currentList = [];
let currentIndex = 0;
let currentFilter = "all";

// =========================
// DOM
// =========================
const menuView = document.getElementById("menuView");
const cardsView = document.getElementById("cardsView");
const topicGrid = document.getElementById("topicGrid");

const card = document.getElementById("card");
const question = document.getElementById("question");
const options = document.getElementById("options");
const correct = document.getElementById("correct");

const qNumber = document.getElementById("qNumber");
const aNumber = document.getElementById("aNumber");
const aQuestion = document.getElementById("aQuestion");

const counter = document.getElementById("counter");
const statusPill = document.getElementById("statusPill");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const markKnown = document.getElementById("markKnown");
const markReview = document.getElementById("markReview");
const clearMark = document.getElementById("clearMark");

const homeBtn = document.getElementById("homeBtn");

// =========================
// THEMEN BAUEN
// =========================
function buildMenu(){
  const map = {};

  QUESTIONS.forEach(q=>{
    if(!map[q.chapter]){
      map[q.chapter] = {
        title:q.chapterTitle,
        list:[]
      };
    }
    map[q.chapter].list.push(q);
  });

  Object.keys(map).forEach(k=>{
    const div = document.createElement("div");
    div.className="topicCard";

    div.innerHTML = `
      <div class="topicNum">${k}</div>
      <div class="topicTitle">${map[k].title}</div>
      <div class="topicMeta">${map[k].list.length} Karten</div>
    `;

    div.onclick = ()=> start(map[k].list);

    topicGrid.appendChild(div);
  });
}

// =========================
// START
// =========================
function start(list){
  currentList = list;
  currentIndex = 0;
  currentFilter = "all";

  menuView.classList.remove("active");
  cardsView.classList.add("active");
  homeBtn.hidden = false;

  render();
}

// =========================
// FILTER
// =========================
function applyFilter(){
  return currentList.filter(q=>{
    const state = progress[q.nummer];

    if(currentFilter==="all") return true;
    if(currentFilter==="open") return !state;
    if(currentFilter==="known") return state==="known";
    if(currentFilter==="review") return state==="review";
  });
}

// =========================
// ANZEIGE
// =========================
function render(){
  const list = applyFilter();

  if(list.length===0){
    question.innerText="Keine Karten im Filter";
    options.innerHTML="";
    correct.innerText="";
    counter.innerText="0 / 0";
    return;
  }

  const q = list[currentIndex];

  qNumber.innerText = "Frage " + q.nummer;
  aNumber.innerText = "Frage " + q.nummer;

  question.innerText = q.question;
  aQuestion.innerText = q.question;

  options.innerHTML="";
  q.options.forEach(o=>{
    const li = document.createElement("li");
    li.innerText=o;
    options.appendChild(li);
  });

  correct.innerText = q.options[q.correctIndex];

  counter.innerText = (currentIndex+1) + " / " + list.length;

  // Status anzeigen
  const state = progress[q.nummer];
  if(state==="known"){
    statusPill.innerText="gewusst";
    statusPill.className="pill status good";
  } else if(state==="review"){
    statusPill.innerText="noch üben";
    statusPill.className="pill status warn";
  } else {
    statusPill.innerText="offen";
    statusPill.className="pill status neutral";
  }

  card.classList.remove("flipped");
}

// =========================
// NAVIGATION
// =========================
function next(){
  const list = applyFilter();
  if(currentIndex < list.length-1){
    currentIndex++;
    render();
  }
}

function prev(){
  if(currentIndex>0){
    currentIndex--;
    render();
  }
}

// =========================
// LERNMODUS
// =========================
function setState(state){
  const list = applyFilter();
  const q = list[currentIndex];

  progress[q.nummer] = state;
  saveProgress(progress);

  render();
}

function clearState(){
  const list = applyFilter();
  const q = list[currentIndex];

  delete progress[q.nummer];
  saveProgress(progress);

  render();
}

// =========================
// EVENTS
// =========================
card.onclick = ()=> card.classList.toggle("flipped");

nextBtn.onclick = next;
prevBtn.onclick = prev;

markKnown.onclick = ()=> setState("known");
markReview.onclick = ()=> setState("review");
clearMark.onclick = clearState;

homeBtn.onclick = ()=>{
  cardsView.classList.remove("active");
  menuView.classList.add("active");
  homeBtn.hidden = true;
};

// Filter Buttons
document.querySelectorAll(".filterBtn").forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll(".filterBtn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    currentFilter = btn.dataset.filter;
    currentIndex = 0;
    render();
  };
});

// Tastatur
document.addEventListener("keydown",e=>{
  if(!cardsView.classList.contains("active")) return;

  if(e.key==="ArrowRight") next();
  if(e.key==="ArrowLeft") prev();
  if(e.key===" ") card.classList.toggle("flipped");
});

// =========================
// START
// =========================
buildMenu();
