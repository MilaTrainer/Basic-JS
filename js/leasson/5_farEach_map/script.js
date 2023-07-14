'use strict';
const isInRange = (n, min, max) =>{
    return n >= min && n <= max;
}
isInRange(3, 2, 7)

//  сокращенное выражение - стрелочная функция, убирается  return
const isInRange1 = (n, min, max) => !(n < min || n > max);
 isInRange1 (5, 7, 1)


// многоуровневые массивы, тут в массиве лежит обьект
 let questions = [{ 
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}]; 

// перебираем массив с обьектами
// тут в массиве(questions) перебираешь все объекты(item) и вставляешь в объекты(item) новую строку.
for( let item of questions){
    delete item.corAnswer //удалила поле обьекта
    item.choices[0] = 'hello world' // добивала в первый элемент массива (в choices) 'hello world'  через присваивание
}

console.log(questions);


//методы перебора массивов
// метод - это функция

// первый forEach (для каждого)
// не отдает это метод никуда результат, нет returnd
// работает также, как и цикл, совершает десвие для каждого элемента
// просто запись короче

// создали массив и добавили строки
const users = ['a', 'b', 'c', 'd', 'e'];
const names = [1, 5, 3, 8, 2];
const newNames1 = [];
// параметр этого метода - это функция , вызывается для каждого элемента массива
// у этой функции свои параметры  и свое тело
names.forEach(function(element, index)
    //callback function (когда фунция вызывется для другой функции)
 { //тут писать любую логику, что делать с этим элементом массива, как и у  for

console.log(element);
console.log(`${element}  имеет индекс ${index}`);
// console.log(`${element} из массива ${сюда сам массив} имеет индекс ${index}`);
newNames1.push(element + 'молодец')
console.log(newNames1);
})
// принимает от 1 до 3х параметров (item, element)

users.forEach ((item, index) => {
    if(item.length > 5) {
console.log(item + ': ' + index);
} 
})
// стрелочный метод, предан 1 параметр item
users.forEach((item) => newNames1.push(item + ' !'));
 console.log(newNames1);





//  второй метод map 
// создаем новый массив 
// формирует новый массив из элементов 
// колличесво элементов  будет ровно такое же, как и в исходном
// метод map возвращает новый массив, этот новый массив сразу нужно куда-то записать
// мы должны создать новую переменную и сразу же тута записать результат
// поэтому надо создать сначала массив пустой , 
// const newUsers =  либо с присваиванием

const newUsers = users.map((item, index) => {
return item; // выносит каждый результат 
})

const newSSS = newNames1.map(function(item){
    return item; // возмется каждый элемент из массива newNames и  в таком же виде в котором был запишется в newSSS
})

// const newSSS1 (новый массив) = newNames1.map - откуда мы берем данный (function - внутри функия со своими параметрами(item параметр внутренней функции){тело внутренней функции, обязвтеотно return -каждому элементу,  чтобы вернулся результат }
const newSSS1 = newNames1.map(function(item){
    return item + 'map'; //если мы хотим внести изменения, то просто прибавояем к ним что-то, допкстим слово 'map'
    // то есть для каждого элемента этого массива выполнится такая функция
    // как в цикле происходят повторения и доьавлянтся к каждому
})
console.log(newSSS1) //мы получили копию массива , просто добавилось слово map

//в стрелочном синтпксе
// в массив попадает длина элемента массива(из их строк)
const namesLenghts1 = names.map(item => item.length);
console.log(namesLenghts1);






// методы строк и массивов 
// 
let array = [1, 4, 6, 2, 8, 0, -56, -1, -5];
let string = 'Toyota Yaris';
console.log(array.length); //length - это свойсво, не метод
console.log(string.length);
console.log(array[3]); // обращение к массиву под индексом 3
console.log(string[3]); //так же возмодно обращение и к строке под интектом 3

// в массиве можно метять элементы, в сторке нет
array[0] = 99; //переприсваиваю 99 значение, со строкой так не рабртает
console.log(array);

// /переприсвание значения в строке
//можно создать новую переменную и составить ее из символов старой
let newString = string[0]; // из  string- старой перемнной передаем [0] элемент в newString - новую переменную 
console.log(newString); //певую будку достали из старой перемнной
console.log(newString); //певую будку достали из старой перемнной




// 1 метод и для строк и для обьктов/массиивов - index of
// метод- чтобы узнать встречается ли что-то внутри массива или внутри строки
//строка-  мы можем узнать индекс, так и номер какого символа
// обект- мы можем узнать индекс, так и номер какого то элемент 
// если из масиива то пишем - назвние массива, потом метод 
// т к метод - это функция, поэтому передается параметр ()
// тут передаем в качессве пасметра index какого именно элемента, которого хотим получить
console.log(array.indexOf(-56)); //6 - т к это индекс элемента 

// тоже самое применяем к строке 
console.log(string.indexOf('y')); //  2 -т к это индекс элемента 
console.log(string.indexOf(567)); // -1 -т к такого элемента нет в строке 


// 2.метод у строки - to upper case


