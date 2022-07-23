function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// My code below

const divQuantity = document.querySelector("#controls > input");
const calculateButtons = document.querySelectorAll("button");
const createButton = calculateButtons[0];
const destroyButton = calculateButtons[1];
const boxesContainer = document.querySelector("#boxes");
let divInclusion = [];


function createBoxes() { 
  for (let i = 0; i < divQuantity.value; i++) {
    let div = document.createElement("div");
    div.style.width = `${i * 10 + 30}px`;
    div.style.height = `${i * 10 + 30}px`;
    div.style.display = "inline-block"
    div.style.background = getRandomHexColor();
    divInclusion.push(div);
  };
  boxesContainer.append(...divInclusion);
};

function destroyBoxes() {
  while (boxesContainer.firstChild) {
    boxesContainer.removeChild(boxesContainer.firstChild);
  };
};

createButton.addEventListener("click", createBoxes);
destroyButton.addEventListener("click", destroyBoxes);


