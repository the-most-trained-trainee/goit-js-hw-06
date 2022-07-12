const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// My code below 

const ingredientsList = ingredients.map(i => {
  const n = document.createElement("li");
  n.innerText = i;
  n.classList.add("item");
  return n;
});

const ingredientsContainer = document.querySelector("#ingredients");
ingredientsContainer.append(...ingredientsList);