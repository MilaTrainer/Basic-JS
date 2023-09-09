/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */
const stringForMe = 'Get a list of';
console.log(stringForMe instanceof String);
// stringForMe не содержит обьект
// не является экземпляром строки

console.log(typeof stringForMe === 'string');
console.log(typeof stringForMe);

const copyStringForMe = stringForMe.toUpperCase();
console.log(copyStringForMe);


// создание нового экземпляра строки STRING
const stringForMe1 = new String('summer');
console.log(stringForMe1 instanceof String);
// выводим тип значения 
console.log(typeof stringForMe1);
// т к это обьект, мы можем вызывать разные методы (toUpperCase, lenght, toLowerCase)
console.log(stringForMe1.length);
console.log(stringForMe1.toLocaleLowerCase());
console.log(stringForMe1.toLocaleUpperCase());