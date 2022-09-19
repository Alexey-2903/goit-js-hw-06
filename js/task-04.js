let count = 0;
const counter = document.querySelector("#counter")
const countValue = document.querySelector("#value")
counter.firstElementChild.addEventListener("click", plus)
counter.lastElementChild.addEventListener("click", minus)

function plus () {
    count += 1
    countValue.textContent = count
}

function minus () {
    count -= 1
    countValue.textContent = count
}