const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsList = [];

ingredients.forEach(element => {
  const listItem = document.createElement('li');
  listItem.textContent = element;
  ingredientsList.push(listItem);
});

document.querySelector('#ingredients').append(...ingredientsList);
