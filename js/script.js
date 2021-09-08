// Adding zero in front of number
function addZero(input) {
  return input < 10 ? `0${input}` : input;
}
  
function displayCurrentTime() {
  var date = new Date();
  const currentTime = document.querySelector('.current-time');
  var h = addZero(date.getHours());
  var m = addZero(date.getMinutes());
  var s = addZero(date.getSeconds());
  currentTime.innerHTML = `${h}:${m}:${s}`;
}

// Declaring timer variables
let hour = 0;
let minute = 0;
let second = 0;
let cron;

// Declaring component variables
const participantsTime = document.getElementsByClassName('participant-time');
const stopwatchTime = document.querySelector('.timer h1');

// Start timer
function start() {
  clearInterval(cron);
  cron = setInterval(() => { timer(); }, 1000);
}

// Reset timer
function reset() {
  clearInterval(cron);
  hour = 0;
  minute = 0;
  second = 0;
  
  stopwatchTime.innerText = '00:00:00';
  
  for (let item of participantsTime) {
    item.innerText = '00:00:00';
  }
  
}

function timer() {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    minute = 0;
    hour++;
  }

  stopwatchTime.innerText = `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
  
  for (let item of participantsTime) {
    if(item.classList.length == 1) {
      item.innerText = `${addZero(hour)}:${addZero(minute)}:${addZero(second)}`;
    }
  }
 
}
