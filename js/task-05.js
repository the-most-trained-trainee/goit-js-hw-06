// My code below 

const checkingInput = document.querySelector("#name-input");
const displaySpan = document.querySelector("#name-output");

checkingInput.addEventListener("input", () => {
    displaySpan.textContent = checkingInput.value === "" ? "Anonymous" : checkingInput.value;
});