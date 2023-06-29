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

=>
(item + item) 


