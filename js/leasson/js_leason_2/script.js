'use strict';
// for ( let i = 1950; i <= 2004; i = i + 1 ){}

for ( let i = 20; i <= 30; i++ ){
console.log (`${i} * 2 = ${i * 2}`);}

//функции - глагол
//  чтобы шабланизировать виды , конкретные числа 
// допустим кратное или некратное
//functional   return
function isMultiple (num1, num2) {
const result = num1 % num2 === 0;
return result;
}
// стрелочные функуии, иначе, короче
function isMultiple (num1, num2) {
    return  num1 % num2 === 0;
}

const item1 = isMultiple (9, 3); // => true
// isMultiple (9090, 23);
console.log(isMultiple (9090, 23));


// сформироватть строку в которой будет написано
// height = 200px
//стрелочный синтакс funcrion 
// const addHeight = ( параметр фунуции- внутренняя переменная) => {}
const addHeight = (num) => {
return `height: ${num} px`; //шаблонная строка

// return 'height: ' + num + 'px'
}
console.log (addHeight(100))// 'height = 100px'
console.log (addHeight(120))// 'height = 120px'
console.log (addHeight(150))// 'height = 150px'


// если один параметр в стрелочном синтаксисе, можно сркратить
const addHeight1 = num => `height: ${num} px`;

// тернарный оператор 
// const role = условие ? присвоиться если true : false
const login = 'login123';
const role =  login === 'login123' ? 'admin' : 'user';
