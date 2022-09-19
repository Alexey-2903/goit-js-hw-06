const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const items = ingredients.map((element) =>{
  const total = document.createElement("li")
  total.textContent = element;
  total.className = "total";
  return total;
})

list.append(...items)