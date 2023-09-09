/** ЗАДАЧА 15 - Замена части строки
 *
 * 1. Создайте переменную и присвойте ей строку "Good Morning"
 *
 * 2. Замените "Morning" на "Evening" и присвойте результат новой переменной
 *
 * 3. Выведите значение второй переменной в консоль
 */

let morning = 'Good Morning';
console.log(morning)

morning = 'Good Evening';

// второй вариант 
// использую метод для строк replace
// (два аргумента: первые, который хотим заменить, второй - новый)
const updatedGreeting = morning.replace('Morning', 'Evening');

console.log(morning)
console.log(updatedGreeting);


