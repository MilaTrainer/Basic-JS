'use strict';
// синтаксис обычной функции
// function copyArr(){}
// синтксис стрелочной функции
// обьявляем его как переменная и потом
// const copyArr = ()=> {}

// Задание 1

// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.

// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.

// Выведите в консоль строку:

// На компьютере с
//  ОС ... с помощью браузера ... я открыл страничку ... 

// (необходимые значения добавьте с помощью BOM)

// console.log('На компьютере с ОС "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36" с помощью браузера http://127.0.0.1:5500/js/home_works/6_leasson/index.html я открыл страничку ... ')

// // второй вариант 
// console.log(`На компьютере с ОС ${navigator.platform} с помощью браузера ${navigator.userAgent} я открыл страничку  ${location.href} `);

// Задание 2
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

// 2.2  нужно поменять содержимое li (textContent), а не просто вывести числа в консоль
li.forEach((item, index) => {
 item.innerText = index
});
console.log(li);


// Задание 3
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их

const forRemove = document.querySelectorAll('.forRemove');
forRemove.forEach(item => {
item.remove();}) // remove- удалить элемент


// Задание 4
// Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
// const textP= document.createElement('p');
// textP.style.fontSize = '36px';
// textP.style.fontWeight = '900';
// textP.textContent = 'Mila';
// console.log(textP);
// document.body.append(textP);

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
// 6 - почти получилось. Но нужно не просто добавлять числа на страницу, а формировать теги option и помещать числа в них, а сами option внутрь select.
// еще такоей вопрос: можно ли добавить с помощью class.add ,  не пробовала , т к я поняла это распространятеся только на название

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
const ul = document.querySelector('ul');

    clients.forEach(item => {
      const li = document.createElement('li');
      const status = item.order === true ? 'оплатил' : 'отменил';
      li.textContent= `клиент ${item.name} ${status} заказ`;
        // inner text
        // куда помещаем.append(что добавляем)
        ul.append(li);
        console.log(li);
    })

//     Задание 8
// 3 задание- не пояляется на страничке(в браузере, вижу в раздеое elements, что есть в body, вижу в консоле, но на страничку ссылок нет)
// Есть массив ссылок:
// let linksArr = ['https://www.amazon.com/', 'https://www.youtube.com/', 'https://devby.io/', 'https://www.google.com/', 'https://apple.com/'];
// // Вам нужно:
// // 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// const div = document.createElement('div');
// console.log(div);
// div.style.color= 'black';

// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// linksArr.forEach(item => {
// const link = document.createElement('a');
// link.href = item;
// link.setAttribute('target', '_blank');
// // link.textContent ='' для того, чтобы отображались на страничке
// console.log(link);
// div.append(link);
// })
// // 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
// document.body.append(div);

// Задание 9*
// вспомнить таблицу и как работать с массивами (через ForEach или For)
// Есть массив объектов с полями name, age. Например:
// const users = [
// {name: 'Mark', age: 12},
// {name: 'Olga', age: 30},
// {name:'Tom', age: 25},
// {name:'Den', age: 43}
// ]
// элементы в массиве являюся обьекты

// Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.

// ПОДСКАЗКА, Таблица состоит из строк (tr) и ячеек (td) внутри этих строк. Строк должно создаваться столько, сколько объектов внутри массива, и их количество может быть любым.

// находит существуещий тег со страницы
// const table = document.querySelector('table');
// console.log(table);

// users.forEach(item =>{
//     // для каждого элемента массива создаем строку tr
// const tr= document.createElement('tr');
// console.log(tr);}

// теперь создаем 2 ячейки
// const tdName= document.createElement('td');//создала ячкйку
// const tdAge= document.createElement('td');

// //после наполняем ячейки текстом
// tdName.innerText = item.name;//текстовый контект добавляет
// tdAge.innerText = item.age;//наполнила ячейку содержимым

// // сняала собираем tr
// tr.append(tdName);//поместила в строку нужную ячейку 
// tr.append(tdAge);// 

// // после tr помещаем в таблицу
// table.append(tr);//поместила строку в таблицу
// })


// // let table;
// // формируем в виде строки таблицу
// users.forEach(user => {
//     const trCode = 
//     // формируем строку tr, в каком виде , как в HTM записываем, записывем разметку в шаб.строку;
//     // добавляем целым шаблонным кусочком
//  `<tr>
//     <td> ${user.name} </td>
//     <td> ${user.age} </td>  
// </tr>`;
// //в шаблонной строке: строка + необходимый набор  тегов

// //теперь берем и помещаем в нужный HTML документ на странице
// // но шаблонную строку нельзя добавить методом append
// // append работает только с тегами, которые созданы внути JS 
// // либо созданы с помощью creatElement внутри JS, или со страницы найдены через qwerySelector
// // то есть это элементы , которые хранят в себе: теги, со своими свойствами, методами и тд.

// // если я создала такую строку, то можно добавить с помощтю INNERHTML
// // добавляет текст на страницу, целый кусок разметки можно добавлять 
// // то есть добавляю внутрь одного тега целый кусок HTML

// // table.innerHTML = trCode; //добавилось 1 раз на страницу, потому что идет присваивание

// table.innerHTML += trCode //+= означает - добавь к тому, что уже есть 
// // и теперь все 4 появились на страничке
// })




// Задание 10

// Написать в html тег заголовка с текстом "Сегодня:" После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату, пример: 27 октября 2022.


// Задание 11
// Есть верстка: https://teenscool1.notion.site...

// С помощью JavaScript:

// 1) Найти в коде список ul и добавить ему класс “list”.

// 2) На li через один (начиная с самого первого) установить класс “item”

// 3) На все ссылки в примере установить класс “custom-link”