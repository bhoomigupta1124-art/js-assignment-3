let time = 3600; // 1 hour = 3600 seconds
let interval;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}

function startTimer() {
  if (!interval) {
    interval = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
      } else {
        clearInterval(interval);
        document.getElementById("message").innerText = "Time's up!";
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  clearInterval(interval);
  interval = null;
  time = 3600;
  updateDisplay();
  document.getElementById("message").innerText = "";
}

// Initial display
updateDisplay();