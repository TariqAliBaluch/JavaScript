// var fruits = ["apple" , "banana" , "orange" , "watermelon" , "kiwi" , "avacado" , "pineapple" , "stawberry" , "mango" , "chiko" , "papita"];
// console.log(fruits);
// console.log(fruits[4]);

// index   || check array items index
// length  || use for check array length


//push || Array k End ma value add kare ga 
//pop  || end sa delete kare ga 
//unshift || start ma add karta ha
//shift || start sa delete karta hai
//splice || kahi sa bhi edit delete ya add karwana ho
//slice || Creates array's shallow copy 
//split || convert a string into array 
//join || convert an array into string
//reverse || reverse the array's items 
//indexof || check the index of an array's items
//includes || check item is available in array or not || answer always true or false 
//concat  || concatenate two or more arrays
//sort || ascending order (A–Z, 0–9)
//nested array

// fruits.push("pineapple")
// console.log(fruits);

// fruits.pop()
// console.log(fruits);

// fruits.unshift("pineapple");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// var fruits = ["apple" , "banana" , "orange" , "watermelon" , "kiwi" , "avacado" , "pineapple" , "stawberry" , "mango" , "chiko" , "papita"];

// // splice(startingindex , delete item , add item)
// // fruits.splice(3 , 5)
// fruits.splice(7 , 0 , "peach" , "grapes")
// console.log(fruits);

// let copy = fruits.slice(2 , 7);
// console.log(copy);

// const username = "Tariq Ali Baloch";
// console.log(username.split(" "));

// console.log(fruits.join(', '));

// console.log(fruits.reverse());

// string ko reverse kardo 

// var country = "Pakistan";
// console.log(country.split('').reverse().join(""));

// console.log(fruits.indexOf("banana"));
// console.log(fruits.indexOf("kiwi"));
// console.log(fruits.indexOf("mango"));

// console.log(fruits.includes("mango"));
// console.log(fruits.includes("melon"));

// let arr1 = [1 , 2 , 3 , 4];
// let arr2 = ["ali" , "tariq" , "baloch"];

// let newArr = arr1.concat(arr2);
// console.log(newArr);

// console.log(fruits.sort());




// Assignment 

// 1. Create an array of 3 student names and add one more using push().

// let students = ["Abdullah" , "Salam" , "Rizwan"];

// students.push("Salman");
// console.log(students);


// 2. Remove the last item from an array of fruits using pop().

// var fruits = ["apple" , "banana" , "peach" , "mango"];

// fruits.pop()
// console.log(fruits);


// 3. Add "Monday" to the beginning of a days array using unshift().

// const days = ['Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday'];

// days.unshift("Monday");
// console.log(days);


// 4. Remove the first item from an array of colors using shift().

// var colors = ['red' , 'black' , 'blue' , 'green' , 'white'];

// colors.shift()
// console.log(colors);


// 5. Use splice() to insert "Math" and "Science" at index 2 of a subjects array.

// var subjects = ["biology" , "chemistry" , "physics" , "computer" , "geography"];

// subjects.splice(2 , 0 , "math" , "science");
// console.log(subjects);


// 6. Use splice() to remove 2 elements starting from index 1 of a cities array.

// let cities = ['karachi' , 'lahore' , 'islamabad' , 'faislabad' , 'hyderabad' , 'sheikarpur' , 'quetta' , 'multan' , "sukkur" , "tandoallahyar" , "larkana"];

// cities.splice(1 , 2);
// console.log(cities);


// 7. Use slice() to get the first 3 items from a countries array.

// const countries = ["pakistan" , "bahrain" , 'dubai' , 'netherland' , 'germany' ,];

// let copy = countries.slice(0 , 3);
// console.log(copy);


// 8. Convert the string "apple,banana,mango" into an array using split().

// var fruit = "apple,banana,mango";

// console.log(fruit.split(","));


// 9. Join an array of characters ['J','S'] into a single string using join().

// let char = ['J','S'];
// console.log(char.join(''));


// 10. Combine two arrays ['pen','pencil'] and ['eraser','sharpener'] using
// concat().

// var arr1 = ['pen','pencil'];
// var arr2 = ['eraser','sharpener'];

// let newArr = arr1.concat(arr2);
// console.log(newArr);


// 11. Sort an array of numbers [10, 5, 2, 8] using sort() (as strings).

// let numbers = [10, 5, 2, 8];
// console.log(numbers.sort());


// 12. Sort an array of names alphabetically using sort().

// const names = ['Tariq' , 'Ali' , 'Salman' , 'Faris' , 'Waleed' , 'Adnan' , 'Zaheer'];
// console.log(names.sort());


// 13. Reverse the order of an array of numbers using reverse().

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.reverse());


// 14. Use indexOf() to find the index of "Blue" in a colors array.

// var colors = ['red' , 'black' , 'blue' , 'green' , 'white'];
// console.log(colors.indexOf("blue"));


// 15. Add three new items to an empty array using push().

// var empty = [];
// empty.push("add 1" , 'add 2' ,"add 3");
// console.log(empty);


// 16. Remove the middle item from an array of 5 numbers using splice().

// let nums = [2 , 3 , 2, 4 , 9 , 8];
// nums.splice(2 , 1);
// console.log(nums);


// 17. Create a string "HTML CSS JavaScript" and convert it to an array using split().

// const str = "HTML CSS JavaScript";

// console.log(str.split(" "));


// 18. Create an array ['a', 'b', 'c'], reverse it, then join it with - in between.

// var arr = ['a', 'b', 'c'];

// console.log(arr.reverse().join('-'));


// 19. Check if "Karachi" exists in an array using indexOf() and show its index.

// var cities = ['lahore' , 'islamabad' , 'faislabad' , 'hyderabad' , 'karachi' , 'quetta'];

// console.log(cities.includes("karachi"));
// console.log(cities.indexOf("karachi"));


// 20. Concatenate two arrays of even and odd numbers using concat() and then reverse
// them.

var even = [2 , 4 , 6 , 8];
var odd = [3 , 5 , 7 , 9];

let oddEven = even.concat(odd);
console.log(oddEven);
console.log(oddEven.reverse());