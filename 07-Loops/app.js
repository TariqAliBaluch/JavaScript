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
//     result.innerHTML = `<div>${names},</div>`
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
//     para.innerHTML = `<p>${animals}</p>`
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
//     para.innerHTML = `<p>${subjects}</p>`
// }


// 20. Write a loop that prints numbers from 10 down to 1 and shows the result inside a Given
// an array of numbers [5, 10, 15, 20], use a loop to calculate and print the sum of all
// elements.

// let div = document.querySelector("#result");

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
//     div.innerHTML += `<div>${i}</div>`
// }

// var number = [5, 10, 15, 20];
// var sum = 0;
// var total = document.querySelector("#sum");

// for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//     total.innerHTML = `<p>The sum of all elements of array is, ${sum}</p>`
    
// }


// 21. Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

// let arr = [45, 67, 12, 89, 34];
// let largest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > largest) {
//       largest = arr[i];
//    } 
// }
// console.log("The largest number of array is," , largest);


// 22. Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.

// var number = [3, 8, 6, 1, 9, 2];
// var count = 0;

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 2 === 0) {
//         count++;
//     }  
// }
// console.log("The even numbers of array are,", count);


// 23. Write a loop that calculates the average of numbers in an array [20, 30, 40, 50].

// let arr = [20, 30, 40, 50];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// var average = sum / arr.length;
// console.log(average);


// 24. Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is
// multiplied by 3.

// let arr = [2, 4, 6, 8, 10];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i] * 3);   
// }
// console.log(newArr);


// 25. Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4.

// var array = [1, 3, 5, 7, 9];
// var count = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > 4) {
//         count++
//     }
// }
// console.log(count);


// 26. Given an array [10, 15, 20, 25, 30], use a loop to add only the numbers divisible by 5.

// let number = [10, 15, 20, 25, 30];
// let sum = 0;

// for (let i = 0; i < number.length; i++) {
//     if (number[i] % 5 === 0) {
//         sum += number[i]
//     } 
// }
// console.log(sum);


// 27. Write a loop that checks if a number 25 exists in the array [10, 20, 30, 40, 25].

// let array = [10, 20, 30, 40, 25];
// let checksNumber = 25;
// let found = false;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === checksNumber) {
//         found = true
//         break;
//     }
// }
// if (found) {
//     console.log(checksNumber + " Exists");
// } else{
//     console.log(checksNumber + " Not exists");
    
// }


