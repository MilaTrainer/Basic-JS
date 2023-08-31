'use strict';

// СТРОКИ

// СВОЙСВА
// только 1 свойсво существует
// длина строки
const str = 'test done';
console.log(str.length);

// МЕТОДЫ СТРОК  (3)

//нижний регист - метод изменения регистра

console.log(str.toUpperCase ());

// верхний регистр
console.log(str.toLowerCase ());

// метод indexOf
// с какой позиции начинается 
console.log(str.indexOf('done'));

// модифицировать строчку
// метод SLICE
// аргументы - с какой части строки вернуть это, (начало, конец)
let logg = 'Hello, world!';
console.log(logg.slice(6, 9));
console.log(logg.slice(7)); //с какого индекса 
console.log(logg.slice(-6, -3));// с конца 

// похож на slice
console.log(logg.substring(6, 9));

// скодлько символов необходимо вырезать
// с 6 позиции, пять букв
console.log(logg.substr(6, 5));


// МЕТОДЫ ДЛЯ ЧИСЕЛ

// метод округления
const num = 12.2;
console.log(Math.round(num));//до близжайшего целого

// метод parseInt
// строка в число
// + переводит число в другую систему исчесления
const test = '12.2px'; 
console.log(parseInt(test));

// похожий метод
// берет число и возвращает в деситичном варианте
console.log( parseFloat(test));
console.log( );