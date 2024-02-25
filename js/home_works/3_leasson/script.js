'use strict';


// Задание 2
// Дан объект с именами и заработными платами:
const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.

//     ВНИМАНИЕ.Ваша программа должна работать для любого количества имён и зарплат!

// const engineers = {
//     Den: 1000,
//     Matt: 5000,
//     Steve: 2000
// }

for (let key in engineers) {
    console.log(`Заработная плата ${key} составляет ${engineers[key]} рублей.`);
}






// Задание 2
// Создать массив из 5 элементов.
// Используя цикл for, вывести каждый второй элемент массива в консоль.

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i = i + 2) {
//     console.log (numbers[i]);
// }


// Задание 3
// Есть массив произвольных чисел:
// let numbers1 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:

// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.

// let numbersNew = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
// for (let i = 0; i < numbersNew.length; i++){
// console.log (`индексу ${i} соответствует число ${numbersNew[i]}`)}


// Задание 4
// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.

// Подсказка. Изначально нужно объявить пустой массив-хранилище (например, const newArr = []). Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// const arrNew = [];
// for (let i = 0; i < arr.length; i++){
// if ( arr[i] >= 0) {
//  arrNew.push(arr[i]);
// }
// else{
//    false;
// }}
// console.log (arrNew);


// 2 вариант

// let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
// let newArray = [];
// for (let key in arr) {
//     if (arr[key] > 0) {
//         newArray.push(arr[key]);
//     }
// }
// console.log(newArray);



// Задание 8

//эту задачу пока не решила, думаю

// Написать функцию, которая принимает массив (array) и число (num).

// Функция должна создать новый массив из элементов массива array, и в этом новом массиве должны содержаться только элементы, больше и равные (>=) значению num.

//для меня элеемент это то, что внутри квадратных скобочках

// function getArrayNum(array = [], num) {
//     if (array [] >= num){
// const newArray = [array, num];
//     }
// }




// Задание 6
// Есть массив произвольных чисел:
// let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

// 1) Посчитать и вывести в консоль сумму элементов в массиве.

// Подсказка: в задачах такого типа нужно заранее предусмотреть переменную (например, sum) и записать в нее начальное значение (в случае с суммой - ноль). Затем уже описать цикл, в котором эта сумма будет считаться (в каждой итерации цикла к ней будет прибавляться следующий элемент массива).


// let numbers6 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
// let sum = 0;
// for (let i = 0; i < numbers6.length; i++) {
//     sum = sum + numbers6[i];
// }
// console.log(sum);


// 2) Посчитать и вывести в консоль сумму четных элементов в массиве.


// let numbers6 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];

// let sum = 0;
// for (let i = 0; i < numbers6.length; i++) {
//     if (numbers6[i] % 2 === 0) {
//         sum = sum + numbers6[i];
//     }
//     else {
//         false
//     }
// }
// console.log(sum);


// 3) Найти и вывести в консоль максимальное число массива.

// Подсказка: как и в случае с суммой, здесь сначала нужно объявить переменную (например, max), записать в нее первый элемент массива, а затем уже в цикле искать максимальное значение.


let numbers6 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let max = numbers6[0];

for (let i = 0; i < numbers6.length; i++) {
    if (numbers6[i] > max) {
        max = numbers6[i];
    }
    else {
        false;
    }
   
}

console.log(max);

//4. Определить и вывести в консоль индекс максимального числа массива(или индексы, если число встречается более одного раза).Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.
console.log(numbers6.indexOf(max));



// Задание 5

// Дан массив объектов, например:



// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.


let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];


for (let item of questions) {
    item.usersAnswer = null
}

console.log(questions);

// Задание 8
// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;

// Создать новый пустой массив.В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные(>=) значению переменной limit.
// let nums = [5, 4, 3, 8, 0];
// let limit = 5;
// let newNums = [];
// for (let key in nums) {
//     if (nums[key] >= limit) {
//         newNums.push(nums[key]);
//     }
// }
// console.log(newNums);

// 2вариант

// let nums = [5, 4, 3, 8, 0];
// let limit = 5;
// let newNums = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= limit) {
//         newNums.push(nums[i]);
//     }
// }

// console.log(newNums);

// Задание 9
// Существует массив объектов, описывающих пользователей, например:

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.



// const users = [{ name: 'Vasya', age: 23 },
//     { name: 'Olya', age: 12 },
//     { name: 'Anna', age: 22 },
//     { name: 'Alex', age: 18 },
//     { name: 'Valery', age: 8 }]

// for (let i = 0; i < users.length; i++) {
//     if (users[i].age > 15) {
//         console.log(users[i].name)
//     }
// }


// 2вариант
// const users = [{ name: 'Vasya', age: 23 }, { name: 'Olya', age: 12 }, { name: 'Anna', age: 22 }, { name: 'Alex', age: 18 }, { name: 'Valery', age: 8 }]
// for (let user of users) {
//     if (user.age > 15) {
//         console.log(user.name);
//     }
// }

// Задание 10

// Задать массив слов.Например:

// 1) Создать новый массив.
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let newVegetables = [];


// С помощью цикла наполнить его объектами с ключами word(само слово), length(длина слова):
// [{ word: 'морковь', length: 7 }, { word: 'баклажан', length: 8 } и т.п.]

// for (let i = 0; i < vegetables.length; i++) {
    // let obj = {
    //     word: vegetables[i],
    //     length: vegetables[i].length
    // };
    // newVegetables.push(obj);
    // newVegetables.push(`${vegetables[i]} : ${vegetables[i].length}`)
// }
// console.log(newVegetables);

// Вывести этот массив в консоль.

//     Подсказка: длину строки можно определить с помощью метода.length.Например, для переменной let string = 'text' это будет string.length (результат - 4, т.к.слово text состоит из 4 символов)


// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"

// for (let i = 0; i < newVegetables.length; i++) {
//     console.log( `${newVegetables[i]} - ${newVegetables[i].length}`);
//     console.log(`${newVegetables[key]} - ${newVegetables[key].length}`);
// }

// Задание 7

// Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
//     Подсказка.Изначально нужно объявить пустой массив - хранилище(например, let newArr = []).Затем пройтись в цикле по массиву arr, и в каждой итерации, если элемент положительный, добавлять его в массив newArr.

let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArray = [];
for (let i = 0; i < arr.length; i++) { 
    if (arr[i] >= 0) {
        newArray.push(arr[i]); 
    }
}
console.log(newArray);


// Задание 8

// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;

// Создать новый пустой массив.В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные(>=) значению переменной limit.





