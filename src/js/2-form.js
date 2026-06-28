const formData = { email: '', message: '' };
const localStorageKey = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

if (localStorage.getItem(localStorageKey) != null) {
  try {
    console.log(JSON.parse(localStorage.getItem(localStorageKey)));
    const localformData = JSON.parse(localStorage.getItem(localStorageKey));
    form.email.value = localformData.email;
    form.message.value = localformData.message;
  } catch (error) {
    console.error(error);
  }
}

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const userEmail = form.email.value;
  const userPassword = form.message.value;

  if (userEmail == '' || userPassword == '') {
    alert('Fill please all fields');
    return false;
  }

  console.log(formData);
  form.reset();
  localStorage.removeItem(localStorageKey);
  return false;
});

form.addEventListener('input', evt => {
  const userEmail = form.email.value.trim();
  const userPassword = form.message.value.trim();

  formData.email = userEmail;
  formData.message = userPassword;

  localStorage.setItem(localStorageKey, JSON.stringify(formData));

  return false;
});
