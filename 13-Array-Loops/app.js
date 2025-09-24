// arrow function

// function greetings(username) {
//     return `hello ${username}`
// }
// console.log(greetings("Tariq"));


// let greetUser = (username) => {
//     return `hello ${username}`
// }
// console.log(greetUser("Ali"));


// shortcut or single line function

// let greetings = username => `hello ${username}`

// console.log(greetings("Muhammad"));

// normal function hoisting support krta ha
// arrow function hoisting support nhi krta ha

// for of ... loop

// const fruits = ["apple" , "mango" , "watermelon" , "avacado" , "grapes"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]); 
// }

// item , iterator , element

// for (const item of fruits) {
//     console.log(item);
// }

// for in ... loop

// let user = {
//     username : "Tariq Ali",
//     email : "tariq@gmail.com",
//     age : 23,
//     hobbies : ["reading" , "coding" , "football"]
// }

// for (const key in user) {
//     // console.log(key);
//     console.log(`${key} : ${user[key]}`);
// }

// callback function
// wo function jo kisi bhi function ka undar as an argument ata ha
// higher order fuction
// wo function jiska undar as an argument callback ata ha

// for each 

// const fruits = ["apple" , "mango" , "watermelon" , "avacado" , "grapes"];

// fruits.forEach((item , index , carr) => {
//     console.log(item , index , carr);
// });

// for each cannot return the value

// const iterarr = fruits.forEach((item , index) => {
//     // console.log(item , index);
//     return item
// });

// console.log(iterarr);

// map

// fruits.map((item , index) => {
//     console.log(item , index);
// });

// map can return the value

// const mapArr = fruits.map((item , index) => {
//     console.log(item , index);
//     return item + index
// });

// console.log(mapArr);

// filter

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterArr = num.filter(item => {
//     return item % 2 === 0
// }) 

// console.log(filterArr);

const users = [
  { id: 1, name: "Alice", age: 25, isActive: true },
  { id: 2, name: "Bob", age: 30, isActive: false },
  { id: 3, name: "Charlie", age: 22, isActive: true },
  { id: 4, name: "Diana", age: 28, isActive: false },
];

// let age = users.filter(item => item.age >= 25)
// console.log(age);

// let user = users.map(item => `Hello ${item.name}!`)
// console.log(user);


// chaining 

// let age = users.map(item => item.age).filter(item => item > 25).map(item => item + 100)
// console.log(age);

// reduce

// const numbers = [5, 10, 15, 20, 25, 30];

// accumulator, currentValue
// let sumOfNum = numbers.reduce((accumulator , currentValue) => {
//     return accumulator + currentValue
// } , 0)
// console.log(sumOfNum);

// find

// console.log(numbers.findLastIndex((item) => item < 30));






// Assignment

// 1. Use map() to double each number in the array: [1, 2, 3, 4, 5].

// let numbers = [1, 2, 3, 4, 5];

// let doubleNum = numbers.map((items) => {
//     return items * 2
// });
// console.log(doubleNum);


// 2. Use map() to convert an array of strings to uppercase: ["apple", "banana",
// "cherry"].

// let fruits = ["apple", "banana", "cherry"];

// let arr = fruits.map((item) => {
//     return item.toUpperCase()
// });

// console.log(arr);


// 3. Use map() to extract the names from an array of objects:
// [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}].

// const users = [
//     {name: "Alice"}, {name: "Bob"}, {name: "Charlie"}
// ]; 

// const usernames = users.map((items) => {
//     return items.name
// });
// console.log(usernames);


// 4. Use map() to return the length of each word in the array: ["dog", "elephant",
// "tiger"].

// let animal = ["dog", "elephant", "tiger"];

// let arr = animal.map((items => items.length))
// console.log(arr);


// 5. Use map() to add a suffix -done to each task in an array: ["task1", "task2",
// "task3"].

// const arr = ["task1", "task2", "task3"];

// let suffixArr = arr.map((item) => {
//     return item + "-done"
// });

// console.log(suffixArr);


// 6. Use map() to square each number in an array: [2, 4, 6, 8].

// const number = [2, 4, 6, 8];

// let squaredArr = number.map((item) => {
//     return item * item
// });
// console.log(squaredArr);


// 7. Use map() to convert an array of prices to strings with a $ sign.

// let prices = [250 , 300 , 280 , 500 , 890];

// let pricesArr = prices.map((item) => {
//     return `$${item}`
// });
// console.log(pricesArr);


// 8. Use map() to format an array of dates into readable strings.

// const dates = [
//   new Date('2023-01-15T10:00:00Z'),
//   new Date('2023-05-20T15:30:00Z'),
//   new Date('2024-02-10T08:45:00Z')
// ];

// const formattedDates = dates.map(date => {
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
//   });
// });

// console.log(formattedDates); 


// 9. Use map() to create an array of booleans indicating if each number is even.

// let number = [2 , 3 , 5 , 8 , 20 , 28 , 4];

// let arr = number.map(items => items % 2 === 0);
// console.log(arr);


// 10. Use map() to append the index to each string in an array.

// const fruits = ["Apple", "Banana", "Cherry"];

// let appendFruits = fruits.map((items , index) => {
//     return items + index
// });
// console.log(appendFruits);


// 11. Use filter() to keep only the even numbers: [1, 2, 3, 4, 5, 6].

// let number = [1, 2, 3, 4, 5, 6];

// let filterArr = number.filter((item => item % 2 === 0));
// console.log(filterArr);


// 12. Use filter() to remove all negative numbers from an array: [-3, 4, -1, 7, -5].

// let arr = [-3, 4, -1, 7, -5];

// let filterArr = arr.filter(item => item >= 0);
// console.log(filterArr);


// 13. Use filter() to get names longer than 4 characters: ["Joe", "Elizabeth",
// "Tom", "Anna"].

// let names = ["Joe", "Elizabeth","Tom", "Anna"];

// let filteredNames = names.filter(item => item.length > 4)
// console.log(filteredNames);


// 14. Use filter() to find all users who are active:
// [{name: "Alice", active: true}, {name: "Bob", active: false}].

// let users = [{name: "Alice", active: true}, {name: "Bob", active: false}];

// let filterUser = users.filter((item) => {
//     return item.active == true
// })
// console.log(filterUser);


// 15. Use filter() to get all words starting with the letter "a".

// let words = ["apple", "banana", "cat", "dog", "ant", "elephant", "alligator", "fish"];

// let filterWords = words.filter((item => item.startsWith("a")))
// console.log(filterWords);


// 16. Use filter() to keep only numbers greater than 10.

// let numbers = [2 , 3 , 5 , 8 , 20 , 28 , 4];

// let filterNum = numbers.filter(item => item > 10);
// console.log(filterNum);


// 17. Use filter() to remove all falsy values from an array.

// const values = [0, "", null, undefined, NaN, false, true, "hello", 1];

// let filtervalues = values.filter(Boolean);
// console.log(filtervalues);


// 18. Use filter() to get strings that include the word "code".

// let word = ["read" , "write" , "code" , "sleep"];

// let filterWords = word.filter(item => item.includes("code"));
// console.log(filterWords);


// 19. Use filter() to exclude null or undefined values.

// const values = [null, undefined, true, "hello", 1];

// let exclude = values.filter(Boolean);
// console.log(exclude);


// 20. Use filter() to return products with price less than 100:
// [{name: "Phone", price: 99}, {name: "Tablet", price: 120}].

// let product = [{name: "Phone", price: 99}, {name: "Tablet", price: 120}];

// let price = product.filter(item => item.price < 100);
// console.log(price);


// 21. Use reduce() to sum all numbers in an array: [1, 2, 3, 4].

// let num = [1, 2, 3, 4];

// let sumOfNum = num.reduce((acum , cval) => {
//     return acum + cval
// } , 0);
// console.log(sumOfNum);


// 22. Use reduce() to find the maximum number in an array.

// let numbers = [2 , 3 , 5 , 8 , 20 , 28 , 4];

// let maxNum = numbers.reduce((acum , cval) => {
//     return Math.max(acum , cval)
// })
// console.log(maxNum);


// 23. Use reduce() to count how many times each element appears:
// ["apple", "banana", "apple", "orange", "banana"].

// let fruits = ["apple", "banana", "apple", "orange", "banana"];

// const fruitCount = fruits.reduce((accumulator, currentValue) => {
//   if (accumulator[currentValue]) {
//     accumulator[currentValue] += 1;
//   } else {
//     accumulator[currentValue] = 1;
//   }
//   return accumulator;
// }, {});

// console.log(fruitCount);