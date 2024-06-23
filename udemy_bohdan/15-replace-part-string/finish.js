/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */
const name = 'Good Morning';
const changeName = name.slice(0, 5);
const name1 = 'evening';
console.log(changeName + name1);