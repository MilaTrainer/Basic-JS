'use strict';
// обьекты 
// их определять лучше черещ const
const feed = {
    // 
    brand: 'Mila', //поле или ключ: свойсво, методы, значение 
    type: 'сухой',
    segment: 'premium', //
    price: 10, 
    wright: 400,
    isInStock: true,
 }

// обращение к полю 
 console.log(feed.brand); //точечная нотация , dote notation (выыодится значение поля brand)
 console.log(`${feed.price} gr.`);// в шаблонной строке + слово 
 console.log(feed['price']); // breaket notation в обьекте есть поля (нет индексов ), и их можно использовать
//  обращение к полю через переменную


// цикл  for ... in - для перебора полей обьетка
// key - это переменная, которой обозначают все поля (proprty/ item)
// feed- тот самый обькт , который перебираем
 for (let key in feed) {
console.log(key); // выводим ключи/поле
console.log(feed[key]); //выводим значание ключей/поля
// console.log(feed.key); не работает
 }

 //key = значение (свойсво или метод)

// 
//  1)вывести в консоль строки: поле - значение


for (let key in feed){
    console.log(`${key} - ${feed[key]}`)
}

// 2)на основе обекта Сформировать массив вида ['значение ', 'значение'];
const feeds = [];
for (let key in feed){
    feeds.push(feed[key]);
}
console.log(feeds);
// 3) сформировать массив вида: ['поле - значение'] На основе объекта сформировать массив вида 

const feedStrings= [];
for (let key in feed){
feedStrings.push(`${key} - ${feed[key]}`);
}
console.log(feedStrings);


// как удалять , добавить поле

feed.color= 'neutral'; // внутреннее поле добавила color
feed.wright= 1000; //изменила значение
delete feed.color; //удадила поле



// статистическая и динамическая типизация

// 1. статистическая 
// String staticA = 'abc';
//  int staticB = 10; 
//  staticB = 'xyz'; //eror

// динамическая типизация

let staticA
 staticA = 'xyz'; //string 
 statusbarA = 10; //number
// const feed = {} 

// get course
//  object
let num = 5;
let numSecond = 56;
let userName = 'Mila';
let compare = num > numSecond; 
console.log(compare);

// теперь запишим эти переменные, как обьекты
 
const userThird = {
    userNameThird: 'Maxim',
    age: 29,
    admin: true,
    avatarUrl: 'https://pic.jpg.com',
}
console.log(userThird);
console.log(userThird.age); // вывели значение поля age
userThird.isOnline = false; //добавила поле isOnline и значение false
delete userThird.admin; //удалила admin
console.log(userThird);

// второй способ как обратится к полю через [];
console.log(userThird['avatarUrl']);
//строим целый тег img, в котором будет адрес из avatarUrl
// <img scr='url' alt= ''>
console.log (`<img scr= '' ${userThird['avatarUrl']} alt= '' > `)// получили сгенерированный тег


// 2 video 
// for- in  цикл для обхода обькта
for (key in userThird) {
    console.log(`${userThird} и ${key}`) ;
}


// 5video for  ..... of - старый цикл
console.log(userThird);
console.log(userThird[0]);
console.log(userThird[1]);
console.log(userThird.length); //длина массива, колличсво элементов в этом массиве
console.log(userThird[userThird.length - 1]);//достали последний эллемент массива по его индексу
console.log(userThird.length - 1); //индекс последнего эжемента 
// то , что нужно повтрять 3 и больше раз
// нужно делать в цикле
// обходить все элементы массива
//цикл  for of
for (let i = 0;  i <userName.length;  i++){
console.log(userName[i]); //выодится каждый из элементов массива
}
 

// 6 video for - of
// задаем массив из чисел и пройтись по этим числам в цикле
// и вывести в консоль сумму из числа массива и сщетчика на данной итерации
let milaa = [10, 20, 30, 40];
for( let i; i< milaa.length; i++){
    console.log(milaa[i] + i);
}
//  цикд for - of
for (let  item of milaa){
    console.log(item);
}

// методы строк и массивов
let string = 'Paris';
let newString = string.toUpperCase();