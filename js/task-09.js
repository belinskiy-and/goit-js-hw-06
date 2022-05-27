function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyElement = document.querySelector("body");
const btnElement = document.querySelector(".change-color");

console.log(bodyElement);
console.log(btnElement);

const clickAction = event => {
  event.preventDefault();

  bodyElement.style.backgroundColor = getRandomHexColor();
}

btnElement.addEventListener("click", clickAction);
