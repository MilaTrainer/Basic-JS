'use strict';
const h2Element = document.querySelector('h2'); 
const paragraphs = document.querySelectorAll('p');
const footerParagraph = document.querySelector('footer p');
// нахидим (DOM элементы) на странице
// ПОИСК ЭЛЕМЕНТОВ НА СТРАНИЦЕ

// 1 метод GET ELEMENT BY ID
// поиск одного эоеммента по его ID
// getElementById - получить элементы по названию ID
//  по названию его ID custom-item (у li в html)
// элементы со страницы записываюсся в костанты 
// и потом не переопределяются 
// const customItem- похожее название перемнной, как ID в HRML
// getElementById -иди в document и получи элемент по названию ID
// всю констуркцию надо записать в переменную
 const customItem = document.getElementById('custom-item');
 console.log(customItem);

 // разница между 1 и 2 методами
// 1метод- находил один элемент  ------- 2метод - находит, что-то похожее на массив (псевдомассив)
// находим DOM элементы на странице

// 2 метод -искать элементв по названию классу 
// поиск всех элементов с классом, создает HTML коллекцию (псевдомассив)
// очень похожи на массив, но массивом не является и методы для массива - не подходят ему 
// но они могут перебираться 
// например, чтобы достучаться до опреденного параграфа нам нужен цикл for
// не работает метод forEach
// у кажого элемента есть свой индекс

 const conteinerElements = document.getElementsByClassName('conteiner');
console.log(conteinerElements);


// 3 МЕТОД
// поиск всех элементов по тегу
// getElementsByTagName - получить элементы по названию тега
// находим все параграфы 'p'
// получим псевдомассив, HTML коллекцию
const paragraps3= document.getElementsByTagName('p');
console.log(paragraps3);


// 4 метод
// поиск элементов по CSS селектору
// ищем 2 заголовка первого уровня 
// querySelector - запрос селектора (это термин CSS: header, img, footer, p)
// пишем в ('как обращались бы в CSS')
// #id, .selector, header, img, footer, p, h2
const headers = document.querySelectorAll('h2, h1');
console.log(headers);


// разница между 3 и 4 методами
// 3метод- находии один элемент  ------- 4метод - находит все элементы
// находим DOM элементы на странице



// 4 метод 
// тут ищет все селекторы 'p'
const paraghps = document.querySelectorAll('p');
const footerParaghp = document.querySelector('footer p');
const orderUl = document.querySelector('order');
console.log(paraghps);
// к селектору обращаемся, как записывается в Css


const firestLi = document.querySelector('ul li');

const conteinerElements1 = document.querySelectorAll('.conteiner');

conteinerElements1.forEach(item => console.log(item));
console.log(conteinerElements1);
// выведи все эдементы в консоль по отдельностиб сначал один, потом второй
// и по очереди с каждым дивом что-то делается

// мы их ищем для того, чтобы:
//  с ними что-то делать
// их можно менять
// их содержимое можно менять
// в них внутрь можно что-то помещать
// можно создавать на лету какие-то элементы в них, которые раньше в них не было, они появляюся при нажатии кнопки например



// сверху находится переменная h2
// модно посмотреть его текстовое содержимое 
// и поменять это текстовое содержимое налету
h2Element.textContent = 'hi';
//я записываю сразу туда что-то записываю
// в браузе на странице появилось 'hi'

// также можно менять стиль налету 
// поменяла цвет
// у яstyle есть все CSS свойста 
// в данном примере color
h2Element.style.color = 'orange';

// удалить один элемент, текст из заголовка - пустые ковычки
h2Element.textContent = ''; 


// добавить класс (название нужного класса) .classList.add(назввние )
// добавить класс .classList.toggle ('название')
// toggle без события не отработаешь (вкл/выкл, как кнопка работает)
// удалить класс .classList.remove
// заменить содердимое атрибута class: .className= 'название'


// удалить один элемент, текст из заголовка - пустые ковычки

// всем прораграфам, которые есть на странице: добавить класс selected (название нужного класса ) .
// т к в paragraphs - лежит целый массив, его нужно перебрать и потом каждому элементу что-то назначать
// есть псевдомассив и перебираем его с помтщью метода ForEach
// как параметр принимаем (item/ element)
//  далее стрелка => и что мы этому элемнету делаем 
// classList  обращение к списку имеющихся классов
// .add - хотим добавить что-то у этому списку
// ('тут пишем то название , которое хочу добавить в список уже имеющихся классов')
paragraphs.forEach (element => element.classList.add('selected'));
// JS переберет параграыф и добавить каждому такой класс 'selected'
// с помощью JS можем управлять наличие, отсутвие или заменять эти классы, переключать эти классы
// динамически можем работать с классами 

// добавить класс к каждому второму
// через счетчик for i


// удалить класс classList.remove
// удалить элемент , можно сразу найти без создания переменной и сразу удалить его
document.querySelector('#last').remove();

// удвлила один элемент с ID
// footerParaghp.className = 'red-back'

// есть один параграф, значение классов затереть и вместо этого сделать(присвоить) другой класс 
// className это свойсво(не метод) и поэтому идет присваивание новго класса  'red-back'
footerParaghp.className = 'red-back';
//этому элементу переназначили класс


// ИТОГ
// CLAssLIST: работает со списком кслассов
//достает какие-то классы, добавляет туда какие-то классы, меняет, переключает какие-то классы
// метод, как функция вызывется со скобочками()

// CLAssNAME - это свойсво
// он заменяет собой все , что там было в этих классах
// идет присваивание



// const themeBtn = document.createElement('button');//<button.></button>
// themeBtn.innerText = 'Change page color';//<button.> Change page color</button>
// themeBtn.style.backgroundColor = '#000000';
// themeBtn.style.color = '#fff';
// document.body.appendChild(themeBtn);
// Задание 7

// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// Перебирать массив, для каждого элемента массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом


// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.

// const clients = [
//     {name: "Женя", order: true},
//     {name: "Кристина", order: true},
//     {name: "Павел", order: false},
//     {name: "Виолетта", order: false},
//     {name: "Костя", order: true}
//     ]

    // clients.forEach(item =>{
    //     const li = document.createElement("li");
    //     const status = item.order === true ? 'оплатил' : 'отменил'
    //     li.textContent = `Клиент ${item.name} + ${status}`; 
    //     orderUrl.append(li);
    //     // orderList.push(li); 
    // })


