let allBtns = document.querySelectorAll(".calc-btns")
let input = document.getElementById("calc-input")

let operators = ["+", "-", "*", "/"]

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
        case "-":
            return subtract(x, y)
        case "*":
            return multiply(x, y)
        case "/":
            return divide(x, y)
    }
}

function testOperator() {
    console.log(operate("+", 3, 5));
    console.log(operate("-", 3, 5));
    console.log(operate("*", 3, 5));
    console.log(operate("/", 3, 5));
}

for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', function () {
        let value = allBtns[i].innerHTML
        if (value == "clear") {
            input.value = ""
            console.log("clear-works")
            return
        }
        if (value == "enter") {
            let holder = ""
            holder = input.value
            let newHolder = holder.replace(/\s/g, "")
            for (let i = 0; i < newHolder.length; i++){
                if (operators.includes(newHolder[i])){
                    operate(newHolder[i])
                }
            }
        }

        input.value += allBtns[i].innerHTML
    })
}


let sampleText = "Hello ! World"
let newer = sampleText.replace(/\s/g, "")

function findChar(char) {
    for (let i = 0; i < newer.length; i++) {
        if (newer[i] === char) {
            return `char ${char} is found!`;
        }
    }
    return `char ${char} is not found!`;
}

console.log(findChar("!"))