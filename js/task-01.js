// My code below 
const allCategories = document.querySelectorAll(".item");

console.log("Number of categories: " + allCategories.length);

for (let i = 0; i < allCategories.length; i++) { 
    console.log("Category: " + allCategories[i].querySelector("h2").innerText);
    console.log("Elements: " + allCategories[i].querySelectorAll("ul > li").length);
}