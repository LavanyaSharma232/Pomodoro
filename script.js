let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");
let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let durationInput = document.getElementById("duration");

let minutes = 25;
let seconds = 0;
let countdown;
let isRunning = false;
let isPaused = false;

startButton.addEventListener("click", () => {
  if (!isRunning || isPaused) {
    isRunning = true;
    isPaused = false;
    countdown = setInterval(timer, 1000);
  }
});

pauseButton.addEventListener("click", () => {
  if (isRunning) {
    clearInterval(countdown);
    isPaused = true;
    isRunning = false;
  }
});

resetButton.addEventListener("click", () => {
  clearInterval(countdown);
  resetTimer();
});

durationInput.addEventListener("change", () => {
  let newDuration = parseInt(durationInput.value);
  minutes = newDuration;
  seconds = 0;
  updateDisplay();
  clearInterval(countdown);
  isRunning = false;
  isPaused = false;
});

function timer() {
  if (seconds === 0) {
    if (minutes === 0) {
      clearInterval(countdown);
      isRunning = false;
      alert("Pomodoro session completed!");
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }
  
  updateDisplay();
}

function resetTimer() {
  let newDuration = parseInt(durationInput.value);
  minutes = newDuration;
  seconds = 0;
  updateDisplay();
  isRunning = false;
  isPaused = false;
}

function updateDisplay() {
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
