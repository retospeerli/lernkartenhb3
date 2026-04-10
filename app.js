const STORAGE_KEY = "hb3_progress_v2";

const menuView = document.getElementById("menuView");
const cardsView = document.getElementById("cardsView");
const topicGrid = document.getElementById("topicGrid");
const homeBtn = document.getElementById("homeBtn");

const chapterKicker = document.getElementById("chapterKicker");
const chapterTitle = document.getElementById("chapterTitle");
const counter = document.getElementById("counter");
const statusPill = document.getElementById("statusPill");

const card = document.getElementById("card");
const qNumber = document.getElementById("qNumber");
const question = document.getElementById("question");
const options = document.getElementById("options");
const aNumber = document.getElementById("aNumber");
const aQuestion = document.getElementById("aQuestion");
const correct = document.getElementById("correct");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const prevBottom = document.getElementById("prevBottom");
const nextBottom = document.getElementById("nextBottom");

const markKnown = document.getElementById("markKnown");
const markReview = document.getElementById("markReview");
const clearMark = document.getElementById("clearMark");

const statAll = document.getElementById("statAll");
const statOpen = document.getElementById("statOpen");
const statKnown = document.getElementById("statKnown");
const statReview = document.getElementById("statReview");

let progress = loadProgress();
let chapters = buildChapters(QUESTIONS);
let currentChapter = null;
let currentFilter = "all";
let currentCards = [];
let currentIndex = 0;

renderMenu();
bindEvents();

function loadProgress() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch (error) {
    return {};
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function buildChapters(allQuestions) {
  const map = new Map();

  allQuestions.forEach((q) => {
    if (!map.has(q.chapter)) {
      map.set(q.chapter, {
        number: q.chapter,
        title: q.chapterTitle,
        cards: []
      });
    }
    map.get(q.chapter).cards.push(q);
  });

  return Array.from(map.values()).sort((a, b) => a.number - b.number);
}

function renderMenu() {
  topicGrid.innerHTML = "";

  chapters.forEach((chapter) => {
    const openCount = chapter.cards.filter((q) => !progress[q.nummer]).length;
    const knownCount = chapter.cards.filter((q) => progress[q.nummer] === "known").length;
    const reviewCount = chapter.cards.filter((q) => progress[q.nummer] === "review").length;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "topicCard";
    btn.innerHTML = `
      <div class="topicNum">${chapter.number}</div>
      <div class="topicTitle">${escapeHtml(chapter.title)}</div>
      <div class="topicMeta">
        <span>${chapter.cards.length} Karten</span>
        <span>Offen: ${openCount} · Gewusst: ${knownCount} · Noch üben: ${reviewCount}</span>
      </div>
    `;
    btn.addEventListener("click", () => openChapter(chapter.number));
    topicGrid.appendChild(btn);
  });
}

function bindEvents() {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  prevBtn.addEventListener("click", goPrev);
  nextBtn.addEventListener("click", goNext);
  prevBottom.addEventListener("click", goPrev);
  nextBottom.addEventListener("click", goNext);

  markKnown.addEventListener("click", () => setState("known"));
  markReview.addEventListener("click", () => setState("review"));
  clearMark.addEventListener("click", clearState);

  homeBtn.addEventListener("click", goHome);

  document.querySelectorAll(".filterBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filterBtn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.filter;
      currentIndex = 0;
      refreshCards();
      renderCurrentCard();
    });
  });

  document.addEventListener("keydown", (event) => {
    if (!cardsView.classList.contains("active")) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goPrev();
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goNext();
    } else if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      card.classList.toggle("flipped");
    } else if (event.key.toLowerCase() === "g") {
      event.preventDefault();
      setState("known");
    } else if (event.key.toLowerCase() === "u") {
      event.preventDefault();
      setState("review");
    } else if (event.key.toLowerCase() === "h") {
      event.preventDefault();
      goHome();
    }
  });
}

function openChapter(chapterNumber) {
  currentChapter = chapters.find((c) => c.number === chapterNumber);
  currentFilter = "all";
  currentIndex = 0;

  document.querySelectorAll(".filterBtn").forEach((b) => b.classList.remove("active"));
  document.querySelector('.filterBtn[data-filter="all"]').classList.add("active");

  menuView.classList.remove("active");
  cardsView.classList.add("active");
  homeBtn.hidden = false;

  refreshCards();
  renderCurrentCard();
}

function refreshCards() {
  if (!currentChapter) {
    currentCards = [];
    return;
  }

  currentCards = currentChapter.cards.filter((q) => {
    const state = progress[q.nummer];
    if (currentFilter === "all") return true;
    if (currentFilter === "open") return !state;
    if (currentFilter === "known") return state === "known";
    if (currentFilter === "review") return state === "review";
    return true;
  });

  if (currentIndex >= currentCards.length) {
    currentIndex = Math.max(0, currentCards.length - 1);
  }

  updateStats();
}

function updateStats() {
  if (!currentChapter) return;

  const all = currentChapter.cards.length;
  const open = currentChapter.cards.filter((q) => !progress[q.nummer]).length;
  const known = currentChapter.cards.filter((q) => progress[q.nummer] === "known").length;
  const review = currentChapter.cards.filter((q) => progress[q.nummer] === "review").length;

  statAll.textContent = `Alle: ${all}`;
  statOpen.textContent = `Offen: ${open}`;
  statKnown.textContent = `Gewusst: ${known}`;
  statReview.textContent = `Noch üben: ${review}`;
}

function renderCurrentCard() {
  if (!currentChapter) return;

  chapterKicker.textContent = `Thema ${currentChapter.number}`;
  chapterTitle.textContent = currentChapter.title;

  if (currentCards.length === 0) {
    qNumber.textContent = "";
    aNumber.textContent = "";
    question.textContent = "Keine Karten in diesem Filter.";
    aQuestion.textContent = "Keine Karten in diesem Filter.";
    options.innerHTML = "";
    correct.textContent = "";
    counter.textContent = "0 / 0";
    statusPill.textContent = "leer";
    statusPill.className = "pill status neutral";
    prevBtn.disabled = true;
    nextBtn.disabled = true;
    prevBottom.disabled = true;
    nextBottom.disabled = true;
    markKnown.disabled = true;
    markReview.disabled = true;
    clearMark.disabled = true;
    card.classList.remove("flipped");
    return;
  }

  markKnown.disabled = false;
  markReview.disabled = false;
  clearMark.disabled = false;

  const item = currentCards[currentIndex];
  qNumber.textContent = `Frage ${item.nummer}`;
  aNumber.textContent = `Frage ${item.nummer}`;
  question.textContent = item.question;
  aQuestion.textContent = item.question;
  correct.textContent = item.options[item.correctIndex];

  options.innerHTML = "";
  item.options.forEach((option, idx) => {
    const li = document.createElement("li");
    li.textContent = `${String.fromCharCode(97 + idx)}) ${option}`;
    options.appendChild(li);
  });

  counter.textContent = `${currentIndex + 1} / ${currentCards.length}`;
  updateStatusPill(item.nummer);

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === currentCards.length - 1;
  prevBottom.disabled = currentIndex === 0;
  nextBottom.disabled = currentIndex === currentCards.length - 1;

  card.classList.remove("flipped");
}

function updateStatusPill(questionNumber) {
  const state = progress[questionNumber];
  if (state === "known") {
    statusPill.textContent = "gewusst";
    statusPill.className = "pill status good";
  } else if (state === "review") {
    statusPill.textContent = "noch üben";
    statusPill.className = "pill status warn";
  } else {
    statusPill.textContent = "offen";
    statusPill.className = "pill status neutral";
  }
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    renderCurrentCard();
  }
}

function goNext() {
  if (currentIndex < currentCards.length - 1) {
    currentIndex += 1;
    renderCurrentCard();
  }
}

function setState(state) {
  if (!currentCards.length) return;
  const item = currentCards[currentIndex];
  progress[item.nummer] = state;
  saveProgress();
  refreshCards();
  renderMenu();
  renderCurrentCard();
}

function clearState() {
  if (!currentCards.length) return;
  const item = currentCards[currentIndex];
  delete progress[item.nummer];
  saveProgress();
  refreshCards();
  renderMenu();
  renderCurrentCard();
}

function goHome() {
  cardsView.classList.remove("active");
  menuView.classList.add("active");
  homeBtn.hidden = true;
  currentChapter = null;
  currentCards = [];
  currentIndex = 0;
  renderMenu();
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
