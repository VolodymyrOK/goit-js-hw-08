const throttle = require('lodash.throttle');
const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const { form, input, textarea } = refs;
const KEY_STORAGE = 'feedback-form-state';
const data = {};
form.addEventListener('input', throttle(onEnterInput, 500));
form.addEventListener('submit', onClickSubmit);

checkStorage();

function onEnterInput(event) {
  if (event.target.name === 'email') {
    data.email = event.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
  }
  if (event.target.name === 'message') {
    data.message = event.target.value;
    localStorage.setItem(KEY_STORAGE, JSON.stringify(data));
  }
}

function checkStorage() {
  const dataStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));
  if (!dataStorage || !dataStorage.email || !dataStorage.message) return;
  input.value = dataStorage.email;
  textarea.value = dataStorage.message;
}

function onClickSubmit(event) {
  event.preventDefault();
  const dataStorage = JSON.parse(localStorage.getItem(KEY_STORAGE));
  if (!dataStorage || !dataStorage.email || !dataStorage.message) return;
  console.log(JSON.parse(localStorage.getItem(KEY_STORAGE)));
  event.target.reset();
  localStorage.clear();
}
