import throttle from 'lodash.throttle';

const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInput, 500));

function onInput(e) {
  formData[e.target.name] = e.target.value;
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', formDataJSON);
}

populateInput();

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);

  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function populateInput() {
  const savedMessageJSON = localStorage.getItem('feedback-form-state');
  if (savedMessageJSON) {
    const savedMessage = JSON.parse(savedMessageJSON);
    refs.email.value = savedMessage.email;
    refs.textarea.value = savedMessage.message;
  }
}
