'use strict';
// switch 
// альтернатива if     else    if 
// когда много разных возможных условий

/* switch (выражение){
    case A:
        дествие если Bыражение === A
        break
    case B:
        дествие если Bыражение === B
        brea
    default:
        дейсвие по умолчанию
}
**/

const month = 2;
switch (month) {
    case 12:
        // дествие если Bыражение === A
        console.log('december')
        break
    case 1:
        // дествие если Bыражение === B
        console.log('january')
        break
    case 2:
        console.log('february')
        break
    default:
        // дейсвие по умолчанию
        console.log('Это не зимний месяц')
}
