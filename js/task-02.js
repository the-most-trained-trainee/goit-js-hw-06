const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// My code below 

const ingredientsList = ingredients.map(ingredientsItem => {
  const ingredientslistItem = document.createElement("li");
  ingredientslistItem.innerText = ingredientsItem;
  ingredientslistItem.classList.add("item");
  return ingredientslistItem;
});

const ingredientsContainer = document.querySelector("#ingredients");

ingredientsContainer.append(...ingredientsList);