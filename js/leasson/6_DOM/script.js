'use strict';
// 1 метод по названию его ID custom-item (у li в html)
// элементы со страницы записываюсся в костанты 
// и потом не переопределяются 
// const customItem- похожее название перемнной, как ID в HRML
// поиск одного эоеммента по его ID
// getElementById - получить элемент по названию ID
 const customItem = document.getElementById('custom-item');
 console.log(customItem);

 // разница между 1 и 2 методами
// 1метод- находил один элемент  ------- 2метод - находит, что-то похожее на массив 
// находим DOM элементы на странице

// 2 метод - по классу 
// очень похожи на массив, но массивом не является и методы для массива - не подходят ему 
// но они могут перебираться 
// например, чтобы достучаться до опреденного параграфа нам нужен цикл for
// не работает метод forEach
// поиск всех элементов с классом, создает HTML коллекцию (псевдомассив)
// у кажого элемента есть свой индекс
// getElementById - получить элементы по названию ID
 const conteinerElements = document.getElementsByClassName('.conteiner');
console.log(conteinerElements);

// 3 метод искать элементы по тегам
const header = document.querySelector('header');

// тут ищет все селекторы 'p'
const paraghps = document.querySelectorAll('p');
const footerParaghp = document.querySelector('footer p');
const orderUl = document.querySelector('order');
console.log(header);
// к селектору обращаемся, как записывается в Css
// 

const firestLi = document.querySelector('ul li');



conteinerElements.forEach(item => console.log(item));
const test = document.querySelector('.conteiner');
console.log(test);

const h2Element = document.querySelector('h2');
h2Element.textContent = 'hi';
//я записываю сразу туда что-то записываю
h2Element.style.color = 'orange';


// добавить класс (название нужного класса ) .classList.add(назввние )
// удалить класс classList.remove
// добавить класс classList.toggle ('название')
// заменить содердимое атрибута cldss: .class.name

paraghps.forEach (element => element.classList.add('selected'));

document.querySelector('.last').remove();
footerParaghp.className = 'red-back';
// 
const themeBtn = document.createElement('button');//<button.></button>
themeBtn.innerText = 'Change page color';//<button.> Change page color</button>
themeBtn.style.backgroundColor = '#000000';
themeBtn.style.color = '#fff';
document.body.appendChild(themeBtn);
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


