'use strict';
/** 
встроенные в JS обькты, классы

классы пищутся в JS с заглавных букв
это встроенные в JS понятия -которые обозначают некий прототип,

Array, Object, Math, Date, String, Number  (Class) 
(это не классы из Css, ничего общего нет)

--- класс Object - это глобальный прототип для всех обьектов

--- Array - это глобальный прототип, класс, для всех  массивов, который я буду создавать

также можно создавать свои классы

*/

// создаем новвый массив с помощью ключеваго словао NEW
// и записываем этот новый массив в переменную numbers
let numbers = new Array();
let name = new String(); //создали строку
console.log(name, numbers);



// Date, time
// создаем текущую дату, забираем ее из браузера пользователя
// обьект Data
let nowDate = new Date();
// из этой переменной можно выводить, отдельно: часы, минуты, даты, для этогт существую методы (строка 75)
console.log(nowDate);

// дата и время в формате в данном чассовом поясе 
// это метод, а значит как функцию вызыввем 
// дата и время
console.log(nowDate.toLocaleString()); 

// в формате Росии
console.log(nowDate.toLocaleString('ru-RU')); 

// британский формат
console.log(nowDate.toLocaleString('en-GB')); 

// только дата
// toLocaleDateString
console.log(nowDate.toLocaleDateString());

// толькл время
// toLocaleTimeString
console.log(nowDate.toLocaleTimeString());


// месяц словами, дни недели
//  тогда надо передать еще один параметр 
// (1ый- это регион\time зона, 2-ой - )

// создали обьект и в нем все описываем
let options ={
era: 'long', //сейчас эра илет, от рождесва Христово
year: 'numeric', 
month: 'short', //long
day: 'numeric',
weekday: 'long',
timezone: 'UTC', //какой часовой пояс
hour: 'numeric',
minutes: 'numeric',
second:'numeric',
} 
//  тогда надо передать еще один параметр 
// (1ый- это регион\time зона, 2-ой - наш обье)
console.log(nowDate.toLocaleString('tu-Ru', options));


// из переменной 'NOWDATE' можно выводить, отдельно: часы, минуты, даты, для этогт существую методы (строка 75)

let minutes = nowDate.getMinutes();
console.log(minutes);