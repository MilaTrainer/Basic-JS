'use strict';
/** 
 Задание 11

Есть верстка: https://teenscool1.notion.site...

С помощью JavaScript:

1) Найти в коде список ul и добавить ему класс “list”.

2) На li через один (начиная с самого первого) установить класс “item”

3) На все ссылки в примере установить класс “custom-link”


 */


const ulElement = document.querySelector('ul');
ulElement.classList.add('list');

const liElement = document.querySelectorAll('li');
for(let i =0; i < liElement.length; i= i +2){
    liElement[i].classList.add('item');
}

const aElement = document.querySelectorAll('a');

aElement.forEach(i => {
i.classList.add('custom-link');
});
console.log(aElement);

