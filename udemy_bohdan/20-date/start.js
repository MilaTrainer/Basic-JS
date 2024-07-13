/** ЗАДАЧА 20 - Дата
 *
 * 1. Создайте переменную и присвойте ей текущее время в миллисекундах
 *
 * 2. Выведите значение в консоль
 */

// первый вариант
const dateToday = Date.now();
console.log(dateToday);


// второй вариант
// правильно
const currentDate =  new Date();
console.log(currentDate);
// конвертация new Data в миллисекунды
const currentDateInMs = currentDate.getTime()
console.log(currentDateInMs);