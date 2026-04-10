// ===== DATEN (Beispiel – du kannst ALLE ersetzen) =====
const QUESTIONS = [
  {
    nummer:"1.1",
    chapter:1,
    chapterTitle:"Mathematik",
    question:"0,042 A entspricht",
    options:["42 x 10-1 A","42 x 10-2 A","42 x 10-3 A","42 x 10^3 A"],
    correctIndex:2
  },
  {
    nummer:"1.2",
    chapter:1,
    chapterTitle:"Mathematik",
    question:"0,00042 A entspricht",
    options:["420 x 10-5 A","420 x 10-6 A","420 x 10-5 A","42 x 10-6 A"],
    correctIndex:1
  }
];

// ===== STRUKTUR =====
const menuView = document.getElementById("menuView");
const cardsView = document.getElementById("cardsView");
const topicGrid = document.getElementById("topicGrid");

const card = document.getElementById("card");
const question = document.getElementById("question");
const options = document.getElementById("options");
const correct = document.getElementById("correct");

const counter = document.getElementById("counter");

let current = 0;

// ===== MENÜ =====
function buildMenu(){
  const chapters = {};

  QUESTIONS.forEach(q=>{
    if(!chapters[q.chapter]){
      chapters[q.chapter]={
        title:q.chapterTitle,
        list:[]
      };
    }
    chapters[q.chapter].list.push(q);
  });

  Object.keys(chapters).forEach(ch=>{
    const div = document.createElement("div");
    div.className="topic";
    div.innerText = chapters[ch].title;

    div.onclick = ()=>{
      start(chapters[ch].list);
    };

    topicGrid.appendChild(div);
  });
}

let activeList = [];

function start(list){
  activeList = list;
  current = 0;
  menuView.classList.remove("active");
  cardsView.classList.add("active");
  show();
}

// ===== KARTE =====
function show(){
  const q = activeList[current];

  question.innerText = q.question;
  options.innerHTML = "";

  q.options.forEach(o=>{
    const li=document.createElement("li");
    li.innerText=o;
    options.appendChild(li);
  });

  correct.innerText = q.options[q.correctIndex];

  counter.innerText = (current+1) + " / " + activeList.length;

  card.classList.remove("flipped");
}

// ===== EVENTS =====
card.onclick = ()=> card.classList.toggle("flipped");

document.getElementById("prevBtn").onclick = ()=>{
  if(current>0){current--; show();}
};

document.getElementById("nextBtn").onclick = ()=>{
  if(current<activeList.length-1){current++; show();}
};

// ===== START =====
buildMenu();
