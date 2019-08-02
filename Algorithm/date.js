/*
 * Date check
 * given the month and year ( 0 < m < || 1900 < y < 2019 )
 * return the decimal format year based on current date up to 2 decimal ( 2.25 )
 * additional challenge: accept date ( 0 < d < 31 )
 * will not given an invaild date for a month
 */

var currentdate = new Date();
var pastdate = new Date(2009, 5, 8);

var timediff = currentdate - pastdate;
// milliseconds = 320363126582

let seconds = Math.floor(timediff / 1000);
console.log(seconds); // 320363126

let minute = Math.floor(seconds / 60);
console.log(minute); // 5339385

let hour = Math.floor(minute / 60);
console.log(hour); // 88989

let days = Math.floor(hour / 24);
console.log(days); // 3707

let years = Math.floor(days / 365);
console.log(years); // 10

var result = years.toFixed(2); // 10.00

