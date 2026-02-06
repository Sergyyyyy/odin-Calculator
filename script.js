let allBtns = document.querySelectorAll(".calc-btns")
let input = document.getElementById("calc-input")

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

