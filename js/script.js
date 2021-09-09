function displayCurrentTime() {
  let date = new Date();
  const currentTime = document.querySelector('.current-time');
  let h = date.getHours().toString().padStart(2, "0");
  let m = date.getMinutes().toString().padStart(2, "0");
  let s = date.getSeconds().toString().padStart(2, "0");
  currentTime.innerHTML = `${h}:${m}:${s}`;
}

// Declaring timer variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Declaring component variables
const participantsTime = document.getElementsByClassName('participant-time');
const stopwatchTime = document.querySelector('.timer h1');

// Start timer
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    timeToDisplay(elapsedTime);
  }, 10);
}

// Pause timer
function pause() {
  clearInterval(timerInterval);
}

// Reset timer
function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  
  stopwatchTime.innerText = '00:00.00';
  
  for (let item of participantsTime) {
    item.innerText = '00:00.00';
  }
  
}

function timeToDisplay(time) {

  let diffInHrs = time / 3600000;
  hour = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hour) * 60;
  minute = Math.floor(diffInMin);

  let diffInSec = (diffInMin - minute) * 60;
  second = Math.floor(diffInSec);

  let diffInMs = (diffInSec - second) * 100;
  milisecond = Math.floor(diffInMs);

  let formattedMM = minute.toString().padStart(2, "0");
  let formattedSS = second.toString().padStart(2, "0");
  let formattedMS = milisecond.toString().padStart(2, "0");

  stopwatchTime.innerText = `${formattedMM}:${formattedSS}.${formattedMS}`;
  
  for (let item of participantsTime) {
    if(item.classList.length == 1) {
      item.innerText = `${formattedMM}:${formattedSS}.${formattedMS}`;
    }
  }

}
