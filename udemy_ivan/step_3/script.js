'use strict';
// Задачи:

// При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
function firstTask() {
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}
firstTask();
// При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл
function secondTasc() {
    for (let i = 20; i >= 10; i = i - 1) {
        if (i === 13) break
        console.log(i);
    }
}

secondTasc();
// При помощи цикла for выведите чётные числа от 2 до 10 включительно

function thirdTasck() {
    for (let i = 2; i < 11; i = i + 2) {
        console.log(i);
    }
}
thirdTasck()

// Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.


function fourthTask() {
    let n = 2;

    while (n <= 16) {
        if (n % 2 === 0) {
            n++;
            continue;
        }
        else {
            console.log(n);
        }
        n++;
    }
}
fourthTask()

// Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]
 function fifthTasks() {
   const arr = [];
    for (let i = 5; i < 11 ; i++) {
     arr.push(i);   
     
    }
    console.log(arr); 
 }

 fifthTasks ();