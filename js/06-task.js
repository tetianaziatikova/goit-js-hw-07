let inputRef = document.querySelector('#validation-input');
let inputLenght = inputRef.getAttribute('data-length');


inputRef.addEventListener('focus', () => {
    if (inputLenght === '6') {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
    }
    if (inputLenght !== '6') {
        inputRef.classList.add('invalid');
    }
});

