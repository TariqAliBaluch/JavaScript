

// var result = document.querySelector("#result");

// function check(n) {
    
//     let x = Math.random() * 2
//       x = Math.round(x)

//       if (n === x) {
//         result.innerHTML = "You Win!"
//         return
//       }
//       result.innerHTML = "Lose"
// }


// let num = 1.22222;
// //  num = Math.round(num)
// // num = Math.ceil(num)
// // num = Math.floor(num)

// console.log(num);

// let randomNum = Math.random() * 2
// randomNum = Math.round(randomNum)
// console.log(randomNum);








let sec = document.querySelector("#sec");
let mint = document.querySelector("#min");
let hour = document.querySelector("#hour");
let second = 0;
let mints = 0;
let hours = 0;
let stopWatch = null;

function startWatch() {
    if (!stopWatch) {
        stopWatch = setInterval(function () {
            second++;
            if (second === 60) {
                second = 0;
                mints++;
            }
            if (mints === 60) {
                mints = 0;
                hours++;
            }
            if (second < 10) {
                sec.innerHTML = `0${second}`
            } else{
                sec.innerHTML = `${second}`

            }
            if (mints < 10) {
                mint.innerHTML = `0${mints}`
            }
            if (hours < 10) {
                hour.innerHTML = `0${hours}`
            }
        }, 1000)
    }

}

function stopInterval() {
    clearInterval(stopWatch)
    stopWatch = null;
}
function resetWatch() {
    stopInterval();
    second = 0;
    hours = 0;
    mints = 0;
    sec.innerHTML = "00";
    mint.innerHTML = "00";
    hour.innerHTML = "00";
}
