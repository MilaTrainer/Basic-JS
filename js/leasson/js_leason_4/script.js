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