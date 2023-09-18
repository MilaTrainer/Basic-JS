'use strict';
// задания 2 и 6 постралась учесть ваши комментарии и ихменить решение 
// остальные задачи новые для меня

// Задание 2
// 2.2  нужно поменять содержимое li (textContent), а не просто вывести числа в консоль

// В файле html есть разметка (добавьте ее в свой файл html):
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// В файле html есть разметка (добавьте ее в свой файл html):
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
li.forEach(item => {
console.log(item);
})

// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
// изменила
li.forEach((item, index) => {
 item.innerText = index
});
console.log(li);

// Задание 6 
// 6 -почти получилось. Но нужно не просто добавлять числа на страницу, а формировать теги option и помещать числа в них, а сами option внутрь select.

// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

const select = document.querySelector('select');

for(let i = 1960; i <= 2020; i++){ 
    const option = document.createElement('option');
    const text = document.createElement('text');
    text.textContent = i;
    option.append(text);
    select.append(option) 
}

// Задание 10

// Написать в html тег заголовка с текстом "Сегодня:" После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату, пример: 27 октября 2022.

let pTextDate = document.querySelector('p');

const date = new Date();

let options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
};

pTextDate.textContent = date.toLocaleString('tu-Ru',options);
console.log(pTextDate);