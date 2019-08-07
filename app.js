// Get days, hours, min, sec and update that every 1 sec
const timerDayEl = document.querySelector('.timer__day');
const timerHourEl = document.querySelector('.timer__hour');
const timerMinEl = document.querySelector('.timer__min');
const timerSecEl = document.querySelector('.timer__sec');

// need set interval function to update timer every 1 sec
// first need to figure out time difference between now and end date
// parse it and format into days, hours, min, sec

function getTimeDifference(start, end) {
  let milliseconds = Math.floor(end - start); // future end - current
  let seconds = Math.floor(milliseconds / 1000);// convert time in sec
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);
  return `${days} ${hours} ${minutes} ${seconds}`;
}

const startDate = new Date();
const endDate = new Date("August 08, 2019 07:30");

console.log(getTimeDifference(startDate, endDate));
//console.log(new Date().getUTCFullYear()); // how u create a new date
// .get has a lot of options. Can just do console.log(new Date();
// pass custom params:
//console.log(new Date("April 26, 2018 07:30"));
// console.log(new Date().getTime()); // get time is current tiem in ms since 1970
