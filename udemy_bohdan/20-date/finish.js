/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

const todayDate = new Date();
console.log(todayDate);

const todayMillis = todayDate.getTime();
console.log(todayMillis);