'use strict';
// тут о экспорте и импорте фунуций
// экспортировать определенные переменные , фунуции,
// связывать один модуль с другим

// export / import

// импортируем функции из папки  index.js
// еxпорт одной переменной

/** 
 import myFunctionq from './indexz.mjs'

обязательно присваиваем новой переменной

 const myFunctionqq = myFunctionq(); 
 */


// несколько переменных
// можно переименовывать тоже
// функцию myFunctionq переименовала в oneFunction
//  c помощью синтаксиса  'as'

import {myFunctionq as oneFunction, //переименована
        sum
    }from './indexz.mjs'

const myFunctionqq = oneFunction(); 


// import sum from './indexz.mjs'
const rest1 = sum(10, 2)
console.log(rest1);


