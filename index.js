const formName = document.getElementById('name');
const email = document.getElementById('email');
const submit = document.getElementById('submit');
const form = document.getElementById('myForm');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

submit.addEventListener('click', (e) => {

const validateForm = () => {
    e.preventDefault();
    let isValid = true;

    if (formName.value.trim() === '') {
        formName.classList.add('name-error');
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        formName.classList.remove('name-error');
        nameError.textContent = '';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.classList.add('email-error');
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        email.classList.remove('email-error');
        emailError.textContent = '';
    }

    return isValid;
}
validateForm();
});


