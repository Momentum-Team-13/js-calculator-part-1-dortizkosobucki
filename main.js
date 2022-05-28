//problems to fix
//play with CSS


//definitions
let numberArr = document.querySelectorAll('.button');
let display = document.querySelector('.display');
let clearAll = document.querySelector('.clear');
let equals = document.getElementById("e");


for (let number of numberArr) {
    number.addEventListener("click", function (event) {
        console.log(number.innerText)
        if (number === equals) {
            display.innerText = math.eval(display.innerText);
            console.log(display.innerText);
        } else {
            display.innerText += event.target.textContent;
        }
    })
}

//event listen clear
clearAll.addEventListener("click", function (event) {
    display.innerText = " ";
})


//numbers+operation storage
// let number1 = '';
// let number2 = '';
// let nextOperation = ''; //



// //event listen numbers
// for (let num of numberArr) {
//     num.addEventListener("click", function (event) {
//         if (number1 && nextOperation) {
//             number2 += event.target.innerText;
//             display.innerText += event.target.innerText;
//         } else {
//             number1 += event.target.innerText;
//             display.innerText += event.target.innerText;
//         }
//         console.log(event.target.innerText)
//     });
// }

// //event listen operation 
// for (let operation of operationArr) {
//     operation.addEventListener('click', function (event) {
//         if (number1) {
//             nextOperation = event.target.innerText;
//             display.innerText += " " + event.target.innerText;
//         }
//         console.log(event.target.innerText);
//     })
// }

//store total as number1


// //event listen total
// total.addEventListener("click", function (event) {
//     if (number1 && number2) {
//         calculation();
//     }
// });


// // // //function calculation 
// function calculation() {
//     if (nextOperation === "+") {
//         solution = (parseFloat(number1) + parseFloat(number2))
//         display.innerText = solution
//         console.log(solution)
//     } else if (nextOperation === "-") {
//         solution = (parseFloat(number1) - parseFloat(number2))
//         display.innerText = solution
//         console.log(solution)
//     } else if (nextOperation === "X") {
//         solution = (parseFloat(number1) * parseFloat(number2))
//         display.innerText = solution
//         console.log(solution)
//     } else if (nextOperation === "/") {
//         solution = (parseFloat(number1) / parseFloat(number2))
//         display.innerText = solution
//         console.log(solution)
//     }
// }