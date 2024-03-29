'use strict';
// Задание 12
// Решить 4 задание из прошлой темы, используя метод filter

// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr = [5, 4, 3, 8, 0];

function filterFor(arr, a) {

    const copyArr = arr.filter((item) => {
        return a <= item ? item : false;
        // не что подставить, чтобы вернул пустой массив
        // когда подставляю [] - все равно возвращается  число большее a
    })
    return copyArr;
}

console.log(filterFor(arr, 2));

console.log(filterFor(arr, 3.11));
console.log((arr, 10));
// Задание 13
// Описать функцию, которая принимает массив строк и возвращает массив, содержащий только строки более 3-х символов. Проверить работу функции на примере:  ['yes', 'hello', 'no', 'easycode', 'what'].

const arrayStrings = ['yes', 'hello', 'no', 'easycode', 'what'];

function getFunctionString(array) {
    const copyArray = array.filter((item) => {
        return item.length >= 3;
    })
    return copyArray
}
console.log(getFunctionString(arrayStrings));

// Задание 14
// Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

// ПОДСКАЗКА. Для правильной сортировки метод sort принимает функцию, параметры которой a и b - это элементы массива. В данной задаче элементы массива, то есть параметры a и b, сами являются массивами и обладают всеми свойствами массивов.

const bigArray = [[14, 45], [1], ['a', 'c', 'd']];

// первый вариант
const sortedBigArray = bigArray.sort();
console.log(sortedBigArray);


// второй варинат с колбэк функцией
const sortedBigArray1 = bigArray.sort((a, b) => a - b
)

console.log(sortedBigArray1);

// Задание 15
// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:

// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7. (сделать через map)


// 2. Исключает всех кошек младше 18 человеческих лет. (сделать через filter)




// 3. Возвращает средний человеческий возраст для всех взрослых кошек. (сумму для среднего посчитать через reduce)
// Вызовите функцию для обоих наборов тестовых данных.
// Тестовые данные:
// 1: [7 , 3, 2, 4, 1, 15, 8, 1, 9, 2]
// 2: [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]

// В задании необходимо использовать методы массивов: map, filter, reduce
const catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

const getAverageHumanAge = (array1 => {

    const ageHumenOfCats = array1.map(item => (item <= 2 ? item * 10 : item * 7));

    const ageCat = ageHumenOfCats.filter(item => item >= 18);

    // if (ageCat.length === 0) {
    //     return 0; // Вернем 0, если нет взрослых кошек
    // }

    const averageAge = ageCat.reduce((acc, item) => acc + item, 0);



    return averageAge
    // , ageCat.length
}
)

const averageAge4 = getAverageHumanAge(catAges);
console.log(averageAge4);