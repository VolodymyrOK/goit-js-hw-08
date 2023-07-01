const throttle = require('lodash.throttle');
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const { form, input, textarea } = refs;
const KEY_IN_STORAGE = 'feedback-form-state';
const dataInStorage = {};

checkStorage();

form.addEventListener('input', throttle(onEnterInput, 500));
form.addEventListener('submit', onClickSubmit);

function onEnterInput(event) {
  if (event.target.name === 'email') {
    dataInStorage.email = event.target.value;
  }
  if (event.target.name === 'message') {
    dataInStorage.message = event.target.value;
  }
  localStorage.setItem(KEY_IN_STORAGE, JSON.stringify(dataInStorage));
}

function checkStorage() {
  const dataInStorage = JSON.parse(localStorage.getItem(KEY_IN_STORAGE));
  if (!dataInStorage || !dataInStorage.email || !dataInStorage.message) return;
  console.log(dataInStorage);
  input.value = dataInStorage.email;
  textarea.value = dataInStorage.message;
}

function onClickSubmit(event) {
  event.preventDefault();
  const dataInStorage = JSON.parse(localStorage.getItem(KEY_IN_STORAGE));
  if (!dataInStorage || !dataInStorage.email || !dataInStorage.message) return;
  console.log(JSON.parse(localStorage.getItem(KEY_IN_STORAGE)));
  event.target.reset();
  localStorage.clear();
}
