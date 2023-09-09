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
// получаем 6

console.log (numbers.length - 1) ////индекс последнего эллемента массива всегда на единичку меньше (считается с 0), от колличесва (number.lengs)отняли 1 
//  тут выводим индекс последнего элемента массива numbers



console.log (numbers [0]); //я обратилась к элемену у котогоро  индекс ноль , 
// ответ: 4

console.log (numbers[numbers.length - 1]); //
// колличесво считается с 1
// обращемся у последнему элемента массива
// такой способ иногда может обманут
console.log(names[names.length - 1])

// второй вариант - последний элемент массива
// лучше использовать его
const endElementNames = names.length - 1;
console.log(names[endElementNames]);
// получаем последний элемент массива



// ДОБАВОЕНИЕ ЭЛЕМЕНТА В МАССИВ
// 1 ----- МЕТОД
// пишем элемент, который не существет
// получаем на 12ом месте этот элемент 
names[12] = 'qwerty';
console.log(names);
// если перебирать массив , то будут пустые ячейки показывать UNDEFINDE
// стараться не осатвлять пустые ячейки

// ДОБАВОЕНИЕ ЭЛЕМЕНТА В МАССИВ
// 2 ---- МЕТОД
// второй метод добавления
// он добавляет сразу элемент в последее место 
names.push(987654);
console.log(names);

// ДОБАВОЕНИЕ ЭЛЕМЕНТА В МАССИВ
// 3---- МЕТОД
// мы никак не можем изменять элементы в массиве, только получаем инормацию  при помощи цикла
for (let item of names) {
    console.log(item);
}

// с новым массивом попробуем
const ages = [20, 30];
ages[2] = 22; // добавила индекс еа 2место
ages.push(31); //добавить элемент в конец массива 
console.log(ages); 



// КОПИРОВАНИЕ МАССИВА
// 1 МЕТОД 
// for .....of - только для массивов используется
const ages2= [];
for(let elementn of ages) {
    //item один эдемент из 
    // age 
    ages2.push(elementn);
}
console.log(ages2);
// мы перебираем старый массив и на каждрй иттерации добавляем элемент в новый массив

// КОПИРОВАНИЕ МАССИВА
// 2 МЕТОД
const copyAge = [...ages, ...ages2];
// копируем два массива в один
// вставадяет все элементы
console.log(copyAge);



//// КОПИРОВАНИЕ МАССИВА
// 3 МЕТОД

// убираем скобки, и сливаем все в один массив
// чтобы не было два отдельных массива в одном массива как ниже в copyNames 
const copyNames = [names, numbers];
console.log(copyNames);
// а чтобы все элементы лежали в одном массиве, без скобок и разделений
const newCopyNames = copyNames.flat();
console.log(newCopyNames);












for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]); // numbers [2],  все элементы numbers по порядку выводят в consoole
    // [i]/ i - индекс элемента
    // закончит счетчик переберать до последнего значения  колличесва элементов в массиве 
}




const egorLearn = ['Mila', 'Pasha', 'Tatiana'];
// получение последних элементов при помощи at 
// лучше всего не делать push массива, а перебрать и добавить
// или перебрать массив, записать в новый  и удалить элемент из массива
// с помощью перебора 
console.log (egorLearn[2]); //получила второй элемент массива (Tatiana)





//  ОБЬЕКТЫ
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






 

