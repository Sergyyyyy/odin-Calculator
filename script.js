let allBtns = document.querySelectorAll(".calc-btns")
let input = document.getElementById("calc-input")

function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}

function operate(operator, x, y) {
    switch (operator) {
        case "+":
            return add(x, y)
            break;
        case "-":
            return subtract(x, y)
            break;
        case "*":
            return multiply(x, y)
            break;
        case "/":
            return divide(x, y)
            break;
    }
}

for (let i = 0; i <= allBtns.length; i++) {
    allBtns[i].addEventListener('click', function () {
        if (allBtns[i].innerHTML == "clear") {
            document.getElementById("clear-btn").onclick = function () {
                input.value = ""
            }
            if (allBtns[i].innerHTML == "enter") {
                document.getElementById("enter-btn").onclick = function () {
                    let currentOp = allBtns[i]
                    let value = operate(currentOp, allBtns[i], allBtns[i])
                    input.value += value
                }
            }
        }
        input.value += allBtns[i].innerHTML
    })
}