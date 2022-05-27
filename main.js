// const { speedOfLightDependencies } = require("mathjs");

//definitions
let numberArr = document.querySelectorAll('.number');
let operationArr = document.querySelectorAll('.operation');
let display = document.querySelector('.display');
let clearAll = document.querySelector('.clear');
let total = document.querySelector('.equal')

//numbers+operation storage
let number1 = '';
let number2 = '';
let nextOperation = ''; //

//event listen numbers
for (let num of numberArr) {
    num.addEventListener("click", function (event) {
        if (number1 && nextOperation) {
            number2 += event.target.innerText;
            display.innerText += event.target.innerText;
        } else {
            number1 += event.target.innerText;
            display.innerText += event.target.innerText;
        }
        console.log(event.target.innerText)
    });
}

//event listen operation 
for (let operation of operationArr) {
    operation.addEventListener('click', function (event) {
        if (number1) {
            nextOperation = event.target.innerText;
            display.innerText += " " + event.target.innerText;
        }
        console.log(event.target.innerText);
    })
}

//store total as number1


//event listen clear
clearAll.addEventListener("click", function (event) {
    display.innerText = " ";
})

//event listen total
total.addEventListener("click", function (event) {
    if (number1 && number2) {
        calculation();
    }
});


// // //function calculation 
function calculation() {
    if (nextOperation === "+") {
        solution = (parseFloat(number1) + parseFloat(number2))
        display.innerText = solution
        console.log(solution)
    } else if (nextOperation === "-") {
        solution = (parseFloat(number1) - parseFloat(number2))
        display.innerText = solution
        console.log(solution)
    }
}