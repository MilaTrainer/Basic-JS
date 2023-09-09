'use strict';
// импорт одной переменной
// имена переменных могут быть разные

/**
 const sum = (a, b) => a+b;
    export default sum;
}
 */


// импорт несколько переменных
// имена переменных должны быть одинаковыми 
// то есть в файле script.js  необходимо также назввить эти импортированные переменные
//  myFunctionq - и также вызывать  myFunctionq в script.js
const myFunctionq = () =>{
    console.log('Bogdan');
}

const sum = (a, b) => a+b;
// export default sum;
export {
    myFunctionq,
    sum
}