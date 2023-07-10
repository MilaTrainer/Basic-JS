'use strict';
//  Object

// array - массив , называть всегда в мн.числе
//все массивы часть обекта

const numbers = [4, 6, -23, 0];
console.log(typeof numbers);
console.log(numbers);

const names = ['Anna', 'Jan', 'Feb', 'Mar', 'Apr', 'May',];

console.log( names);

console.log(names.length) //длина массива names ( c 0, колличесво )

console.log (numbers.length - 1) ////индекс последнего эллемента массива всегда на единичку меньше (считается с 0), от колличесва (number.lengs)отняли 1 
//  тут выводим индекс последнего элемента массива numbers
console.log (numbers [0]); //я обратилась к элемену у котогоро  индекс ноль


console.log (numbers[numbers.length - 1]); //обращаемся к элементу
// а колличесво считается с 1

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]); // numbers [2],  все элементы numbers по порядку выводят в consoole
    // [i]/ i - индекс элемента
    // закончит счетчик переберать до последнего значения  колличесва элементов в массиве 
}

const ages = [20, 30];
ages[2] = 22; // добавила индекс еа 2место
ages.push(31); //добавить элемент в конец массива 
console.log(ages); 

// for .....of - только для массивов используется

for(let elementn of ages) {
    //item один эдемент из 
    // age 
    console.log(elementn); 
}


 const objectD = {
    a: 3,
    b: 4,
    c: 'Mila'
 } 
 console.log(objectD);

 const objectDCopy = objectD
 objectDCopy.a = 5;
 console.log(objectDCopy);
 console.log(objectD);

 objectD.b = 'Max';



 

