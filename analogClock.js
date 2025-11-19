/* Author: Dominik; 19.11.2025; With this file you can show in the browser the actual time, 
respectively rotate the hands for the clock. */

function runningClock() {

  /* The time right now. */
  let time = new Date();
  let currentHour = time.getHours();
  let currentMin = time.getMinutes();
  let currentSec = time.getSeconds();

  /* Makes the time in degrees. */
  hourPointer = currentHour * 30 + 180;
  minPointer = currentMin * 6 + 180 + currentSec * 0.1;
  secPointer = currentSec * 6 + 180;

  /* Makes the hands rotate. */
  document.querySelector('.hour-hand').style.transform = `rotate(${hourPointer}deg)`;
  document.querySelector('.min-hand').style.transform = `rotate(${minPointer}deg)`;
  document.querySelector('.second-hand').style.transform = `rotate(${secPointer}deg)`;

}

/* Make the clock running. */
setInterval(runningClock, 1000);
runningClock();
