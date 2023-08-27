'use strict';
// ОПЕРАТОР SWITCH

// используется как if  - условный оператор 
let num = 50;

switch (num) {
    case 1: 
        console.log('Неверно');
    case 27: 
        console.log('Неверно');
    case 100:
        console.log('Неверно');
    case 50:
        console.log('В точку!');
        break;
    default:  //дейсвие по умолчанию , прописываем 
        console.log('Не в этот раз');
        break;
}

// ЦИКЛ WHILE

// пока что у нас это условие выполняется  - - - мы будем делать какие- то/такие-то  дейсвия 


while (num <= 55) {
    console.log(num);
    num++;
}
// пока переменная num будет меньше, чем 55, 

// ЦИКЛ 
// DO -сделай что-то
// при помощи while - проверяем условие 
let num1 = 40;
do{
    console.log(num1);
    num1++;
}
while (num1 < 55);


// ЦИКЛ FOR
for (let i = 1; i < 8; i++) {
    console.log(i);
} 

