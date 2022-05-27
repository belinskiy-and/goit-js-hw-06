let counterValue = 0;

const valueElement = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrementEvent = event => valueElement.textContent = --counterValue;
const incrementEvent = event => valueElement.textContent = ++counterValue;

decrementBtn.addEventListener("click", decrementEvent);
incrementBtn.addEventListener("click", incrementEvent);