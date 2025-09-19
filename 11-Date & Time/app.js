// let currentDate = new Date();
// console.log(currentDate);
// console.log(currentDate.toString());

// console.log(currentDate.getDate());
// console.log(currentDate.getMonth());
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());
// console.log(currentDate.getMilliseconds());
// console.log(currentDate.getTime());



// let currentDate = new Date().getTime();
// let birthdata = new Date("July 10, 2005 13:25:00").getTime()
// let remainingMilliseconds = currentDate - birthdata
// let calculateAge = Math.floor(remainingMilliseconds / 1000 / 60 / 60 / 24 / 365)

// console.log(calculateAge);

// function changePage(){
//     localStorage.setItem("calculatedAge" , JSON.stringify(calculateAge))
//     window.location = "about.html"
//     console.log(window.location);   
// }






// Assignment


// 1. Custom Date Formatter
// Write a function that takes a Date object and returns a formatted string like:
// "Saturday, 9 August 2025".

// function customDate(date) {

//    let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
//    let monthNames = ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "Octobar" , "November" , "December"]

//    const theDay = dayNames[date.getDay()];
//    const theDate = date.getDate();
//    const theMonth = monthNames[date.getMonth()];
//    const theYear = date.getFullYear();

//    return `${theDay}, ${theDate} ${theMonth} ${theYear}`
// }
// console.log(customDate(new Date("2025-08-09")));


// 2. Elapsed Time in Minutes
// Given two timestamps, calculate how many minutes have passed between them.

// function elapsedTime(timeStart , timeEnd) {
//    let start = new Date (timeStart);
//    let end = new Date (timeEnd);

//    const diffMs = end - start;

//    const diffMin = Math.floor(diffMs / 1000 / 60);

//    return diffMin;
// }

// console.log(elapsedTime("2025-09-05T11:20:00" , "2025-09-05T18:00:00"));


// 3. Age Calculator from Full Birthdate
// Create a function that accepts a full birthdate (YYYY-MM-DD) and calculates the age in
// years, months, and days.

// function calculateAge(birthdate) {
//   const today = new Date();
//   const birth = new Date(birthdate);

//   let years = today.getFullYear() - birth.getFullYear();
//   let months = today.getMonth() - birth.getMonth();
//   let days = today.getDate() - birth.getDate();

//   if (days < 0) {
//     months -= 1;
//     const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
//     days += prevMonth.getDate();
//   }

//   if (months < 0) {
//     years -= 1;
//     months += 12;
//   }

//   return `${years} years, ${months} months, ${days} days`;
// }

// console.log(calculateAge("2001-09-25"));


// 4. Get First Day of Current Month
// Return the date of the first day of the current month.

// function getFirstDay() {
//   const today = new Date();
//   return new Date(today.getFullYear(), today.getMonth(), 1);
// }

// console.log(getFirstDay());


// 5. Get Last Day of Current Month
// Write a function that returns the last date (e.g., 31, 30, or 28/29) of the current month.

// function getLastDay() {
//   const today = new Date();
//   const lastDay = new Date(today.getFullYear(), today.getMonth() + 1 , 0);
//   return lastDay.getDate()
// }

// console.log(getLastDay());


// 6. Human-Friendly "Time Ago"
// Create a function that returns strings like:
// ○ "Just now"
// ○ "5 minutes ago"
// ○ "2 hours ago"
// ○ "1 day ago" based on a past timestamp.


// function timeAgo(pastTimestamp) {
//   const now = new Date();
//   const past = new Date(pastTimestamp);
//   const diffMs = now - past;

//   const seconds = Math.floor(diffMs / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);

//   if (seconds < 60) {
//     return "Just now";
//   } else if (minutes < 60) {
//     return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
//   } else if (hours < 24) {
//     return `${hours} hour${hours > 1 ? "s" : ""} ago`;
//   } else {
//     return `${days} day${days > 1 ? "s" : ""} ago`;
//   }
// }

// console.log(timeAgo(new Date(Date.now() - 50 * 1000)));
// console.log(timeAgo(new Date(Date.now() - 15 * 60 * 1000)));


// 7. Countdown Timer
// Create a simple countdown function to a future date (e.g., New Year), showing days,
// hours, minutes, seconds remaining.

// function countdownTimer(targetDate) {
//   const target = new Date(targetDate);

//   function updateTimer() {
//     const now = new Date();
//     const diffMs = target - now;

//     if (diffMs <= 0) {
//       console.log("Time's up");
//       clearInterval(timerInterval);
//       return;
//     }

//     const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

//     console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
//   }

//   updateTimer();
//   const timerInterval = setInterval(updateTimer, 1000);
// }

// countdownTimer("2025-10-01T00:00:00");


// 8. Time Difference in Hours and Minutes
// Given two dates, return the difference in hours and minutes, like: "3 hours 25
// minutes".

// function timeDifference(date1, date2) {
//   const start = new Date(date1);
//   const end = new Date(date2);

//   let diffMs = Math.abs(end - start);

//   const hours = Math.floor(diffMs / (1000 * 60 * 60));
//   const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

//   return `${hours} hour${hours !== 1 ? "s" : ""} ${minutes} minute${minutes !== 1 ? "s" : ""}`;
// }

// console.log(timeDifference("2025-09-15T05:00:00", "2025-09-15T09:45:00"));


// 9. Check if Date is Weekend or Weekday
// Write a function that returns "Weekend" or "Weekday" based on a given date string.

// function checkDay(dateStr) {
//   const date = new Date(dateStr);
//   const day = date.getDay(); 

//   if (day === 0 || day === 6) {
//     return "Weekend";
//   } else {
//     return "Weekday";
//   }
// }

// console.log(checkDay("2025-09-14"));
// console.log(checkDay("2025-09-16"));


// 10. Compare Birthdays
// Ask for two people’s birthdates and return who is older and by how many years/days.

// function compareBirthdays(birthdate1, birthdate2) {
//   const date1 = new Date(birthdate1);
//   const date2 = new Date(birthdate2);

//   let older, younger;
//   if (date1 < date2) {
//     older = "Person 1";
//     younger = "Person 2";
//   } else if (date2 < date1) {
//     older = "Person 2";
//     younger = "Person 1";
//   } else {
//     return "Both are the same age!";
//   }

//   let diffMs = Math.abs(date2 - date1);

//   const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
//   const years = Math.floor(days / 365);
//   const remainingDays = days % 365;

//   return `${older} is older than ${younger} by ${years} years and ${remainingDays} days.`;
// }

// console.log(compareBirthdays("2000-05-15", "2002-08-20"));


// 11. Recurring Alarm Checker
// Given a day and time (e.g., "Monday 08:00"), check if the current date/time matches
// that schedule.


// function alarmTime(schedule) {
//   const [dayName, time] = schedule.split(" ");

//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   const now = new Date();
//   const currentDay = days[now.getDay()];

//   let hours = now.getHours();
//   let minutes = now.getMinutes();

//   if (hours < 10) hours = "0" + hours; 
//   if (minutes < 10) minutes = "0" + minutes;

//   const currentTime = `${hours}:${minutes}`;

//   return currentDay === dayName && currentTime === time;
// }

// console.log(alarmTime("Monday 08:00"));


// 12. Date Validator
// Write a function that checks whether a given date string is a valid date (e.g., using
// Date.parse() or new Date()).


// function validDate(dateStr) {
//   const date = new Date(dateStr);

//   if (isNaN(date.getTime())) {
//     return false;
//   }
//   return true;
// }

// console.log(validDate("2025-09-15"));
// console.log(validDate("hello"));  


// 13. Custom Relative Date Formatter
// Given a timestamp, format it as:
// ● "Today at 3:45 PM"
// ● "Yesterday at 11:00 AM"
// ● "4 days ago"
// depending on how recent it is.

// function formatRelativeDate(timestamp) {
//   const date = new Date(timestamp);
//   const now = new Date();

//   const diff = now - date;
//   const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));

//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   const ampm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12 || 12; 
//   if (minutes < 10) minutes = "0" + minutes;
//   const timeStr = `${hours}:${minutes} ${ampm}`;

//   if (diffDays === 0) {
//     return `Today at ${timeStr}`;
//   } else if (diffDays === 1) {
//     return `Yesterday at ${timeStr}`;
//   } else if (diffDays < 7) {
//     return `${diffDays} days ago`;
//   } else {
//     return date.toDateString() + " at " + timeStr;
//   }
// }

// console.log(formatRelativeDate(new Date()));             
// console.log(formatRelativeDate(new Date(Date.now() - 86400000)));
// console.log(formatRelativeDate(new Date(Date.now() - 3 * 86400000)));


// 14. Generate Dates for the Next 7 Days
// Return an array of dates (in DD-MM-YYYY format) for the next 7 days from today.

// function next7Days() {
//   const today = new Date();
//   const dates = [];

//   for (let i = 0; i < 7; i++) {
//     const nextDate = new Date(today);
//     nextDate.setDate(today.getDate() + i);

//     let day = nextDate.getDate();
//     let month = nextDate.getMonth() + 1;
//     let year = nextDate.getFullYear();

//     if (day < 10) day = "0" + day;
//     if (month < 10) month = "0" + month;

//     dates.push(`${day}-${month}-${year}`);
//   }

//   return dates;
// }

// console.log(next7Days());


// 15. Time Slot Generator
// Create a function that generates available 30-minute time slots between 9 AM to 5 PM
// for a specific date.

// function timeSlots(dateStr) {
//   const slots = [];
//   const date = new Date(dateStr);

//   let start = new Date(date);
//   start.setHours(9, 0, 0, 0);

//   let end = new Date(date);
//   end.setHours(17, 0, 0, 0);

//   while (start < end) {
//     let hours = start.getHours();
//     let minutes = start.getMinutes();

//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     const minStr = minutes === 0 ? "00" : minutes;

//     slots.push(`${hours}:${minStr} ${ampm}`);

//     start.setMinutes(start.getMinutes() + 30);
//   }

//   return slots;
// }

// console.log(timeSlots("2025-09-15"));


// 16. Monthly Calendar Dates
// Return an array of all dates in the current month (e.g., ['01-08-2025',
// '02-08-2025', ...]).

// function currentMonth() {
//   const today = new Date();
//   const year = today.getFullYear();
//   const month = today.getMonth();

//   const dates = [];

//   const lastDay = new Date(year, month + 1, 0).getDate();

//   for (let day = 1; day <= lastDay; day++) {
//     let d = day < 10 ? "0" + day : day;
//     let m = (month + 1) < 10 ? "0" + (month + 1) : (month + 1);
//     dates.push(`${d}-${m}-${year}`);
//   }

//   return dates;
// }

// console.log(currentMonth());


// 17. Convert UTC Date to Local Time
// Given a UTC date string, convert it to local date/time format.


// function convertUTCtoLocal(utcStr) {
//   const date = new Date(utcStr);

//   return date.toLocaleString(); 
// }

// console.log(convertUTCtoLocal("2025-09-15T12:00:00Z"));


// 18. Measure Function Execution Time
// Use Date.now() to measure how long a loop/function takes to execute.

// function measureExecutionTime() {
//   const start = Date.now();

//   let sum = 0;
//   for (let i = 0; i < 1000000; i++) {
//     sum += i;
//   }

//   const end = Date.now();  
//   const duration = end - start;

//   console.log(`Execution Time: ${duration} ms`);
// }

// measureExecutionTime();


// 19. Format Date as ISO String Without Time
// Format the current date as YYYY-MM-DD (without time), using a custom formatter.

// function getISODate() {
//   const today = new Date();

//   let year = today.getFullYear();
//   let month = today.getMonth() + 1; 
//   let day = today.getDate();

//   if (month < 10) month = "0" + month;
//   if (day < 10) day = "0" + day;

//   return `${year}-${month}-${day}`;
// }

// console.log(getISODate());


// 20. Get the Number of Days in Any Month
// Write a function that takes a month and year, and returns how many days are in that
// month (handle leap years too).

// function getDaysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }

// console.log(getDaysInMonth(2, 2024));
// console.log(getDaysInMonth(2, 2025)); 
// console.log(getDaysInMonth(9, 2025)); 