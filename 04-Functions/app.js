// 1. addTwoNumbers
// Write a function that takes two numbers and returns their sum.

// function sum(num1, num2) {
//   return num1 + num2;
// }

// console.log(sum(3 , 4));


// 2. subtractNumbers
// Create a function that takes two numbers and returns the result of the first number
// minus the second.

// function sub(num1, num2) {
//   return num1 - num2;
// }

// console.log(sub(7 , 3));



// 3. multiplyNumbers
// Write a function that multiplies two numbers and returns the result.

// function multiply(a , b) {
//   return a * b;
// }

// console.log(multiply(5 , 3));



// 4. divideNumbers
// Create a function that takes two numbers and returns the result of dividing the first by
// the second.

// function div(x , y) {
//   return x / y;
// }

// console.log(div(8 , 3));
// console.log(div(12 , 6));



// 5. getRemainder
// Write a function that takes two numbers and returns the remainder when the first
// number is divided by the second.

// function remainder(a , b) {
//   return a % b;
// }

// console.log(remainder(4 , 2));
// console.log(remainder(8 , 3));



// 6. isPositive
// Write a function that checks if a number is positive. If it is, return "Positive",
// otherwise return "Not Positive".

// function checksPositive(num) {
//   if (num >= 0) {
//     return "Positive"
//   } else{
//     return "Not Positive"
//   }
// }

// console.log(checksPositive(9));
// console.log(checksPositive(-3));


// 7. isNegative
// Create a function that checks if a number is negative. If it is, return "Negative", else
// return "Not Negative".

// function checksNegative(num) {
//   if (num < 0) {
//     return "Negative"
//   } else{
//     return "Not Negative"
//   }
// }

// console.log(checksNegative(8));
// console.log(checksNegative(-5));

// 8. checkEven
// Write a function that takes a number and returns "Even" if the number is even,
// otherwise "Odd".

// function checkEven(number) {
//   if (number % 2 == 0) {
//     return "Even"
//   } else{
//     return "Odd"
//   }
// }

// console.log(checkEven(7));
// console.log(checkEven(8));


// 9. isEqual
// Write a function that takes two numbers and returns "Equal" if they are the same,
// otherwise "Not Equal".

// function isEqual(num1 , num2) {
//   if (num1 == num2) {
//     return "Equal";
//   } else{
//     return "Not Equal";
//   }
// }

// console.log(isEqual(7 , 7));
// console.log(isEqual(15 , 0));


// 10. compareNumbers
// Create a function that returns "Greater" if the first number is greater than the second,
// else return "Smaller".

// function compareNumbers(a , b) {
//   if (a > b) {
//     return "Greater";
//   } else{
//     return "Smaller";
//   }
// }

// console.log(compareNumbers(5 , 8));
// console.log(compareNumbers(15 , 9));


// 11. getFullName
// Write a function that takes a first name and last name, and returns the full name.

// function username(firstName , lastName) {
//     return firstName + " " + lastName;
// }

// console.log(username("Tariq" , "Ali"));
// console.log(username("Salim" , "Baloch"));


// 12. getGrade
// Create a function that takes a number (0–100) and returns:
// ● "Pass" if the score is 40 or more
// ● "Fail" if it is less than 40

// function getGrade(numbers) {
//     if (numbers >= 40) {
//         return "Pass";
//     } else{
//         return "Fail";
//     }
// }

// console.log(getGrade(47));
// console.log(getGrade(35));
// console.log(getGrade(20));


// 13. isTeenager
// Write a function that takes an age and returns "Teenager" if the age is between 13
// and 19, otherwise return "Not a Teenager".

// function Teenager(age) {
//     if (age == 13 || age <= 19) {
//         return "Teenager";
//     } else{
//         return "Not a Teenager";
//     }
// }

// console.log(Teenager(15));
// console.log(Teenager(21));


// 14. greetUser
// Write a function that takes a name and returns a greeting like "Hello, Ahmed!".

// function greetUser(name) {
//     return "Hello " + name + "!"
// }
// console.log(greetUser("Ahmed"));
// console.log(greetUser("Tariq"));


// 15. isEligibleToVote
// Create a function that takes age and returns "Eligible" if age is 18 or above,
// otherwise "Not Eligible".

// function isEligibleToVote(age) {
//     if (age >= 18) {
//         return "Eligible";
//     } else{
//         return "Not Eligible";
//     }
// }
// console.log(isEligibleToVote(15));
// console.log(isEligibleToVote(18));


// 16. findAbsoluteValue
// Write a function that returns the absolute value of a number (no Math.abs, use if-else
// only).

// function findAbsoluteValue(number) {
//     if (number < 0) {
//         return -number;  
//     } else {
//         return number;
//     }
// }
// console.log(findAbsoluteValue(-14));
// console.log(findAbsoluteValue(40));


// 17. checkTemperature
// Write a function that takes a temperature and returns:
// ● "Hot" if temperature is above 30
// ● "Cold" if below 10
// ● "Normal" otherwise

// function checkTemperature(temperature) {
//     if (temperature > 30) {
//         return "Hot";
//     } if (temperature < 10) {
//         return "Cold";
//     } else {
//         return "Normal";
//     }
// }
// console.log(checkTemperature(4));
// console.log(checkTemperature(35));
// console.log(checkTemperature(25));


// 18. getTriangleType
// Create a function that takes 3 sides and returns:
// ● "Equilateral" if all are equal
// ● "Isosceles" if any two are equal
// ● "Scalene" if all are different


// function triangleType(a, b, c) {
//   if (a === b && b === c) {
//     return "Equilateral";
//   } else if (a === b || b === c || a === c) {
//     return "Isosceles";
//   } else {
//     return "Scalene";
//   }
// }
// console.log(triangleType(8, 8, 8));
// console.log(triangleType(8, 8, 7));
// console.log(triangleType(7, 8, 9));



// 19. calculateDiscountedPrice
// Write a function that takes a price and discount percentage, and returns the discounted
// price.

// function calculateDiscountedPrice(price , discountpercent) {
//     var discountAmount = (price * discountpercent) / 100;
//     var totalPrice = price - discountAmount;
//     return totalPrice;
// }
// console.log(calculateDiscountedPrice(450 , 20));
// console.log(calculateDiscountedPrice(5500 , 30));


// 20. isPasswordValid
// Write a function that takes a password and checks if its length is 8 characters or more.
// Return "Valid Password" or "Too Short".

function isPasswordValid(password) {
    if (password.length >= 8) {
        return "Valid Password"
    } else{
        return "Too Short"
    }
}
console.log(isPasswordValid("password@123"));
console.log(isPasswordValid("12345"));