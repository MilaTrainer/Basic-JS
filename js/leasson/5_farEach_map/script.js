"use strict";
const isInRange = (n, min, max) => {
  return n >= min && n <= max;
};
isInRange(3, 2, 7);

//  сокращенное выражение - стрелочная функция, убирается  return
const isInRange1 = (n, min, max) => !(n < min || n > max);
isInRange1(5, 7, 1);

// многоуровневые массивы, тут в массиве лежит обьект
let questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

// перебираем массив с обьектами
// тут в массиве(questions) перебираешь все объекты(item) и вставляешь в объекты(item) новую строку.
for (let item of questions) {
  delete item.corAnswer; //удалила поле обьекта
  item.choices[0] = "hello world"; // добивала в первый элемент массива (в choices) 'hello world'  через присваивание
}

// console.log(questions[join])
console.log(questions);

// FOREACH
//методы перебора массивов
// метод - это функция

// первый forEach (для каждого)
// не отдает это метод никуда результат, нет returnd
// работает также, как и цикл, совершает десвие для каждого элемента
// просто запись короче

// создали массив и добавили строки
const users = ["a", "b", "c", "d", "e"];
const names = [1, 5, 3, 8, 2];
const newNames1 = [];
// параметр этого метода - это функция , вызывается для каждого элемента массива
// у этой функции свои (параметры) и {свое тело \той функции}
names.forEach(function (
  element,
  index //callback function (когда фунция вызывется для другой функции)
) {
  //тут писать любую логику, что делать с этим элементом массива, как и у  for
  console.log(element);
  console.log(`${element}  имеет индекс ${index}`);
  // console.log(`${element} из массива ${сюда сам массив} имеет индекс ${index}`);
  newNames1.push(element + "молодец");
  console.log(newNames1);
  conseole.log(element + ' ' + index);
});
// принимает от 1 до 3х параметров (item, element)

users.forEach((item, index) => {
  if (item.length > 5) { 
    console.log(item + ": " + index);
  }
});
// стрелочный метод, предан 1 параметр item
users.forEach((item) => newNames1.push(item + " !"));
console.log(newNames1);

// MAP
//  второй метод MAP
// создаем новый массив
// формирует новый массив из элементов и передаем его в новую переменную
// колличесво элементов  будет ровно такое же, как и в исходном
// метод map возвращает новый массив, этот новый массив сразу нужно куда-то записать
// мы должны создать новую переменную и сразу же тута записать результат
// поэтому надо создать сначала массив пустой ,
// const newUsers =  либо с присваиванием
// item являтся эментом массива users

const newUsers = users.map((item, index) => {
  return item; // выносит каждый результат
});

const newSSS = newNames1.map(function (item) {
  return item; // возмется каждый элемент из массива newNames и  в таком же виде в котором был запишется в newSSS
});

// const newSSS1 (новый массив) = newNames1.map - откуда мы берем данный (function - внутри функия со своими параметрами(item параметр внутренней функции){тело внутренней функции, обязвтеотно return -каждому элементу,  чтобы вернулся результат }
const newSSS1 = newNames1.map(function (item) {
  return item + "map"; //если мы хотим внести изменения, то просто прибавояем к ним что-то, допкстим слово 'map'
  // то есть для каждого элемента этого массива выполнится такая функция
  // как в цикле происходят повторения и доьавлянтся к каждому
});
console.log(newSSS1); //мы получили копию массива , просто добавилось слово map

//в стрелочном синтпксе
// в массив попадает длина элемента массива(из их строк)
const namesLenghts1 = names.map((item) => item.length);
console.log(namesLenghts1);

const namesLenghts2 = names.map((item) => { 
  return item + item;//склеились элеметны
});
console.log(namesLenghts1);
// сокращаем запись
const namesLenghts3 = names.map(item => item + item);
console.log(namesLenghts1);


// методы строк и массивов
let array = [1, 4, 6, 2, 8, 0, -56, -1, -5];
let string = "Toyota Yaris";
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

// INDEXOF
// 1 метод и для строк и для обьктов/массиивов - INDEXOF
// поиск индекса начиная с которго идет тот самый кусочек строки
// метод- чтобы узнать встречается ли что-то внутри массива или внутри строки
//строка-  мы можем узнать индекс, так и номер какого символа
// обект- мы можем узнать индекс, так и номер какого то элемент
// если из масиива то пишем - назвние массива, потом метод
// т к метод - это функция, поэтому передается параметр ()
// тут передаем в качессве пасметра index какого именно элемента, которого хотим получить
console.log(array.indexOf(-56)); //6 - т к это индекс элемента

// тоже самое применяем к строке
console.log(string.indexOf("y")); //  2 -т к это индекс элемента
console.log(string.indexOf(567)); // -1 -т к такого элемента нет в строке

// TOUPPERCASE
// 2.метод у строки - toUppeCase
// все символы перевелись в верхний регист
// метод -это функция поэтому круглые скобки toUpperCase()
console.log(string.toUpperCase());
console.log(string);

// TOLOWER CASE
// 3. метод у строки - toLowetCase
// все символы перевелись в нижний регист
console.log(string.toLowerCase());
console.log(string);
// можно обявить новую переменную и туда записать значение в нижнем регистре
// страя переменная не изменяемая
let stringClone = string.toLowerCase();
console.log(stringClone);
// забираем значение

// SLICE
// Метод для массива и строки SLICE
// вырезает
// для массива и строк
// со строкой
let longString = "Hello World";
let sleceString = longString.slice(6, 11); //методы все пишутся через точку
console.log(sleceString); //от 6 до 11(записываем не 10 букву, а следующую после последней)
// получается World

// с массивом метод SLICE
// для массива и строк
// можно записыать в переменную, или законсолить
console.log(array.slice(1, 3)); // получим массив из вырезанных 1 по 3 чисел с помощью метода slice= 4, 6 (строка 109)
// если в методе передать только один аргумент, то страка или массив будут вырезаться до конца

console.log(longString.slice(6)); //с 6-го и до конца
// раздичие 1
// SLICE может использовать отрицвткльные значение индекса (тогда начинает считать с конца)

// SUBSTRING
// substring - метод только для строк
// substring -от какого и до какого
let sleceString1 = longString.substring(6, 11); // от кого-то до какого
// пазличие 2:
// может использовать значения с 11 до 6  (от большего к меньшему)
let sleceString4 = longString.substring(11, 6); // результат такой же

// метод строк
// опирирует и индексом и колличесвом
console.log(sleceString.substr(1, 3)); // 1- это индекс, 3- далее колличесво символов

// INCLUDES
// метод- искать подстроку в строке
// похож на метод indexOf
// возвращает TRUE / FALSE
// есть ли такое в строке или нет
// метод чувсвителен к регистру
console.log(longString.includes("World")); //true
console.log(longString.includes("world")); //false, т к чувусвителен к регистру , W- маленькая буква

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.

// Вам понадобятся методы строк.
function ucFirs(str) {
  let urcFirst1 = str[0].toLowerCase();
  let urcFirst2 = str.slice(1);
  return urcFirst1 + urcFirst2;
}
console.log(ucFirs("Mila"));

// PUSH , POP
// метод добавить /удалить конечное значение (в конце массива)
// массив
const sampleArray = [3, 57, 342, -23, 0, 11];
sampleArray.push(22); //в последнее значение добавили число 22
console.log(sampleArray);

sampleArray.pop(); //тут передавать ничего не нужно в ()
//находит последнее значение и удаляет его [11]
console.log(sampleArray); //удалило 22

// video 'методы массивов, часть 2'
// забирает много памяти в JS
// редко используется
// unshift
// вставляет что-то в ночало массива
sampleArray.unshift(1); // добавило 1 в начало массива
console.log(sampleArray);

// shift
// удаяет эелемнт первый
sampleArray.shift(); // удалило 1 в начало массива
console.log(sampleArray);

// SPLICE
// только у массива
// метод может удалять
// sampleArray.splice(индексс кокого начинаем удaлять, колличесво элементов которое удаляем, что- то вставляем)
sampleArray.splice(1, 3, "new"); //JS найдет индекс ()57, под индексом 1)
console.log(sampleArray); // далее начиная с этого индекса удалит 3 элемента, далее добат 'new'
// можно добаить сколько угодно элементов, перечисляя
sampleArray.splice(1, 0, "wen", 111); //можно записать колличесво удаляемых элеменов 0 и вставляем 2 элемента
console.log(sampleArray);

// REVER
// переворачивать в обратном порядке
//то, что было поcледним, стало первым, то что было первым-стало последним
sampleArray.reverse();
console.log(sampleArray);

// CONCAT
// c помощтю него удодно делать копию
// умеет присоединять элементы, либо склеивает несколько массивов в один
// sampleArray вот к этому массиву.concat можно приклеить еще доплнительные значения (3, 4,  добавить )
// можно даже добавть какой- то другой массив

let copyArray4 = sampleArray.concat(); // скопирование из итогового массива (ничего не передаем)
// еще можно передать какие-то аргументы
// тогда в новый созданный массив попадут все элементы, которые были в старом массиве + то, что еще присодиняем
console.log(copyArray4);

let newArray4 = ["erer", "er", "ttt"]; //есть массив из срок
let copyArray = sampleArray.concat(3, 4, newArray4); // и добавляем дополнителные элементы в массив (в sampleArray) и массив из строк
console.log(copyArray);

// JOIN
// метод, превразает массив в стороку
// может вызываться с парметрами или без
let result = sampleArray.join(); //из массива обьединить все элементы в нашу строчку
console.log(result);
// если в качестве параметра ничего не передаем, то получаем строчку через запятую

// также можно передать какой-то разделитель
// разделитель передается в виде строки
// '' пустая строка, все будет слитно,
// если передать  '  ' пробел, то все элементы будут в строчку, через пробел
// можно поставить любые разделители  ; : ,
result = sampleArray.join(" ");
console.log(result);

// SPLIT
// из строки в массив
let stringNew = "Hello world";
console.log(stringNew.split()); // в скобки передается разделитедь
// если ничего не передать , то вся строка будет массивом

console.log(stringNew.split(" ")); //в качестве разделителя пробел,
// JS ищет пробел и по пробелу разделять элементы массива

console.log(stringNew.split("")); //пустая строка- каждая будка будет символом
