const categoriesEl = document.querySelector('#categories').children;

console.log(`В списку ${categoriesEl.length} категорії`);
console.log('');

Array.from(categoriesEl).forEach(element => {
  console.log(`Категорія: ${element.querySelector('h2').textContent}`);
  console.log(
    `Кількість елементів: ${element.querySelector('ul').children.length}`,
  );
  console.log('');
});
