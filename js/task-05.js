const inputElement = document.querySelector("#name-input");
const nameElement = document.querySelector("#name-output");

console.log(inputElement);
console.log(nameElement);

const inputAction = event => event.currentTarget.value ? nameElement.textContent = event.currentTarget.value : nameElement.textContent = "Anonymous";

inputElement.addEventListener("input", inputAction);
