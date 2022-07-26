// My code below 

let counterValue = 0;

const incrementButton = document.querySelector("[data-action=increment]");
const decrementButton = document.querySelector("[data-action=decrement]");
const scoreField = document.querySelector("#value");

incrementButton.addEventListener("click", () => {
    counterValue += 1;
    scoreField.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    scoreField.textContent = counterValue;
});