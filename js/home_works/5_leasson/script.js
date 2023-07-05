'use strict';
// Задание 1
// Написать функцию, которая принимает два параметра и складывает их.

// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.



// Примеры результатов вызова функции:

// sum(2,4); // 6

// sum('d',4); // введенные данные не являются числами

// sum(1, [2]); // введенные данные не являются числами

// sum(1); // введите два параметра

// sum(); // введите два параметра





// Задание 2

// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"


// function square(a) {
//   console.log(a * a)
// }

// square(10) // 100

// square()
// // ДО: NaN
// // ПОСЛЕ: Uncaught Error: Функция "square" не может быть вызвана без аргумента



// Задание 3

// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.

// Задание 4

// Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива - forEach или map.



// Задание 5

// Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.



// Проверить работу функции можно на объекте:

// const objectWithNumbers = {
//   a: 10,
//   b: 20,
//   c: 'string',
//   d: 12,
// }

// 

// Задание 8

// Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет, Женя» -> «янеЖ ,тевирп»

// Обратите внимание: метод reverse существует только у массивов.



// Задание 9



// Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 



// let stations = [

// 'MAN675847583748sjt567654;Manchester Piccadilly',

// 'GNF576746573fhdg4737dh4;Greenfield',

// 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',

// 'SYB4f65hf75f736463;Stalybridge',

// 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'

// ];




// Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

// MAN: Manchester Piccadilly

// Вывести эти строки в консоль

// ПОДСКАЗКА:

// 1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
// 2. Найдите номер символьного номера точки с запятой.
// 3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
// 4. Объедините две новые переменные и строк



// Задание 10

// Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.

// Пример:

// let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(unique(strings) ); должен вывести "кришна, харе, :-O"



// ПОДСКАЗКА

// - создать новый массив

// - обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные.