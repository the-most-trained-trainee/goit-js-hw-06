// My code below 

const fontSetInput = document.querySelector("#font-size-control");
const textOutPut = document.querySelector("#text");

fontSetInput.addEventListener("input", () => {
    textOutPut.style.fontSize = `${fontSetInput.value}px`;
});