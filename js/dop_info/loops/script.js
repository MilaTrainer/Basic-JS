'use strict';
//циклы for, while, do while, for in - циклы 
// в этом документе, идут обяснение  о цикла, что с чем использовать, методы для массива,  обьектов, 
// также идет обьеснение о возможеых исаользовниях, но лучше их не использовать

// у массива есть свои методы (forEach, map, reduce, indexOf)

//  для обьекта: конвертировать в массив 
// (Object.keys - массив -названием свойсв обьекта, 
// Object.values- массив - значение свойсв обьекта )
//  и также использовать те же самые методы, что и для массива : 

// тогда не нужны циклы (while, do while, for)


// ЦИКЛ FOR
// можно использовать для массивов
// но не рекомендуется
for (let i = 0; i < 8; i++) {
    console.log(i);
}

// пример с массивом
const myArray = ['first', 'second', 'thid']
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


// BREAK;
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break;
    }
    // этот break останавливает цикл
    // и дальше он не продолжается 
    console.log(i);
}

//  CONTINUE
for (let i = 1; i < 8; i++) {
    if (i === 6) {
        continue;
    }
    // этот  continue пролождает цикл
    // но пропускает один шаг- который не нужен
    console.log(i);
}

// ЦИКЛ WHILE

// дает такой же результат, как и цикл for

// пока что у нас это условие выполняется  - - - мы будем делать какие- то/такие-то  дейсвия 
// цикл выполняется, пока условие правдивое

/**
  while(условие) {
    блок кода, выполняемый на каждой итерации
}

*/

let num = 5;
// 1 пример
while (num <= 55) {
    console.log(num);
    num++;
}
// пока переменная num будет меньше, чем 55, 


// 2 пример
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}




// ЦИКЛ 
// DO -сделай что-то
// при помощи while - проверяем условие 
// если условие ложное, этот блок кода выполнится ОДИН РАЗ

/**
 * 
  do{
    блок кода, который выполняется на каждой итерации
  } while (условие)

 */
let num1 = 40;
do {
    console.log(num1);
    num1++;
}
while (num1 < 55);







// ВЛОЖЕННЫЕ ЦИКЛЫ
//  иттераторы:
// i, j, k - для циклов

// формируем пирамиду прм  помощи вложенного цикла
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {

    for (let j = 0; j < i; j++) {
        // формируем звездочки
        // 6-ая строка -будет содердать шесть звездочек
        // это означает, что внутренний цикл- ориентируется на своих родителей
        result += '*';
    }
    result += '\n';  // новая строка
    // когда формируется строка- будет перенос на новую, происходит на каждом этапе
    // добавляем кусочек строки каждый раз 
}
console.log(result);


// похожий пример
// из внутреннего вложенного цикла  сразу остановить или  перейти к следующему итерации большоего- главного цикла 
first: for (let i = 0; i < 3; i++) {
    console.log(`first level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level: ${j}`);
        for (let k = 0; k < 5; k++) {
            if (k === 2) continue first; // вместо continue можно прописать break first;
            console.log(`third level: ${k}`);
        }
    }
}

// перебор МАССИВОВ
// лучше использовать циклы:
// forEach, map, reduce

// FOREach
// calback function
myArray.forEach((element, index) => {
    console.log(element, index);
})


// перебор ОБЬКТОВ
// лучше использовать циклы:
// for .... in

/** 
 for( key in Object){
    Действие с каждым свойством обьекта 
    значение свойсва - Object[key]
    key -  ключ
 }

 */

const object = {
    name: 'Mila',
    number: 1,
    city: 'Prague',
    country: 'Czech Republic',
}

for (key in object) {
    console.log(key, object[key])
}

//  forEac для ОБЬЕКТА
// при переборе становится массивом, 
// мыссивом свойсв - становится 
// и получаем все ключи в виде массива
// конфертация обькта в массив

Object.keys(object).forEach((key) => {
    console.log(key, object[key]);
}
)

// перебор значения свойсв обьекта
// на выходе: массив с тремя со значениями
Object.values(object).forEach((value) => {
    console.log(value);
}
)

// FOR IN ДЛЯ МАССИВА
// не рекомендуется делать,
// у массива есть свои методы (forEach, map, reduce, indexOf)
/** 
 на каждой иттерации этого цикла будет создаваться
 абсолютно новоя переменная key
key будет рано 0, 1, 2, 3 - это индекс каждого элемента массива

const key - это переменная
 */

const myArray2 = [true, 10, 'abc', null];
for (const key in myArray2) {
    console.log(myArray2[key]);
}




// FOR OF
// ЦИКЛ
/**
  for(element of Iterable){
    дейсвия с определенным элементом 
  }


  Iterable - то, что перебераем (строка, массив, обькт)
 */


// перебор символов в строке с помощью цикла for of
  const myString = 'Hey';
  for(const letter in myString){
    console.log(letter);
  }

//   FOR OF для массива,  при использовании
// используется не часто (лучше использовать FOREAC)
for(const elemnt of myArray2){
    console.log(elemnt + 'q');
}

// лучше для массива использовать ForEach
myArray2.forEach(element => console.log(element + 'a'));

// для масиива забыть: for in, for of, 
// использовать всегдла ForEach

// for of нельзя использовать для обьектов  - будет ошибка