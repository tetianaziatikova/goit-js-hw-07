const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('change', event => {
    nameRef.textContent = event.target.value;
});


//рефакторинг
// const inputRef = document.querySelector('#name-input');
// const nameRef = document.querySelector('#name-output');

// inputRef.addEventListener('change', handleInputChange);

// function handleInputChange(event) {
//     nameRef.textContent = event.target.value;
// };