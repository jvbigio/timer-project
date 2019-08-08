// Get days, hours, min, sec and update that every 1 sec
const timerDayEl = document.querySelector('.timer__day');
const timerHourEl = document.querySelector('.timer__hour');
const timerMinEl = document.querySelector('.timer__min');
const timerSecEl = document.querySelector('.timer__sec');

// need set interval function to update timer every 1 sec
// first need to figure out time difference between now and end date
// parse it and format into days, hours, min, sec

function getTimeDifference(start, end) {
  let milliseconds = Math.floor(end - start);
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  hours = hours - (days * 24);
  minutes = minutes - (days * 24 * 60) - (hours * 60);
  seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);

  if(days < 10){days = "0" + days;}
  if(hours < 10){hours = "0" + hours;}
  if(minutes < 10){minutes = "0" + minutes;}
  if(seconds < 10){seconds = "0" + seconds;}
  return {
    rDays: days,
    rHours: hours,
    rMinutes: minutes,
    rSeconds: seconds
  }
}

let timer = setInterval(function() {
  const startDate = new Date();
  const endDate = new Date("August 08 2019 16:38");

  let timeDifferenceObj = getTimeDifference(startDate, endDate);
  timerDayEl.textContent = timeDifferenceObj.rDays;
  timerHourEl.textContent = timeDifferenceObj.rHours;
  timerMinEl.textContent = timeDifferenceObj.rMinutes;
  timerSecEl.textContent = timeDifferenceObj.rSeconds;
}, 1000)

// console.log(getTimeDifference(startDate, endDate));
//console.log(new Date().getUTCFullYear()); // how u create a new date
// .get has a lot of options. Can just do console.log(new Date();
// pass custom params:
//console.log(new Date("April 26, 2018 07:30"));
// console.log(new Date().getTime()); // get time is current tiem in ms since 1970
// challenge: understand the calculations for converting lines 18-19, etc.
// challenge: fix oval shapes for 1 digit numbers. So all circles are same
// so if 1 day, have 01, instead of 1. Seconds 01 instead of 1, etc.
// also, how/when should you stop the timer, when you reach the date. So
// check if reached date using timeDifferenceObj, and check properties to see
// if all are zeros
// use timeDifferenceObj 
// if (timeDifferenceObj.rDays === 0 && timeDifferenceObj.rHours === 0 && timeDifferenceObj.rMinutes === 0 && timeDifferenceObj.rSeconds === 0) {
  //   timeDifferenceObj.stop();
  //   return;
  // }