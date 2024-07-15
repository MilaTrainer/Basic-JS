/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'
// Напишите код здесь
const compare = ((a, b) => {
    if (+(a) <= b) return true;
    else return false;
})

console.log(compare(myVariable1, myVariable2));

myVariable1 = '20'
myVariable2 = 100

// Напишите код здесь
console.log(compare(myVariable1, myVariable2));
