const refs = {
  inputEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.textEl.style.fontSize = Number(refs.inputEl.value) + 'px';
refs.inputEl.addEventListener('input', onInputChange);

function onInputChange() {
  refs.textEl.style.fontSize = Number(refs.inputEl.value) + 'px';
}
