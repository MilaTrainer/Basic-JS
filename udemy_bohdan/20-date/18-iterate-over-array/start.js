/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */
//первый вариант
const names= ['Nataly', 'Alex', 'Max', 'Mila'];

names.forEach((name)=> console.log(name));

// второй вариант
// желательно не исаользовать цикл for
const myArray = [1, 6, 0, 20];
for (let key of myArray){
    console.log(key);
}

myArray.forEach(element => console.log(element));