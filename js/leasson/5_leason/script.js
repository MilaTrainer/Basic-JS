'use strict';

//методы массивов

// первый forEach

// создали массив и добавили 
const users = ['a', 'b', 'c', 'd', 'e'];

users.forEach ((item, index) => {
    if(item.length > 5) {
console.log(item + ': ' + index);
} //callback function
})

//  второй метод map 
// создаем новый массив 
const newUsers = users.map((item, index) => {
return item; // выносит каждый результат 

})


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
    console.log(${userThird} и ${key}) ;
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