/** ЗАДАЧА 19 - Добавление элементов в массив
 *
 * 1. Создайте любой массив
 *
 * 2. Добавьте в конец массива несколько новых элементов
 *
 * 3. Выведите в консоль длину результирующего массива
 */

const newNumbers= ['abc', true, null, undefined, 200];

    newNumbers[newNumbers.length-0] = 'ell';
    // второй вариант
    newNumbers.push(56775);
    newNumbers[newNumbers.length-0] = 'ooooou';

    // добавление несколько элементов массивов
    newNumbers.push(56, 6);
    console.log(newNumbers);
