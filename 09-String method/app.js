// string method

// tolowercase 
// touppercase
// slice
// split
// join
// replace 
// replace all
// length
// charAt
// indexOf


// let username = "Tariq ali baloch";

// console.log(username.toLowerCase());
// console.log(username.toUpperCase());

// console.log(username.slice(2 , 8));

// console.log(username.split("").reverse().join(" "));

// console.log(username.length);

// console.log(username.charAt(2));
// console.log(username[2]);

// console.log(username.indexOf('o'));

// let gap = "Ali yak shre bachke. Ali wanaga sak zabre, Ali wti marchigy kaara paa bandath wastha yala naknt."
// console.log(gap.replace("Ali" , "Sallu"));
// console.log(gap.replaceAll("Ali" , "Sallu"));






// const cities = ['quetta' , 'turbat' , 'gwadar' , 'panjgur' , 'nushki' , 'sibi' , 'karachi' , 'pasni' , 'mand'];

// let input = document.querySelector("#input");
// let result = document.querySelector("#result");

// function checkCity() {
//     if (cities.includes(input.value.toLowerCase())) {
//         // console.log("behtreen zindagi jee rhe ho aap");
//         result.innerHTML = "behtreen zindagi jee rhe ho aap"
//         return
//     }

//     if (cities.indexOf(input.value.toLowerCase()) !== -1) {
//         result.innerHTML = "behtreen zindagi jee rhe ho aap"
//         return
//     }

//     result.innerHTML = "jhand zindagi haa apka"

//     for (let i = 0; i < cities.length; i++) {

//         let available = false
//         if (input.value.toLowerCase() === cities[i]) {
//             result.innerHTML = "beautiful city ma zindagi kr rhe ho aap"
            
//             available = true
//             break
//         } if (!available) {
//             result.innerHTML = "jhand zindagi haa apka"
//         }
//     }
    
    
// }

// palindrome
// level reverse level
// civic reverse civic

// let input = document.querySelector("#input");
// let result = document.querySelector("#result");

// function checkPalindrome() {
//     var reverseStr = input.value.split("").reverse().join("")
//     if (reverseStr === input.value) {
//         // console.log("Palindrome hai");
//         result.innerHTML = input.value + " is a Palindrome"
//     } else{
//         // console.log("It is not a Palindrome!");
//         result.innerHTML = input.value + " is not a Palindrome"
//     }
// }
