'use strict'
//неизменная переменная
const /* первый тип переменный, неизменная переменная, постоянная 90%, это константа*/
    a = 10;
/*userName без подчеркиывний, без дифиза */

//существует возможеность изменить
let b = 10; /*переменная вторая '"b"" изменная*/



//помогает нам видеть результат переменной, ....
console.log(a + b)


//типы данных- на собеседовании
//3. numbers - все числа, считает , внизу в степени
// 1. strings - строка


//const result = 10 ** 20;
//console.log(result);


let result = 12;
++result;
//spring, можно и число положить

const userName = 'Mila';
console.log(userName);

//js приводит автоматически к одному типу данных
console.log(typeof result);

//bollean //true/false
//  2.булевый тип данный
const bool = true;

//null - ошибка того, что в ней вообще ничего не существует

//undefined- говорит о том, что ничего нет в коробке

console.log(a);
console

console.log(typeof userName);

//свойство которое помогает определить тип данных (строчный, числовой, булевый)
console.log(typeof bool);

//автоматические приведения к типу данных
const strNumber = '24'
const num = 35;

//const result = a + b;
//console.log(result);

//const userName = 'Mila'
//const age = 25;
// конкотенация - это склеивание элементов, сложение чисел. Ответ Mila25
//const result = userName + age;
//const result = userName - age;  минус, минусует
console.log(result);

const secondName = 'Mila'
const firstName = 'Alekhina'

const fullName = firstName + '' + secondName;

console.log(result);

//приведение к типу данных вручную
//const a = '10';
console.log(typeof + a);

//приведение к типу данных вручную - второй вариант
//const b = '10';
//const strb = String(a);
//console.log(typeof strb);

//== приводит к одному типу данных и сравнивает их 
//=== сначала сравнивает их, а потом их значения 
//const a = '10';
//const b = '10';
//const result = a == b;
console.log(result);

//явное false - 0, null, undefined, false , NaN, ''
console.log(Boolean(null));
//true- 1, остальные все знчения 
console.log(Boolean(1));

alert('Hello World');
const age = prompt('Enter your age'); //ответ от пользователя записывает в консоль
console.log(age);

//условие пишется, если условие возвращвется true, то выполняется действие
if (false === false) {
    console.log('Hello World');
    //дейсвие

}

//если будет false, то не выполняется действие
// восклицательный знак, то наоборот оно станет False 
if (!true) {
    console.log('Hello World');
}
//блок который выполниться , только если не выполняться первый
else {
    console.log('Goodbye World');
}