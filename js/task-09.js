function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".change-color")
const body = document.body
const span = document.querySelector(".color")

color.addEventListener("click", final, getRandomHexColor)

function final () {
    body.style.backgroundColor = `${getRandomHexColor()}`
    span.textContent = `${getRandomHexColor()}`
}
