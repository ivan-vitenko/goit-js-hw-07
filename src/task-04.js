const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterEl: document.querySelector('#value'),
};

let counterValue = Number(refs.counterEl.textContent);

const increment = () => {
  counterValue += 1;
  refs.counterEl.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  refs.counterEl.textContent = counterValue;
};

refs.incrementBtn.addEventListener('click', increment);
refs.decrementBtn.addEventListener('click', decrement);
