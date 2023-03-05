// const btn = document.getElementsByName("A").length === 1 ? document.getElementsByName("A")[0] : document.getElementsByName("A");

const startBtn = document.getElementById("start");


/***
 * 
 ***/

// Get the input fields and buttons
const timerInput = document.getElementById("timer-input");
const hoursInput = document.getElementById("hours-input");
const minutesInput = document.getElementById("minutes-input");
const secondsInput = document.getElementById("seconds-input");

// Get the countdown display element
const countdownDisplay = document.getElementById("timer-countdown");

// Initialize the countdown timer
let countdown;

// Get total seconds for countdown timer
function getCountdown(hoursInput, minutesInput, secondsInput) {
  console.log(hoursInput.value, minutesInput.value, secondsInput.value);
  
  // Total number of seconds
  countdown = Number(hoursInput.value) * 3600 + Number(minutesInput.value) * 60 + Number(secondsInput.value);
  createTimerCountdownEl(countdown);


}

const createTimerCountdownEl = (countdown) => {
  console.log(countdown);
  countdownDisplay.classList.remove('hide');
  // Hours
  let hourDisplay = document.createElement('div');
  hourDisplay.setAttribute('name', 'hours');
  hourDisplay.innerText = (Math.floor(countdown / 3600) > 9 ? Math.floor(countdown / 3600) : `0${Math.floor(countdown / 3600)}`);

  // Minutes
  let minDisplay = document.createElement('div');
  minDisplay.setAttribute('name', 'minutes');
  minDisplay.innerText = (Math.floor((countdown % 3600) / 60) > 9 ? Math.floor((countdown % 3600) / 60) : `0${Math.floor((countdown % 3600) / 60)}`);

  // Seconds
  let secDisplay = document.createElement('div');
  secDisplay.setAttribute('name', 'seconds');
  secDisplay.innerText = (countdown > 9 ? countdown : `0${countdown}`);

  timerInput.classList.add('hide');
  countdownDisplay.append(hourDisplay, minDisplay, secDisplay);

  setInterval(updateTimer(countdown, hourDisplay, minDisplay, secDisplay), 1000);
}

// create updateTimer function
function updateTimer(countdown, hourDisplay, minDisplay, secDisplay) {
  if(countdown > 0) {
    countdown--;
    hourDisplay.innerText = (Math.floor(countdown / 3600) > 9 ? Math.floor(countdown / 3600) : `0${Math.floor(countdown / 3600)}`);
    minDisplay.innerText = (Math.floor(countdown / 3600 * 60) > 9 ? Math.floor(countdown / 60) : `0${Math.floor(countdown / 60)}`);
    secDisplay.innerText = (countdown > 9 ? countdown : `0${countdown}`);
  }
}

// Add event listeners to the buttons
startBtn.addEventListener("click", () => {
  getCountdown(hoursInput, minutesInput, secondsInput);
});


document.onreadystatechange = () => {
    if(document.readyState === `complete`) {
        console.log(`The document is ready`);
        // console.log(btn);
    }
};