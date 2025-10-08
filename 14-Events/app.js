// Events

// onclick
// onchange
// onmouseover
// onmouseout
// onsubmit

// onclick

// let btn = document.querySelector("#btn");
// let h1 = document.querySelector("h1")

// btn.addEventListener("click" , ()=> {
//     h1.style.color = "red"
// })

// onchange

// let input = document.querySelector("#input");

// input.addEventListener("change" , ()=> {
//     console.log("changed by event");
// })

// onmouseover

// let head = document.querySelector("h1");

// head.addEventListener("mouseover" , ()=> {
//     console.log("Mouse touched");
// })

// onmouseout

// head.addEventListener("mouseout" , ()=> {
//     console.log("mouse removed");
// })

// let img = document.querySelector("#img");

// let bulbOn = "https://cdn.mos.cms.futurecdn.net/8URLqwFeJihbNpn3gByhg3.jpg";
// let bulbOff = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbMAzmXrFi7l-i0UjZubEG8LbZKCRdk7pdw&s";

// img.addEventListener("mouseover" , ()=> {
//     img.src = bulbOn
// })

// img.addEventListener("mouseout" , ()=> {
//     img.src = bulbOff
// })

// onsubmit

// let form =  document.querySelector("#form");

// form.addEventListener("submit" , ()=> {
//     alert("Submitted sucessfully!")
// })

// synchronous

// console.log("task 1");
// console.log("task 2");
// console.log("task 3");

// asynchronous

// setimeout
// setinterval
// promises
// async await
// fetch
// axios

// console.log("task 1");
// setTimeout(() => {
//     console.log("Task 2 After two seconds");
// }, 2000);
// console.log("task 3");



// Assignments

// 1. Click to Change Background
// When a button is clicked, change the background color of the entire page to a random
// color.

// const button = document.querySelector("#btn");
// const body = document.querySelector("body")

// button.addEventListener("click" , () => {
//     console.log("background changed");

//     body.style.backgroundColor = "brown";
// })

// 2. Toggle Light Mode / Dark Mode
// Add a button that toggles between light and dark themes using class changes.

// let btn = document.querySelector("#btn");
// let body = document.querySelector("body")

// btn.addEventListener("click", ()=> {
//    body.classList.toggle("dark");
// });

// 3. Hide Element on Click
// When a specific element is clicked, hide it from view using style.display =
// 'none'.

// let pic = document.querySelector("img");

// pic.addEventListener("click" , ()=> {
//     pic.style.display = 'none'
// })

// 4. Counter with Buttons
// Create "Increase" and "Decrease" buttons that modify a number displayed on the
// screen.

// let increBtn = document.querySelector("#increaseBtn");
// let decreBtn = document.querySelector("#decreaseBtn");
// let num = document.querySelector("h3");

// increBtn.addEventListener("click" , ()=> {
//     num.innerHTML ++;
// })

// decreBtn.addEventListener("click" , ()=> {
//     num.innerHTML -= 1
// })

// 5. Disable Button After Click
// Create a button that disables itself after being clicked once.

// let myBtn = document.querySelector("#btn");

// myBtn.addEventListener("click" , ()=> {
//     myBtn.disabled = true;
// })

// 6. Live Character Count
// Display how many characters have been typed into a textarea in real time.

// let area = document.querySelector("#msg");
// let countChar = document.querySelector("#count");

// area.addEventListener("input" , ()=> {
//     countChar.innerHTML = area.value.length;
// })

// 7. Password Strength Checker
// Show strength feedback ("Weak", "Strong") as the user types a password.

// let password = document.querySelector("#pass");
// let result = document.querySelector("#result");

// password.addEventListener("input" , ()=> {
//     if(password.value.length >= 10){
//         result.innerHTML = "Strong"
//     } else {
//         result.innerHTML = "Weak"
//     }
// })

// 8. Enter to Submit
// When the user presses Enter inside an input field, submit the form (or show an alert).

// let form =document.querySelector("#form");

// form.addEventListener("submit" , ()=> {
//     alert("Form submitted")
// })

// 9. Auto Uppercase Input
// As the user types in a text field, convert the characters to uppercase live.

// let textarea = document.querySelector("#msg");

// textarea.addEventListener("input" , ()=> {
//     textarea.value = textarea.value.toUpperCase()
// })

// 10. Detect Forbidden Words
// Prevent form submission if input contains banned words (like "spam", "test").

// let form = document.querySelector("#form");
// let input = document.querySelector("#msg");

// const bannedWords = ["spam" , "test"];

// form.addEventListener("submit" , ()=> {
//     let found = false;

//     for (let word of bannedWords) {
//       if (input.value.includes(word)) {
//         found = true;
//         break;
//       }
//     }

//     if(found){
//         alert("Forbidden by banned words")
//     } else {
//         alert("Submitted sucessfully")
//     }
// })


// 11. Dropdown Dynamic Update
// When a country is selected in one dropdown, dynamically populate a second dropdown
// with its cities.

// const countrySelect = document.querySelector("#country");
// const citySelect = document.querySelector("#city");

// const cities = {
//   Pakistan: ["Karachi", "Lahore", "Islamabad", "Quetta"],
//   India: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
//   "United States": ["New York", "Los Angeles", "Chicago", "Houston"],
// };

// countrySelect.addEventListener("change", () => {
//   const selectedCountry = countrySelect.value;

//   citySelect.innerHTML = '<option value="">-- Select City --</option>';

//   if (selectedCountry && cities[selectedCountry]) {
    
//     for (let city of cities[selectedCountry]) {
//       const option = document.createElement("option");
//       option.value = city;
//       option.textContent = city;
//       citySelect.appendChild(option);
//     }
//   }
// });
