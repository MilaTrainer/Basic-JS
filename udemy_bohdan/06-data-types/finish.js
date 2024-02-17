/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const string = "string";
const number = 1;
const boolean = false;
const anKnow = null;
const undefin = undefined;
const array = [1, 2, 3, 4];
const object = {
    name: 'Mila',
    age: '29',
};

console.log(typeof (object));
console.log(typeof (string));
console.log(typeof (array));
console.log(typeof (boolean));
console.log(typeof (number));
console.log(typeof (anKnow));
console.log(typeof (undefin));
