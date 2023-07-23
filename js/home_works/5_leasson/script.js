'use strict';
// Задание 1
// if (!(a)) - здесь скобки не нужны: if (!a)
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра
function sum(a, b) {
    if (a === undefined || b === undefined){
        return `введите два параметра`;
    }
    else if  ((typeof a !=='number') || (typeof b!=='number')){ 
         return `введенные данные не являются числами`;}
    else {
        return a + b; 
    }
} 
console.log (sum(4, 5 ));
console.log (sum(  3));
console.log (sum('d', 4));  
console.log (sum(1, [2])); //не получается сделать 
console.log (sum(1)); 
console.log (sum());
// Задание 2
// сделала
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
function square(a) {
if (!(a)){
    console.error('Функция "square" не может быть вызвана без аргумента');
}
else (
    console.log(a * a))
}

square(10); // 100
square(0);// Функция "square" не может быть вызвана без аргумента
square();//Функция "square" не может быть вызвана без аргумента
square(false);


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


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    }

    function guessNumber(num) {
        if (num >= 0 && num <= 10){
            const randomNumber = getRandomInteger(0, 10);
        if (num === randomNumber){
            return `Вы выиграли`}
        }
        else
            return `Вы не угадали, ваше число - ${number} ,  а выпало число - ${randomNumber}`}
console.log (guessNumber(number));



// Задание 4

 // если тут будет другая функия, как заптсать ее в стрелочный ситаксис, или внутри map стоит только внутреняя одна фенкция это компирование
// я не смогла в стрелочном синтаксисе добавить copyArr

// сделала
// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.

const arr = [1, 5, 6, 7, 8, 9, 10, 11];

// стрелочный синтаксис 
const arr3 = (array) => array.map(item => item);
console.log(arr3);
console.log(arr);

// Задание 5
//решила
// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
// Проверить работу функции можно на объекте:
const objectWithNumbers = {
    a: 10,
    b: 20,
    c: 'string',
    d: 12,
  }
  console.log(objectWithNumbers);
//   function sumObjectValues(item)

function sumObjectValues(objectWithNumbers){
    let sum = 0;
for (let key in objectWithNumbers){
   if (typeof objectWithNumbers[key] == 'number'){
    sum+= objectWithNumbers[key];
}
}
return sum;
}
console.log(sumObjectValues(objectWithNumbers));


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



// Задание 7
// сделала
// можно методом тернальника

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.

function checkSpam(str){
    let cloneStr = str.toLowerCase(); 
if (cloneStr  === ('badWord'.toLowerCase()) || cloneStr === ('XXX'.toLowerCase())){
    return true}
else{
    return false}
}
console.log(checkSpam('badWord'));
console.log(checkSpam('XXX'));


// можно еше методом includes() -включает в себя 
const checkSpam = str =>{
    let strLC = str.toLowerCase();
    if (strLC.includes('badWord'.toLocaleLowerCase()) || strLC.includes('XXX'.toLocaleLowerCase())){
        return true;
    }else {
                false
            }
}
const res1= checkSpam('badWord');//true
const res2= checkSpam('XXX dfgsfdg');//false
const res3= checkSpam('h,djcv,kjdfv,jdsfvkdjs');//false

// отсюда отправить файл
// Задани