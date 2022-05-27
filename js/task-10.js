function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesElement = document.querySelector("#boxes");
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const numberElement = document.querySelector('input[type="number"]');

const createBoxes = amount => {
  let boxSize = 30;

  for (let i = 0; i < +numberElement.value; i++) {
    const newElement = document.createElement("div");
    
    newElement.classList.add("boxes__item");
    newElement.style.width = boxSize + "px";
    newElement.style.height = boxSize + "px";
    newElement.style.backgroundColor = getRandomHexColor();
    
    boxSize += 10;

    boxesElement.append(newElement);
  }
};

const destroyBoxes = () => {
  const boxesItems = document.querySelectorAll(".boxes__item");

  for (const item of boxesItems) {
    item.remove();  
  }
};

btnCreate.addEventListener("click", event => createBoxes());

btnDestroy.addEventListener("click", event => destroyBoxes());