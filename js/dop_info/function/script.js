'use strict';
// сущесвуют 3 формы функций

// названия функций
// getName 
// shou 
let num = 20; // глобальная переменная

// 1 ФОРМА 
// FUNCTION DECLARATION
function showFirstMessage(text){
    console.log(text);
    let num1 = 20; // локальная переменная
}

showFirstMessage('Hello world'); //вызов функции
console.log(num);

// 2  ФОРМА
// FUNCTION EXPRETION
let foo = function () {};


// 3  ФОРМА 
// СТРЕЛОЧНЫЕ 
// использовать только в обработчике событий
()=> {}
const calc = a => a + b;

// иначе
const calc2 = (a, b) => { 
    console.log('1');
    return a + b;
}