'use strict';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

function readFormData(form) {
  const email = form.email.value;
  const message = form.message.value;
  return {
    email,
    message,
  };
}

form.addEventListener('input', event => {
  event.preventDefault();
  const data = readFormData(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);
});

const inputData = localStorage.getItem(STORAGE_KEY);
if (inputData) {
  const data = JSON.parse(inputData);
  form.email.value = data.email;
  form.message.value = data.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();

  console.log(readFormData(event.currentTarget));
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
