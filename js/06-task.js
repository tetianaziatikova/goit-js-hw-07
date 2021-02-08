let inputRef = document.querySelector('#validation-input');
let inputLenght = inputRef.dataset.length;
// console.log(inputLenght);

inputRef.addEventListener('blur', onInputBlur)
inputRef.addEventListener('input', inputValueHandler)

function onInputBlur({target: {value}}) {
    value.length === 6 ? inputRef.classList.add('valid') : inputRef.classList.add('invalid')
}

function inputValueHandler() {
    inputRef.classList.remove('valid', 'invalid')
}

// function onInputBlur(event) {
//     console.log(event.target.value.length);
//     let length = event.target.value.length
//     length === 6 ? inputRef.classList.add('valid') : inputRef.classList.add('invalid')
// }



// inputRef.addEventListener('blur', () => {
//     if (inputLenght === '6') {
//         inputRef.classList.remove('invalid');
//         inputRef.classList.add('valid');
//     } else if (inputLenght > '6') {
//         console.log('invalid');

//         inputRef.classList.add('invalid')
//     };

    
// });




