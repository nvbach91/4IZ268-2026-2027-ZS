// DOM = document object model
const heading1 = document.querySelector('#heading-1');
const body = document.querySelector('body');
const newButton = document.createElement('button');
newButton.textContent = 'Click me';
newButton.addEventListener('click', () => {
    heading1.textContent = 'DOM Manipulated';
});
newButton.addEventListener('mouseover', () => {
    heading1.textContent = 'Hi mouse!';
});
newButton.addEventListener('mouseout', () => {
    heading1.textContent = 'Bye mouse!';
});
body.appendChild(newButton);



const registrationForm = document.querySelector('#registration-form');
registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(registrationForm);
    const data = Object.fromEntries(formData);
    const email = formData.get('email');
    console.log({ email });
    // ...
});








