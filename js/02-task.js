const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


// const createProductList = ingredients => {
//     let html = "";
//     ingredients.forEach((item) => {
//         html += `<li>${item}</li>`;
//     });

//     const list = document.querySelector('#ingredients');
//     list.innerHTML = html;

//     // const itemRef = document.createElement ('li');
//     // itemRef.textContent = ingredient;

//     // const list = document.querySelector('#ingredients');
//     // list.append(itemRef);

//     // return list;
// };
// createProductList(ingredients);
// ====================================

// const createProductList = ingredients => {
//     const list = document.querySelector('#ingredients');
//     ingredients.forEach((item) => {
//         let li = document.createElement ('li');
//         li.textContent = item;
//         list.append(li);
//     });
// };
// createProductList(ingredients);

// ====================================

const list = document.querySelector('#ingredients');

let listItems = ingredients.reduce((acc, item) => {
    let li = document.createElement ('li');
    li.textContent = item;
    acc.push(li);
    return acc;
}, [])
console.log(listItems)

list.append(...listItems);


// ====================================

// const createIngredientList = (ingredients, item) => {

//     let li = document.querySelector('li');
//     li.textContent = item;
//     return li;
// }

// console.log(createIngredientList(ingredient, 'картошка'));

// const ingreadientCards = ingredients.map(ingredient => createIngredientList(ingredient, item));

// // console.log(ingreadientCards);

// const list = document.querySelector('#ingredients');
// console.log(list);

// list.append(...ingreadientCards);


