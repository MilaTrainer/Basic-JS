'use strict';
// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:

// На компьютере с ОС ... с помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)

console.log('На компьютере с ОС "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36" с помощью браузера http://127.0.0.1:5500/js/home_works/6_leasson/index.html я открыл страничку ... ')

// второй вариант 
console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку  ${location.href} `);

// Задание 2


// В файле html есть разметка (добавьте ее в свой файл html):

// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>

// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).

const liList = document.querySelectorAll('li');

liList.forEach(item=>
    console.log(item.textContent)
);

// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
liList.forEach((item, i)=> 
   console.log(i));


//  второй вариант с ID еше решаю
// 2.1. Вывести в консоль каждое из имен (содержимое каждого li).
const list = document.getElementById('list');
console.log(list.textContent);  
// 2.2. Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)
// for (let i List) {
//         console.log(list.innerText= i)
//     }
// list.innerText = 'i';
// console.log(list);

// for(let i=0; i < list.length; i++) {
//     if(i >= list.length ){
//         console.log(list.innerText = i)
//     }
// }

// Задание 3
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их
const forRemove = document.querySelectorAll('.forRemove');
forRemove.forEach(item => {
item.remove();}) // remove- удалить элемент


// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
const textP= document.createElement('p');
textP.style.fontSize = '36px';
textP.style.fontWeight = '900';
textP.textContent = 'Mila';
console.log(textP);
document.body.append(textP);

// Задание 5
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
const getTagNameColorNameContant = function(name, color, contant){
    const tagName= document.createElement(name);
    tagName.style.color = color;
    tagName.textContent = contant;
    return tagName
}
console.log(getTagNameColorNameContant('p', 'blue', 'text for Mila'));
document.body.appendChild(getTagNameColorNameContant('p', 'blue', 'text for Mila'));

// Задание 6
// Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.

// Задание 7
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

const clients = [
    {name: "Женя", order: true},
    {name: "Кристина", order: true},
    {name: "Павел", order: false},
    {name: "Виолетта", order: false},
    {name: "Костя", order: true}
    ]

    clients.forEach(item =>{
        
    })


//     Задание 8
// Есть массив ссылок:

// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];

// Вам нужно:

// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег

// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")


// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY



// Задание 9*
// Есть массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},

// {name:'Den', age: 43}
// ]

// Создать в html таблицу (table).

// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.

// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.


// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},

// {name:'Den', age: 43}
// ]
// append

// users.forEach(user => {
// const tr = documetn.createElement('tr');
// const tdName = documetn.createElement('td'); 
// const tdAge = documetn.createElement('td'); 
// tdName.innerText = user.name; //текстовый контект добавляет
// tdAge.innerText= user.age;//наполнила ячейку
// tr.append(tdName);//поместила в ячейку
// table.append(tr);
// })

// let table;
// users.forEach(user => {
// table.innerHTML += `
// <tr>
//     <td> ${user.name} </td>
//     <td> ${user.age} </td>  
// </tr>
// `;
// // table.innerHTML = trCode;
// })




// Задание 10

// Написать в html тег заголовка с текстом "Сегодня:" После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату, пример: 27 октября 2022.


// Задание 11
// Есть верстка: https://teenscool1.notion.site...

// С помощью JavaScript:

// 1) Найти в коде список ul и добавить ему класс “list”.

// 2) На li через один (начиная с самого первого) установить класс “item”

// 3) На все ссылки в примере установить класс “custom-link”