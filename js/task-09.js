function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// My code below 

const changeColorButton = document.querySelector(".change-color");
const pageBody = document.querySelector("body");
const colorDisplay = document.querySelector(".color");

changeColorButton.addEventListener("click", () => { 
  let currentColor = getRandomHexColor();
  pageBody.style.background = currentColor;
  colorDisplay.textContent = currentColor;
})