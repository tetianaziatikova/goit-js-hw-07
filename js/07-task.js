let inputRef = document.querySelector('#font-size-control');
let textRef = document.querySelector('#text');


inputRef.oninput = function() {
    text.style.fontSize = inputRef.value + "px";
};

console.dir(inputRef);
