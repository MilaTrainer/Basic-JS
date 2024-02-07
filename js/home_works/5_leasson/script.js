'use strict';
// Задание 1
// if (!(a)) - здесь скобки не нужны: if (!a)
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обработайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра


// function sum(num1, num2) {
//     if (num1 == undefined || num2 == undefined) {
//         console.log('введи два параметра');
//     }
//     else if (typeof num1 != 'number' || typeof num2 != 'number') {
//         console.log('введенные данные не являются числами');
//     } else {
//         console.log(num1 + num2);
//     }
// }

// sum(2, 4); // 6

// sum('d', 4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра
// Задание 2
// сделала

// function square(a) {
//     if (a === undefined) {
//         console.eror(`Функция "square" не может быть вызвана без аргумента`)
//     }
//     else (
//         console.log(a * a)
//     )
// }

// square(10) // 100

// square();

// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"


//  2 ВАРИАНТ

// function square(a) {
// if (!(a)){
//     console.error('Функция "square" не может быть вызвана без аргумента');
// }
// else (
//     console.log(a * a))
// }

// square(10); // 100
// square(0);// Функция "square" не может быть вызвана без аргумента
// square();//Функция "square" не может быть вызвана без аргумента
// square(false);


// ДО: NaN
// ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента


// Задание 3
// сделала
// отправляю 2 варианта, один с промт, второй как вы говорили на уроке(без)


// Создать функцию "угадай число".
//  Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.


// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//     }

//     function guessNumber(num) {
//         if (num >= 0 && num <= 10){
//             const randomNumber = getRandomInteger(0, 10);
//         if (num === randomNumber){
//             return `Вы выиграли`}
//         }
//         else
//             return `Вы не угадали, ваше число - ${number} ,  а выпало число - ${randomNumber}`}
// console.log (guessNumber(number));



// // 2 вариант
// function randomNumber(num) {
//     if (!(num)) {
//         console.log(`Введите число `)
//     }
//     else if (num < 0 & num > 11) {
//         console.log(`введите от 0 до 10`)
//     }
//     else if (getRandomInteger(1, 10) === num) {
//         console.log(`Вы выиграли`)
//     }
//     else {
//         console.log(`Вы не угадали, ваше число -  ${num},  а выпало число ${getRandomInteger(1, 10)}`);
//     }
// }

// randomNumber(4);

// Задание 4




// если тут будет другая функия, как заптсать ее в стрелочный ситаксис, или внутри map стоит только внутреняя одна фенкция это компирование
// я не смогла в стрелочном синтаксисе добавить copyArr

// сделала
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

// 2 ВАРИАНТ
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// const copyArray = array.map(array => array);
// console.log(copyArray);

// 1 ВАРИАНТ
// стрелочный синтаксис
// const arr3 = (array) => array.map(item => item);
// console.log(arr3);//
// console.log(arr);

// Задание 5
//решила
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
// const objectWithNumbers = {
//     a: 10,
//     b: 20,
//     c: 'string',
//     d: 12,
// }

// function sumObjectValues(object) {
//     let sum = 0;
//     for (let key in object) {
    
//         if (typeof object[key] == 'number') {
          
//      sum += object[key];
//         }
//     }
//     return sum;
// }
// console.log(sumObjectValues(objectWithNumbers));


// 2 вариант
// function sumObjectValues(objectWithNumbers) {
//     let sum = 0;
//     for (let key in objectWithNumbers) {
//         if (typeof objectWithNumbers[key] == 'number') {
//             sum += objectWithNumbers[key];
//         }
//     }
//     return sum;
// }
// console.log(sumObjectValues(objectWithNumbers));



// Задание 6
// с урока (сама не решала, не смогла)

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.

function ucFirst(str){
//    let firstLetter = str[0].toUpperCase();
//     let lastLetter = str.slice(1)
//     return firstLetter + lastLetter
    return str[0].toUpperCase() + str.slice(1)
};

console.log(ucFirst('hello'));

// 2 вариант
const ucFirst = (str => {
    //    let str1 =  str.slice(0)
    let str1 = str[0].toUpperCase() + str.slice(1);
    return str1
})

console.log(ucFirst('mila'));

// Задание 7
// сделала
// можно методом тернальника

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

// 1 вариант
// function checkSpam(str) {
//     // str.toLocaleLowerCase();
//     if (str.includes('badWord'.toLocaleLowerCase()) || str.includes('XXX'.toLocaleLowerCase())) {
//         return true;
//     } else
//         return false;
// }

// console.log(checkSpam('badWord'));
// console.log(checkSpam('badword'));
// console.log(checkSpam('XXX'));
// console.log(checkSpam('xxx'));



// 2 вариант
// function checkSpam(str){
//     let cloneStr = str.toLowerCase();
// if (cloneStr  === ('badWord'.toLowerCase()) || cloneStr === ('XXX'.toLowerCase())){
//     return true}
// else{
//     return false}
// }
// console.log(checkSpam('badWord'));
// console.log(checkSpam('XXX'));


// 3 вариант
// можно еше методом includes() -включает в себя
// const checkSpam = str =>{
//     let strLC = str.toLowerCase();
//     if (strLC.includes('badWord'.toLocaleLowerCase()) || strLC.includes('XXX'.toLocaleLowerCase())){
//         return true;
//     }else {
//                 false
//             }
// }
// const res1= checkSpam('badWord');//true
// const res2= checkSpam('XXX dfgsfdg');//false
// const res3= checkSpam('h,djcv,kjdfv,jdsfvkdjs');//false

// отсюда отправить файл
// Задание 8

// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот(разворачивает строку).Пример: «привет, Женя» -> «янеЖ, тевирп»

// Обратите внимание: метод reverse существует только у массивов.

// Задание 9



// Массив содержит строки с информацией о железнодорожных станциях на севере Англии.Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком.



let stations = [

    'MAN675847583748sjt567654;Manchester Piccadilly',

    'GNF576746573fhdg4737dh4;Greenfield',

    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

    'SYB4f65hf75f736463;Stalybridge',

    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

];



// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

// MAN: Manchester Piccadilly

// Вывести эти строки в консоль

// ПОДСКАЗКА:

// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк

