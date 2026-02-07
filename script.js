let allBtns = document.querySelectorAll(".calc-btns")
let allOpBtns = document.querySelectorAll(".operator-btns")
let input = document.getElementById("calc-input")

function add(x, y){
    return x + y
}

function subtract(x, y){
    return x - y
}

function multiply(x, y){
    return x * y
}

function divide(x, y){
    return x / y
}

function operate(operator, x, y){
    
}

for (let i = 0; i <= allBtns.length; i++) {
    allBtns[i].addEventListener('click', function () {
        if (allBtns[i].innerHTML == "clear") {
            document.getElementById("clear-btn").onclick = function () {
                input.value = ""
            }
        }
        input.value += allBtns[i].innerHTML
    })
}