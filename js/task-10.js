function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// My code below

const divQuantity = document.querySelector("#controls > input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes() { 
  let divInclusion = [];
  for (let i = 0; i < divQuantity.value; i++) {
    let div = `<div style="width: ${i * 10 + 30}px; height: ${i * 10 + 30}px; display: inline-block; background: ${getRandomHexColor()}"></div>`
    divInclusion.push(div);
  };
  boxesContainer.insertAdjacentHTML("beforeend", divInclusion.join(""));
};

function destroyBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  };
};

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);