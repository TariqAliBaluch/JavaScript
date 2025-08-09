// for (let i = 0; i <= 10; i++) {
//     console.log(i);
        
// }

//table

// for (let i = 1; i <= 10; i++) {
//     console.log("2 * " + i + " = " + 2 * i);   
// }

// let num = 40;

// for (let i = 1; i <= 10; i++){
//     console.log(num + " * " + i + " = " + num * i);
// }

//for loop
// while 
// do while 
// nested loop


// backtick `` || concatenate sy bachna 

// let username = "Tariq Ali";
// let age = 24;
// let email = "tariqali.com";

// console.log("username is " + username + " age is " + age + " and email is " + email);
// console.log(`username is ${username} age is ${age} and email is ${email}`);

// var number = 5;

// for (let i = 1; i <= 10; i++) {
//     console.log(`${number} * ${i} = ${number * i}`);
// }


// var input = document.querySelector("#numberInput");
// var result = document.querySelector("#result");

// function generateTable() {
//     var number = +input.value;
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} * ${i} = ${number * i}`);
//         result.innerHTML += `<p>${number} * ${i} = ${number * i}</p>`;
//     }
// }


// nested loop 

// for (let i = 1; i <=5; i++) {
//     console.log("outer loop", i);

//     for (let j = 1; j <= 5; j++) {
//         console.log("inner loop" , j);
//     }
    
// }


// while loop

// let i = 10;
// while(i < 10){
//     console.log(i);   // if the condition is false will not run.
//     i++
// }

// do while loop

// let i = 10
// do {
//     console.log(i);   // if the condition is false will always run atleast once.
//     i++
    
// } while (i < 10);


// infinite loop

// for(let i = 0; i < 10; i--)


// break | continue

// for(let i = 0; i < 10; i++){
//     if (i == 8) {
//         break
//     }
//     console.log(i);   
// }

// for(let i = 0; i <= 10; i++){
//     if (i == 6) {
//         continue
//     }
//     if (i == 9) {
//         continue
//     }
//     console.log(i);
    
// }


//loops with array


// const fruits = ["apple", "banana", "orange", "mango", "grape"];

// for(let i = 0; i < fruits.length; i++){
//     console.log(fruits[i] , i);
    
// }

// const result = document.querySelector("#result");

// const cities = ["Karachi", "Lahore", "Quetta", "Islamabad", "Peshawar"];

// for(let i = 0; i < cities.length; i++){
//     console.log(cities[i]);
//     result.innerHTML += `<p>${cities[i]}</p>`;
// }



// Assignment 



// 1. Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit
// in the console.

// let fruits = ["apple", "banana", "cherry"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i] , i);
// }


// 2. Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to
// a paragraph with the ID output using document.querySelector.

// var colors = ["red", "green", "blue"];

// var result = document.querySelector("#output");

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i]);
//     result.innerHTML += `<p>${colors[i]}</p>`
// }


// 3. Use a for loop to print numbers from 1 to 10 in the browser console.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


// 4. Use a while loop to print numbers from 5 to 1 in the console.

// let num = 5;
// while (num >= 1) {
//     console.log(num);
//     num--
// }


// 5. Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div
// with ID names to show all names separated by commas.

// var names = ["Ali", "Sara", "Ahmed"];
// var result = document.querySelector("#names");

// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
//     result.innerHTML += `<div>${names[i]},</div>`
// }


// 6. Change the text of a paragraph with ID status to "Loading..." using
// document.querySelector.

// let para = document.querySelector("#status");
// console.log("para changed");
// para.innerHTML = "Loading..."


// 7. Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in
// a paragraph with ID sum.

// let numbers = [5, 10, 15];
// let sum = 0;

// var result = document.querySelector("#sum");

// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     result.innerHTML = `<p>The sum of array is, ${sum}</p>`
// }
 

// 8. Loop through an array of cities ["Karachi", "Lahore", "Quetta"] and display them as a
// single string in a div with ID cities.

// let cities = ["Karachi", "Lahore", "Quetta"];
// let result = document.querySelector("#cities");

// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]); 
//     result.innerHTML = `<div>${cities.join()}</div>`  
// }


// 9. Write a loop that counts from 1 to 20 and logs only the even numbers in the console.

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// 10. Create an array of numbers [45, 22, 89, 100], and use a loop to find and display the
// largest number in a paragraph with ID max.

// let numbers = [45, 22, 89, 100];
// let largest = numbers[0];

// let result = document.querySelector("#max");

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > largest) {
//         largest = numbers[i];     
//     } 
//     result.innerHTML = `<p>The largest number of array is, ${largest}</p>`
// }


// 11. Use document.querySelector to select a div with ID result and change its text to "Task
// Complete".

// let text = document.querySelector("#result");
// text.innerHTML = "Task Complete"
// console.log("div text changed");


// 12. Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and
// display it inside an element with ID averageTemp.

// var temperatures = [30, 35, 32, 40];
// var sum = 0;
// var temp = document.querySelector("#averageTemp");

// for (let i = 0; i < temperatures.length; i++) {
//     sum += temperatures[i]
    
// }
// var average = sum / temperatures.length;
// temp.innerHTML = `<h4>The average of temperature array is, ${average}</h4>`


// 13. Create a loop that adds all the numbers from 1 to 100 and shows the total inside a
// paragraph with ID totalSum.

// let numbers = document.querySelector("#totalSum");
// for (let i = 1; i <= 100; i++) {
//     numbers.innerHTML += `<p>${i}</p>`
// }


// 14. Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with
// ID animals.

// let animals = ["dog", "cat", "bird"];
// let para = document.querySelector("#animals");

// for (let i = 0; i < animals.length; i++) {
//     para.innerHTML += `<p>${animals[i]}</p>`
// }


// 15. Use document.querySelector to select a heading with ID title and change its text to
// "Welcome to JavaScript!".

// let head = document.querySelector("#title");
// head.innerHTML = "Welcome to JavaScript!"


// 16. Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log
// them to the console.

// for (let i = 1; i <= 50; i++) {
//     if (i % 5 === 0) {
//         console.log(i);
//     }
// }


// 17. Given an array of scores [80, 60, 90, 70], calculate how many scores are above 75 and
// display the count in a div with ID highScores.

// let scores = [80, 60, 90, 70];
// let count = 0;
// let result = document.querySelector("#highScore");

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] > 75) {
//         count++;
//     }
//    result.innerHTML = `<div>Scores above than 75 are, ${count}</div>`
// }
 

// 18. Select an element with ID message and change its text to "Updated successfully" using
// document.querySelector.

// let message = document.querySelector("#message");
// message.innerHTML = "Updated successfully"


// 19. Create an array of subjects like ["Math", "Science", "English"], and use a loop to show
// them in a paragraph with ID subjectsList.

// var subjects = ["Math", "Science", "English"];
// var para = document.querySelector("#subjectList");

// for (let i = 0; i < subjects.length; i++) {
//     para.innerHTML += `<p>${subjects[i]}</p>`
// }
