const counter = {
    inc: document.querySelector('[data-action="increment"]'),
    dec: document.querySelector('[data-action="decrement"]'),
    val: document.querySelector('#value'),
};

let counterValue = 0;

const increment = () => {
    counterValue += 1;

    counter.val.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    counter.val.textContent =counterValue;
};

counter.inc.addEventListener('click', increment);
counter.dec.addEventListener('click', decrement);
