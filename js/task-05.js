// My code below 

const checkingInput = document.querySelector("#name-input");
const displaySpan = document.querySelector("#name-output");

checkingInput.addEventListener("input", () => {
    checkingInput.value === "" ? displaySpan.textContent = "Anonymous" : displaySpan.textContent = checkingInput.value;
});