'use strict';
// Задание 1

// Задайте в коде переменную n с числовым значением.

// С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.

let n = 101;
if( n >= 0 && n <= 100) {
    console.log (n);
} 

else {
    console.log (`число ${n} не находится в диапозоне от 0 до 100`);
}
 

let n1= 90;
if( n1 < 0 && n1 !=0 || n1 > 100 && n1 != 100) {
    console.log (`число ${n1} не находится в диапозоне от 0 до 100`);
}
else{
    console.log (n1)
}

const isInRange = (n, min, max) => n >= min && n <= max;

// {
// return n >= min && n <= max; }

const isInRange2 = (n, min, max) => {
    return !(n < min || n > max);
}
isInRange2 (45, 0, 100)

// Задание 2
// Дан объект с именами и заработными платами:
// const engineers = {
// Den: 1000,
// Matt: 5000,
// Steve: 2000
// }
// Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:

// Заработная плата ххх составляет ххх рублей.

// ВНИМАНИЕ. Ваша программа должна работать для любого количества имён и зарплат!

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
    }
    for (let engener in engineers) {
        console.log(`Заработная плата ${engener} составляет ${engineers[engener]} рублей`);
    }


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

    console.log(questions);
//     questions[questions[0].length] = ({usersAnswer: 'null'}); 
//     questions[0][questions.length] = ({usersAnswer: 'null'}); 

//     questions[questions[1].length] = ({usersAnswer: 'null'}); 
//     questions[1][questions.length] = ({usersAnswer: 'null'}); 
//  console.log(questions);
            
for(let item of questions){
    item.usersAnswer = null;
}
console.log(questions);
// Задание 8

// Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;

// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.
let nums = [5, 4, 3, 8, 0];
let limit = 5;
let nums1 = [];
for (let i = 0; i < nums.length; i++) {
   if (nums[i] >= limit){
    nums1.push(nums[i]);
   } 
}
console.log(nums1)
// Задание 9

// Существует массив объектов, описывающих пользователей, например:
// const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

// Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.

const users = [{name: 'Vasya', age: 23}, {name: 'Olya', age: 12}, {name: 'Anna', age: 22}, {name: 'Alex', age: 18}, {name: 'Valery', age: 8}]

for (const user of users) {
    if (user.age >= 15){
console.log(user.name)
    }}

// Задание 10

// Задать массив слов. Например:

// let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];

let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];


// 1) Создать новый массив. С помощью цикла наполнить его объектами с ключами word (само слово), length (длина слова):
// сделала два вида
let vegetables1 = [];
vegetables.forEach (item => {
    vegetables1.push({word: item, length: item.length})//берем новый массив и в него делаем push обьект в котором будет ключ и поле
    // {word: - это поле, ключ
    //  item - это  значение ключа, элемент исходного массива  
    // можно запсиать в одну строчку
    // length - второе поле, это строка
    // item.length - значение второго поля
});// создали массив запушили туда - вставили (создали) обекты (получился массив наполненный обьектами (ключ- значение))

console.log(vegetables1);

// второй вариант
let vegetables2 =[];
for (let item of vegetables) {
    vegetables2.push({word: item, length: item.length} );
}
console.log(vegetables2);


// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"
vegetables1.forEach(item => {
    console.log(`${item} - ${item.length}`)})
// тут из обьекта клеим строки
    // если прохожусь по новому массиву, не выводит а консоль нужный результат