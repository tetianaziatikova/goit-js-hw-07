// const titleRef = document.querySelectorAll('.item').length;
// console.log(`В списке ${titleRef} категории`);



// const title = document.querySelector('h2').textContent;
// const amountElement = [...document.querySelector('ul').childNodes].filter((node) => node.tagName === 'LI').length;

// console.log(`Категория: ${title}, Количество элементов: ${amountElement}`)



const list = document.querySelector('#categories');
// console.log(list);

const items = list.querySelectorAll('.item');
// console.log(items.length);


items.forEach((node) => {
    let h2 = node.querySelector('h2');
    let li = node.querySelectorAll('li');
    console.log(`Категория: ${h2.textContent}, Количество элементов: ${li.length}`)
})
