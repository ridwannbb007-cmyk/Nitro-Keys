/* ===========================
      NitroKeys v1.0
=========================== */

const paragraph = document.getElementById("paragraph");
const typingBox = document.getElementById("typingBox");

const timer = document.getElementById("timer");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");
const mistakes = document.getElementById("mistakes");

const progressBar = document.getElementById("progressBar");
const nitroFill = document.getElementById("nitroFill");

const playerCar = document.getElementById("playerCar");
const aiCar = document.getElementById("aiCar");

const restart = document.getElementById("restart");
const startRace = document.getElementById("startRace");

const popup = document.getElementById("resultPopup");

const finalWPM = document.getElementById("finalWPM");
const finalAccuracy = document.getElementById("finalAccuracy");
const finalMistakes = document.getElementById("finalMistakes");

const playAgain = document.getElementById("playAgain");
const engineSound = new Audio(
"assets/audio/wings_of_freedom-f1-racing-car-sound-430459.mp3"
);

engineSound.loop = true;
engineSound.volume = 0.3;
let selectedText = "";
let timeLeft = 60;

let gameStarted = false;
let countdownStarted = false;
let interval = null;

let errorCount = 0;

function loadParagraph(){

selectedText =
paragraphs[
Math.floor(Math.random()*paragraphs.length)
];

paragraph.innerText = selectedText;

}

loadParagraph();

startRace.onclick = ()=>{

document.getElementById("race").scrollIntoView({

behavior:"smooth"

});

typingBox.focus();

};

function startTimer(){

interval = setInterval(()=>{

timeLeft--;

timer.innerText = timeLeft;

if(timeLeft<=0){

finishRace();

}

},1000);

}
typingBox.addEventListener("input",()=>{

if(!countdownStarted){

countdownStarted=true;

startTimer();

}

let typed=typingBox.value;

errorCount=0;

for(let i=0;i<typed.length;i++){

if(typed[i]!==selectedText[i]){

errorCount++;

}

}

mistakes.innerText=errorCount;

let correct=typed.length-errorCount;

let acc=typed.length?
Math.round((correct/typed.length)*100):100;

accuracy.innerText=acc+"%";

let minutes=(60-timeLeft)/60;

let words=typed.trim().split(/\s+/).filter(Boolean).length;

let currentWPM=minutes>0?
Math.round(words/minutes):0;

wpm.innerText=currentWPM;

let progress=(typed.length/selectedText.length)*100;

if(progress>100){

progress=100;

}

progressBar.style.width=progress+"%";

nitroFill.style.width=progress+"%";

playerCar.style.left=progress+"%";

let aiProgress=Math.min(progress*0.9+(Math.random()*4),100);

aiCar.style.left=aiProgress+"%";

if(typed===selectedText){

finishRace();

}

});
/* ===========================
      Finish Race
=========================== */

function finishRace(){

clearInterval(interval);

typingBox.disabled=true;

popup.style.display="flex";

finalWPM.innerText="⚡ WPM : "+wpm.innerText;

finalAccuracy.innerText="🎯 Accuracy : "+accuracy.innerText;

finalMistakes.innerText="❌ Mistakes : "+mistakes.innerText;

}

/* ===========================
      Restart Game
=========================== */

function resetGame(){

clearInterval(interval);

interval=null;

timeLeft=60;

gameStarted=false;

countdownStarted=false;

errorCount=0;

typingBox.disabled=false;

typingBox.value="";

typingBox.focus();

timer.innerText="60";

wpm.innerText="0";

accuracy.innerText="100%";

mistakes.innerText="0";

progressBar.style.width="0%";

nitroFill.style.width="0%";

playerCar.style.left="0%";

aiCar.style.left="0%";

popup.style.display="none";

loadParagraph();

}

restart.onclick=resetGame;

playAgain.onclick=resetGame;

/* ===========================
      Music Button
=========================== */

const musicBtn=document.getElementById("musicBtn");

let musicOn=false;

musicBtn.onclick=function(){

musicOn=!musicOn;

if(musicOn){

musicBtn.innerText="🔇 Mute";

}else{

musicBtn.innerText="🎵 Music";

}

};
