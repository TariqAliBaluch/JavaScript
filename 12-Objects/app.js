// objects
// collection of keys and values


// let userinfo = {
//     fullname : "Tariq Ali",
//     age : 24,
//     email : "tariqali@gmail.com",
//     hobbies : ["football" , "coding" ,"novel reading"],
//     greetUser : function () {
//         console.log("function inside object" , this.fullname);
//     }
// }

// console.log(userinfo);

// console.log(userinfo.fullname);
// console.log(userinfo.email);
// console.log(userinfo.age);
// console.log(userinfo["hobbies"][2]);
// console.log(userinfo["fullname"]);

// userinfo.greetUser()


// class tasks

// Nested Objects


// let nestedData = [
//     {
//         category: "Electronics",
//         subcategories: [
//             {
//                 name: "Smartphones",
//                 products: [
//                     { brand: "Apple", model: "iPhone 13", price: 999 },
//                     { brand: "Samsung", model: "Galaxy S21", price: 799 },
//                     { brand: "Google", model: "Pixel 6", price: 699 }
//                 ]
//             },
//             {
//                 name: "Laptops",
//                 products: [
//                     { brand: "Apple", model: "MacBook Pro", price: 1499 },
//                     { brand: "Dell", model: "XPS 13", price: 1299 },
//                     { brand: "HP", model: "Spectre x360", price: 1199 }
//                 ]
//             }
//         ]
//     },
//     {
//         category: "Clothing",
//         subcategories: [
//             {
//                 name: "Men's",
//                 products: [
//                     { brand: "Nike", item: "T-shirt", price: 25 },
//                     { brand: "Adidas", item: "Joggers", price: 40 }
//                 ]
//             },
//             {
//                 name: "Women's",
//                 products: [
//                     { brand: "Zara", item: "Dress", price: 50 },
//                     { brand: "H&M", item: "Jeans", price: 30 }
//                 ]
//             }
//         ]
//     }
// ];

// console.log(nestedData[0].subcategories[1].products[2].model);
// console.log(nestedData[0].subcategories[0].products[1].model);
// console.log(nestedData[0].subcategories[0].products[1].price);
// console.log(nestedData[1].subcategories[1].products[1].item);


// Objects of Array

// [{} , {} , {}]

// const users = [
//     {
//         name: "Alice",
//         age: 25,
//         hobbies: ["Reading", "Painting"]
//     },
//     {
//         name: "Bob",
//         age: 30,
//         hobbies: ["Playing guitar", "Cooking"]
//     },
//     {
//         name: "Charlie",
//         age: 22,
//         hobbies: ["Hiking", "Photography"]
//     },
//     {
//         name: "David",
//         age: 28,
//         hobbies: ["Running", "Watching movies"]
//     },
//     {
//         name: "Ella",
//         age: 35,
//         hobbies: ["Traveling", "Knitting"]
//     },
//     {
//         name: "Frank",
//         age: 20,
//         hobbies: ["Gaming", "Drawing"]
//     },
//     {
//         name: "Grace",
//         age: 27,
//         hobbies: ["Singing", "Dancing"]
//     },
//     {
//         name: "Hannah",
//         age: 32,
//         hobbies: ["Cooking", "Yoga"]
//     },
//     {
//         name: "Ian",
//         age: 24,
//         hobbies: ["Playing football", "Reading" ,'a' , 'b' , 'c']
//     },
//     {
//         name: "Jessica",
//         age: 29,
//         hobbies: ["Writing", "Cycling", 'swimming']
//     }
// ];

// let div = document.querySelector(".parent");

// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);
    
//     div.innerHTML += `<div class="children">
//     <p>${users[i].name}</p>
//     <p>${users[i].age}</p>
//     <p>${users[i].hobbies}</p>
//     </div>`
// }


//obj banana haa name,email,age,greetuser uska baad firstname and lastname baad ma add krna haa or name delete krna ha. greet user ka function jab bhi call hoo to wo return kraa hello '${fullname}'

// const userInfo = {
//     name : "Tariq Ali",
//     email : "tariq@gmail.com",
//     age : 22,
//     greetUser : function () {
//         return `hello ${this.firstname}`
//     }
// }

// userInfo.firstname = "Tariq"
// userInfo.lastname = "Ali"
// delete userInfo.name

// console.log(userInfo.greetUser());
// console.log(userInfo);


// 4 formfields banaingi name , email , age, city jaisa hi user submit pa click kraiga mera pass console ma aik object ajayega jiska undar values form wali hongi

// function formValues() {
//     var name = document.querySelector("#name");
//     var email = document.querySelector("#email");
//     var age = document.querySelector("#age");
//     var city = document.querySelector("#city");


//     const userInfo = {
//         name : name.value,
//         email : email.value,
//         age : age.value,
//         city : city.value
//     }

//     console.log(userInfo);
    
// }



// Assignment

// 1. Display Student Info
// Given an array of student objects, display each student’s name and marks in a table
// using DOM.

// const students = [
//     { name: "Aisha Khan", marks: 88 },
//     { name: "Bilal Ahmed", marks: 74 },
//     { name: "Sana Raza", marks: 95 },
//     { name: "Omar Farooq", marks: 67 }
// ];


// const div = document.querySelector("#table");

// for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);

//     div.innerHTML += `<div class="children">
//     <p>Name: ${students[i].name}</p>
//     <p>Marks: ${students[i].marks}</p>
//     </div>`  
// }


// 2. Find Top Scorer
// From a list of student objects with names and scores, find and display the top scorer.

// const students = [
//   { name: "Ali Khan", score: 85 },
//   { name: "Sara Ahmed", score: 92 },
//   { name: "Bilal Raza", score: 76 },
//   { name: "Ayesha Noor", score: 89 },
//   { name: "Omar Farooq", score: 68 }
// ];

// let topScorer = students[0];

// for (let i = 0; i < students.length; i++) {
//     if (students[i].score > topScorer.score) {
//         topScorer = students[i]
//     }
// }

// console.log(topScorer);


// 3. Filter Products by Price Range
// Create a function that takes a min and max price and filters an array of product objects
// accordingly.

// const products = [
//    { name: "Laptop", price: 750 },
//    { name: "Phone", price: 500 },
//    { name: "Tablet", price: 300 },
//    { name: "Headphones", price: 100 },
//    { name: "Monitor", price: 250 }
// ];

// let result = [];

// function filterProducts(products , min , max) {
    
//     for (let i = 0; i < products.length; i++) {
        
//         if (products[i].price >= min && products[i].price <= max) {
//             result.push(products[i])
//         }
        
//     }

//     return result
// }

// console.log(filterProducts(products , 100 , 500));


// 4. Count Word Frequencies
// Given a paragraph from a textarea, count the frequency of each word and display it as a
// list.

// function countWords() {
//     let text = document.querySelector("#text").value.toLowerCase();
//     let words = text.split(/\s+/);
//     let freq = {};
   
//     for (let i = 0; i < words.length; i++) {
//       let w = words[i];
//       if (w) {
//         if (freq[w]) {
//           freq[w] += 1;
//         } else {
//           freq[w] = 1;
//         }
//       }
//     }
//     let result = document.querySelector("#result");
//     result.innerHTML = "";
  
//     let keys = Object.keys(freq);
//     for (let i = 0; i < keys.length; i++) {
//       let word = keys[i];
//       result.innerHTML += `<li>${word}: ${freq[word]}</li>`;
//     }
// }