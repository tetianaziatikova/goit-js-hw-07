// const h1 = querySelector('h1');
// console.dir(h1);

// h1.textContent = 'Hello ';
// const inputName = prompt('Add name');

// h1.textContent += inputName;

// =========================================

// Универсальная функция по созданию списка

// const groupList = document.querySelector('.group-list');
// console.log(groupList);

// const createList = (ul, arr) => {
//     arr.forEach(element => {
//         let elem = document.createElement('li');
//         ul.append(elem);
//         elem.textContent = element; 
//     });
// };

// createList (groupList, arr);

// =========================================

// const list = document.querySelectorAll('.item').length;
// console.log(`В списке ${list} категории`);

// const ul = document.querySelector('#catehgories');
// const items = document.querySelectorAll('.item');
// // console.log(li);

// items.forEach((node) => {
//     let h2 = node.querySelector('h2');
//     let li = node.querySelectorAll('li');
//     console.log(`Категория: ${h2.textContent} количество: ${li.length}`);

// })

// =============================================

// const ingredients = [
//     'Картошка',
//     'Грибы',
//     'Чеснок',
//     'Помидоры',
//     'Зелень',
//     'Приправы',
// ];

// const createList = ingredients => {
//     const list = document.querySelector('#ingredients');
//     ingredients.forEach((item) => {
//         let li = document.createElement('li');
//         li.textContent = item;
//         list.append(li);
//     });
// };
// createList(ingredients);
// =============================================

// const list = document.querySelector('#ingredients');

// let listItems = ingredients.reduce((acc, item) => {
//     let li = document.createElement('li');
//     li.textContent = item;
//     acc.push(li);
//     return acc; 
// }, []);

// list.append(...listItems);

// =============================================

// const list = document.querySelector('#ingredients');

// let listItems = ingredients.map(ingredient => {
//     let li = document.createElement('li');
//     li.textContent = ingredient;

// })

// console.log(listItems)

// =============================================

//создание дом-узлов
// const titleRef = document.createElement('h2');
// titleRef.textContent = 'site-title';
// titleRef.classList.add('item');
// titleRef.id = 'title';
// console.log(titleRef);
// =============================================

// const product = {
//     name: 'fg',
//     description: 'ldkmsl',
//     price: 12,
//     valiable: true,
// };


// const containerRef = document.createElement('div');
// containerRef.classList.add('product-card');

// const titleRef = document.createElement('h2');
// titleRef.textContent = product.name;
// titleRef.classList.add('product-card__name');

// const descrRef = document.createElement('p');
// descrRef.textContent = product.description;

// const priceRef = document.createElement('p');
// priceRef.textContent = product.price;

// console.log(containerRef);
// console.log(titleRef);
// console.log(descrRef);
// console.log(priceRef);

// собираем дом дерево, (когда вставить один елемент)
// containerRef.appendChild(titleRef);
// containerRef.appendChild(descrRef);
// containerRef.appendChild(priceRef);
// console.log(containerRef);

// или так собираем дом дерево, (когда вставить много елементов) 

// containerRef.append(titleRef, descrRef, priceRef);
// console.log(containerRef);

// добавляем наш контейнер в уже существующий код в html
// const cardGalerry = document.querySelector('#gallery');
// cardGalerry.appendChild(containerRef);

// =============================================

//пример више пишем в функции
// const products = {
//     name: 'fg',
//     description: 'ldkmsl',
//     price: 12,
//     valiable: true,
// };

// const createProductCard = product => {

//     const containerRef = document.createElement('div');
//     containerRef.classList.add('product-card');

//     const titleRef = document.createElement('h2');
//     titleRef.textContent = product.name;
//     titleRef.classList.add('product-card__name');

//     const descrRef = document.createElement('p');
//     descrRef.textContent = product.description;

//     const priceRef = document.createElement('p');
//     priceRef.textContent = `Цена ${product.price} кредитов`;

//     containerRef.append(titleRef, descrRef, priceRef);
    
//     return containerRef;
// };

// // console.log(createProductCard(products[0]));
// //или
// // products.forEach(product => {
// //     console.log(createProductCard(product));
// // });
// //или
// const productCards = products.map(product => createProductCard(product));
// console.log(productCards);

// const cardGallery = document.querySelector('#gallery');
// console.log(cardGallery);

// cardGallery.append(...productCards);

// =============================================

//СОБЫТИЯ

// const targetBtnRef = document.querySelector('.js-target-btn');

// targetBtnRef.addEventListener('click', () => {
//     console.log('clicked!');
// });

//===
// const targetBtnRef = document.querySelector('.js-target-btn');
// const addListenerBtnRef = document.querySelector('.js-add-listener');
// const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// const doStuffOnClick = () => {
//     console.log('clicked!');
// };

// addListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.addEventListener('click', doStuffOnClick);
// });

// removeListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.removeEventListener('click', doStuffOnClick);
// });

//===
//обэкт события

// const targetBtnRef = document.querySelector('.js-target-btn');
// const addEventListener = document.querySelector('.js-add-listener');
// const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// targetBtnRef.addEventListener('click', (event) => { // event, это параментр (событие мыши)
//     console.log(event);
//     console.log(event.target); // target - это свойство у обэкта события - event. Используеь event.targetесли нужно достучаться к елементу
// });

//===
//события форм

// const formRef = document.querySelector('.js-register-form');

// formRef.addEventListener('submit', event => {
//     event.preven.Default(); // нужен для предовращения собие в браузере, например перезагрузку страници

//     console.log(event.target.elements);// чтоб достучатся до input, checkbox 

//     const formElements = event.target.elements;// или так достучатся до input, checkbox 
//     console.log(formElements);

//     console.log(formElements.subscription.value); // чтоб записать значение выбраного chebox

//     const formRef = event.target;//автоматически собирает все куски и запихивает все в одну форму
//     const formData = new FormData(formRef);
// });

// formRef.addEventListener('submit', event => {
//     event.preven.Default(); // нужен для предовращения собие в браузере, например перезагрузку страници

//     const formRef = event.target;//автоматически собирает все куски и запихивает все в одну форму
//     const formData = new FormData(formRef);

//     formData.forEach((value, key) => {// forEach - это не стандартныйб он другой
//         console.log('value: ', value);
//         console.log('key: ', key);
//     });
// });

//===
// если нужно отрправить на бэкенд
// formRef.addEventListener('submit', event => {
//     event.preven.Default(); // нужен для предовращения собие в браузере, например перезагрузку страници

//     const formRef = event.target;//автоматически собирает все куски и запихивает все в одну форму
//     const formData = new FormData(formRef);

//     const submitteData = {};

//     formData.forEach((value, key) => {// forEach - это не стандартныйб он другой
//         console.log('value: ', value);
//         console.log('key: ', key);

//         submitteData[key] = value;
//     });

//     console.log(submitteData);
// });

//===
//фокус мыши

// const boxRef = document.querySelector('.js-box');

// boxRef.addEventListener('mouseenter', event => { // фокус есть
//     event.target.classList.add('box--active');
// });

// boxRef.addEventListener('mouseleave', event => {
//     event.target.classList.remove('box--active');
// });

