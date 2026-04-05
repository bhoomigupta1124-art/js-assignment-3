// ================= RUN ALL TASKS =================
function runTasks() {
  let output = "";

  // ================= TASK 1 =================
  // Find second largest WITHOUT sorting
  let arr = [23, 45, 67, 89, 12, 90, 44];

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  output += "Task 1 - Second Largest: " + secondLargest + "\n\n";


  // ================= TASK 2 (IMPROVED) =================
  // Return ALL unique elements from both arrays using Set
  function getUnique(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
  }

  let uniqueResult = getUnique([1, 2, 3], [2, 3, 4, 5]);

  output += "Task 2 - Unique Elements: " + uniqueResult.join(", ") + "\n\n";


  // ================= TASK 3 (IMPROVED FORMAT) =================
  let students = [
    { name: 'Alice', age: 22, scores: [78, 85, 92] },
    { name: 'Bob', age: 20, scores: [88, 90, 76] },
    { name: 'Charlie', age: 21, scores: [95, 80, 85] }
  ];

  let topStudent = "";
  let highestAvg = 0;

  students.forEach(student => {
    // Calculate average using reduce
    let sum = student.scores.reduce((a, b) => a + b, 0);
    let avg = sum / student.scores.length;

    output += `${student.name} Average: ${avg.toFixed(2)}\n`;

    if (avg > highestAvg) {
      highestAvg = avg;
      topStudent = student.name;
    }
  });

  // EXACT required format
  output += `\nTop Student: ${topStudent} with an average score of ${highestAvg.toFixed(2)}\n`;

  // Display output on screen
  document.getElementById("output").innerText = output;
}


// ================= TIMER (IMPROVED UI) =================
let time = 3600; // 1 hour
let interval;

function updateDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("timer").innerText = `${minutes}:${seconds}`;
}

function startTimer() {
  let timerEl = document.getElementById("timer");

  if (!interval) {
    interval = setInterval(() => {
      if (time > 0) {
        time--;
        updateDisplay();
        timerEl.classList.add("running");
        timerEl.classList.remove("paused");
      } else {
        clearInterval(interval);
        document.getElementById("message").innerText = "⏰ Time's up!";
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(interval);
  interval = null;

  let timerEl = document.getElementById("timer");
  timerEl.classList.remove("running");
  timerEl.classList.add("paused");
}

function resetTimer() {
  clearInterval(interval);
  interval = null;

  time = 3600;
  updateDisplay();

  let timerEl = document.getElementById("timer");
  timerEl.classList.remove("running", "paused");

  document.getElementById("message").innerText = "";
}

// Initial display
updateDisplay();