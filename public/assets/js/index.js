const btn = document.getElementsByName("A").length === 1 ? document.getElementsByName("A")[0] : document.getElementsByName("A");

// Get the input fields and buttons
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

// Get the countdown display element
const countdownDisplay = document.getElementById("timer-countdown");

// Initialize the countdown timer
let countdown;

// Start the countdown timer
function startCountdown() {
  // Disable the input fields and start button
  hoursInput.disabled = true;
  minutesInput.disabled = true;
  secondsInput.disabled = true;
  startButton.disabled = true;

  // Get the user input values
  const hours = parseInt(hoursInput.value);
  const minutes = parseInt(minutesInput.value);
  const seconds = parseInt(secondsInput.value);

  // Calculate the total number of seconds
  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  // Set the countdown timer interval
  countdown = setInterval(() => {
    // Calculate the remaining time
    const remainingSeconds = totalSeconds - 1;

    // Calculate the hours, minutes, and seconds from the remaining time
const hours = Math.floor(remainingSeconds / 3600);
const minutes = Math.floor((remainingSeconds % 3600) / 60);
const seconds = remainingSeconds % 60;

// Format the remaining time
const formattedTime = `${String(hours).padStart(2, "0")}:${String(
  minutes
).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

// Update the countdown display
countdownDisplay.textContent = formattedTime;

// Check if the countdown is finished
if (remainingSeconds === 0) {
  clearInterval(countdown);
  countdownDisplay.textContent = "00:00:00";
  hoursInput.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
  startButton.disabled = false;
  alert("Countdown finished!");
}

// Decrement the total number of seconds
totalSeconds--;
}, 1000);
}

// Stop the countdown timer
function stopCountdown() {
clearInterval(countdown);
hoursInput.disabled = false;
minutesInput.disabled = false;
secondsInput.disabled = false;
startButton.disabled = false;
}

// Reset the countdown timer
function resetCountdown() {
clearInterval(countdown);
countdownDisplay.textContent = "00:00:00";
hoursInput.value = "";
minutesInput.value = "";
secondsInput.value = "";
hoursInput.disabled = false;
minutesInput.disabled = false;
secondsInput.disabled = false;
startButton.disabled = false;
}

// Add event listeners to the buttons
startButton.addEventListener("click", startCountdown);
stopButton.addEventListener("click", stopCountdown);
resetButton.addEventListener("click", resetCountdown);

document.onreadystatechange = () => {
    if(document.readyState === `complete`) {
        console.log(`The document is ready`);
        console.log(btn);
    }
};