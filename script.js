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
