const allCategories = document.querySelectorAll(".item");
for (let i = 0; i < allCategories.length; i++) { 
    console.log("Category: " + allCategories[i].querySelector("h2").innerText);
    console.log("Elements: " + allCategories[i].querySelectorAll("ul > li").length);
}