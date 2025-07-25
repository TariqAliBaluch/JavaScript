// 1. Select a paragraph with id "message" and change its text to "Welcome!".

// var para = document.querySelector("#message");
// para.innerHTML = "Welcome!"
// console.log(' paragraph text changed');


// 2. Get the value from an input with id "nameInput" and display it inside a div with id
// "result".

// var input = document.querySelector("#nameInput");
// var value = document.querySelector("#result");
// function getval() {
//     value.innerHTML = input.value
// }


// 3. When a button is clicked, change the background color of a section with id
// "container" to light blue.

// var cont = document.querySelector("#container");
// function changeit() {
//     cont.style.backgroundColor = "lightblue"
// }


// 4. Select a heading (h1) with id "mainTitle" and change its color to red.

// var head = document.querySelector("#mainTitle");
// function changecolor() {
//     head.style.color = "red"
// }


// 5. Get the number from an input with id "num1" and show it inside a paragraph with id
// "output".

// var input = document.querySelector("#num1");
// var out = document.querySelector("#output");
// function getoutput() {
//     out.innerHTML = input.value;
// }


// 6. Select a button with class "submit-btn" and log "Button Clicked" to the console
// when it's clicked.

// var btn = document.querySelector(".submit-btn");
// function clicked() {
//     console.log("Button Clicked");
// }


// 7. Get values from two inputs with ids "first" and "second", add them (as numbers),
// and show the result in a span with id "sum".

// var input1 = document.querySelector("#first");
// var input2 = document.querySelector("#second");
// var result = document.querySelector("#sum");
// function add() {
//     result.innerHTML = input1.value + input2.value
// }


// 8. Change the text of a paragraph with class "description" to "Updated
// successfully".

// var para = document.querySelector(".description");
// para.innerHTML = "Updated successfully"


// 9. Select a div with id "box" and set its width to 200px and background color to green.

// var div = document.querySelector("#box");
// function set() {
//     div.style.width = "200px"
//     div.style.backgroundColor = "green"
// }


// 10. Get the email entered in an input with id "email" and print it in the console.

// var mail = document.querySelector("#email");
// function addvalue() {
//     console.log(mail.value);
// }


// 11. Select a paragraph and update its font size to 24px.

// var text = document.querySelector("#para");
// function size() {
//     text.style.fontSize = "24px"
// }


// 12. On button click, get a name from input "fullName" and set the text "Hello,
// [name]" inside a div "greeting".

// var input = document.querySelector("#fullName");
// var result = document.querySelector("#greeting");
// function add() {
//     result.innerHTML = "Hello, " + input.value
// }


// 13. Select an image with id "profilePic" and change its src to another image URL.

// var profile = document.querySelector("#profilePic");
// function changepic() {
//     profile.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0PDKrErulLlbJkbv5KtsCeICczdgJSyurA&s"
// }


// 14. Change the text color of all elements with class "highlight" to orange. (Hint: You’ll
// need querySelectorAll for multiple)

// var cont = document.querySelectorAll("p");
// function textcolor() {
//     cont.forEach((para) => {
//     para.style.color = "orange";
//   });
// }


// 15. Select a checkbox with id "agree" and check whether it is checked or not, then display
// "Agreed" or "Not Agreed" in a paragraph.

// var checkbox = document.querySelector("#agree");
// var result = document.querySelector("#result");
// function checkAgreement() {
//     if (checkbox.checked) {
//         result.innerHTML = "Agreed"
//     } else {
//         result.innerHTML = "Not Agreed"
//     }
// }


// 16. Get the selected value from a dropdown (select element) with id "options" and display
// it in "selectedValue" span.

// var dropdown = document.querySelector("#options");
// var result = document.querySelector("#selectedValue");

// function display() {
//     result.innerHTML = dropdown.value
// }


// 17. When a button is clicked, show the current date and time inside a paragraph with id
// "dateTime".

// var para = document.querySelector("#dateTime");
// function timeDate() {
//     var now = new Date();
//     para.innerHTML = now.toString()
// }


// 18. Select a paragraph with id "togglePara" and hide it (set display: none).

// var para = document.querySelector("#togglePara");
// function hide() {
//     para.style.display = "none"
// }


// 19. Get a user’s age from an input with id "age" and display "Eligible" if age >= 18,
// else "Not Eligible" in a span.

// var input = document.querySelector("#age");
// var result = document.querySelector("#output");
// function checkAge() {
//     var age = parseInt(input.value);
//     if (age >= 18) {
//         result.innerHTML = "Eligible"
//     } else {
//         result.innerHTML = "Not Eligible"
//     }
// }


// 20. When a button is clicked, clear the value of an input with id "searchBox".

var input = document.querySelector("#searchBox");
function clearInput() {
    input.value = "";
}