'use strict';
// Задание 1
// Запросите у пользователя его имя. Выведите в окошке (с помощью функции alert) 
// фразу: Привет, Николай! (вместо Николай должно показываться имя, которое ввел пользователь)

let userName = prompt ('Please enter your username');
let showHello = 'Hi ' + userName;
alert(showHello);


let number = +prompt('Please enter a number');
let forNumber = +prompt('Please enter a');
let result = number ** forNumber
console.log(result);