// My code below 

let counterValue = 0;

const calculateButtons = document.querySelectorAll("button");
const incrementButton = calculateButtons[1];
const decrementButton = calculateButtons[0];
const scoreField = document.querySelector("#value");

incrementButton.addEventListener("click", () => {
    counterValue++;
    scoreField.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
    counterValue--;
    scoreField.textContent = counterValue;
});