'use strict';
//  Object

// array - массив , называть всегда в мн.числе
//все массивы часть обекта

const numbers = [4, 6, -23, 0];
console.log(typeof numbers);
console.log(numbers);

const names = ['Anna', 'Jan', 'Feb', 'Mar', 'Apr', 'May',];

console.log( names);

console.log(names.length) //длина массива names ( c 0, колличесво )

console.log (numbers.length - 1) ////индекс последнего эллемента массива всегда на единичку меньше (считается с 0), от колличесва (number.lengs)отняли 1 
//  тут выводим индекс последнего элемента массива numbers
console.log (numbers [0]); //я обратилась к элемену у котогоро  индекс ноль


console.log (numbers[numbers.length - 1]); //обращаемся к элементу
// а колличесво считается с 1

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]); // numbers [2],  все элементы numbers по порядку выводят в consoole
    // [i]/ i - индекс элемента
    // закончит счетчик переберать до последнего значения  колличесва элементов в массиве 
}

const ages = [20, 30];
ages[2] = 22; // добавила индекс еа 2место
ages.push(31); //добавить элемент в конец массива 
console.log(ages); 

// for .....of - только для массивов используется

for(let elementn of ages) {
    //item один эдемент из 
    // age 
    console.log(elementn); 
}


 const objectD = {
    a: 3,
    b: 4,
    c: 'Mila'
 } 
 console.log(objectD);

 const objectDCopy = objectD
 objectDCopy.a = 5;
 console.log(objectDCopy);
 console.log(objectD);

 objectD.b = 'Max';



 const feed = {
    brand: 'Mila',
    price: 10, 
    wright: 400,
    isInStock: true,
    type:'сухой'
 }
 console.log(feed.brand);
 console.log(`${feed.price} gr.`);

 for (let key in feed) {
console.log(key);
console.log(feed[key]);
// console.log(feed.key); не работает
 }

 //property =  key - 
 //key = значение (свойсво или метод)

//  1)вывести в консоль строки: поле - значение

//  2)на основе обекта Сформировать массив вида ['значение ', 'значение'];
// 
// 3) ['поле - значение'] На основе объекта сформировать массив вида 
const feeds = [];

for (let key in feed){
    console.log(`${key} - ${feed[key]}`)
}



for (let key in feed){
    feeds.push(feed[key]);
}
console.log(feeds);


const feedStrings= [];
for (let key in feed){
feedStrings.push(`${key} - ${feed[key]}`);
}
console.log(feedStrings);

feed.color= 'neutral'; // внутреннее поле добавила color
feed.wright= 1000; //изменила значение
delete feed.color; //удадила поле



