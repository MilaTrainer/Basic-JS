'use strict';
// 8 - не решено


// Задание 8

// Определить, является ли введенное пользователем 
// число num1 кратным введенному числу num2.
//  Обе переменные запрашиваем у пользователя, 
// ответ выводим в консоль.
let num1= +prompt ('Please enter a number');
let num2= +prompt ('Please enter a number');
if (num1 % num2 === 0){
    console.log('its true');
}
else {
    console.log('its false');
}
