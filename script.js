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
    if (x == 0 || y == 0) {
        return "Lol u dumdum."
    }
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

function evaluateAll() {
    let num1, num2, holder
    holder = input.value.replace(/\s/g, "")
    for (let i = 0; i < holder.length; i++) {
        if (operators.includes(holder[i])) {
            num1 = holder.slice(0, i)
            num2 = holder.slice(i + 1)

            if (!checkCorrectDecimals(num1) || !checkCorrectDecimals(num2)){
                input.value = "error"
                return
            }

            let result = operate(holder[i], Number(num1), Number(num2))
            input.value = `${result}`
            console.log("enter-works");
            break
        }
    }
}

function checkCorrectDecimals(x, y = null) {
    let combined = y === null ? String(x) : String(x) + String(y)
    let dotCount = 0

    for (let i = 0; i < combined.length; i++) {
        if (combined[i] === ".") {
            dotCount++
            if (dotCount > 1) {
                return false
            }
        }
    }
    return true
}


for (let i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click', () => {
        let value = allBtns[i].innerHTML
        if (value == "clear") {
            input.value = ""
            console.log("clear-works")
            return
        }
        if (value == "=") {
            evaluateAll()
            return
        }
        else if (operators.includes(value)) {
            let cleaned = input.value.replace(/\s/g, "")
            let hasOperator = operators.some(op => cleaned.includes(op))
            if (hasOperator) { evaluateAll() }
        }
        input.value += allBtns[i].innerHTML
    })
}