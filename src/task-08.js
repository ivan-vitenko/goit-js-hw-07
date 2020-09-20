const refs = {
  inputEl: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
  parentDiv: document.querySelector('#boxes'),
};

let divElements = [];

refs.renderBtn.addEventListener('click', createBoxes);

refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  divElements.length = Number(refs.inputEl.value);

  for (let i = 0; i < divElements.length; i += 1) {
    divElements[i] = document.createElement('div');

    if (i !== 0) {
      divElements[i].style.width =
        parseInt(divElements[i - 1].style.width) + 10 + 'px';

      divElements[i].style.height =
        parseInt(divElements[i - 1].style.height) + 10 + 'px';
    } else {
      divElements[i].style.width = 30 + 'px';
      divElements[i].style.height = 30 + 'px';
    }

    divElements[i].style.backgroundColor =
      '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  refs.parentDiv.append(...divElements);
}

function destroyBoxes() {
  refs.parentDiv.innerHTML = '';
}
