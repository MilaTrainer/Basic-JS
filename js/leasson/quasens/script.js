// Задание 5

// Дан массив объектов, например:
// let questions = [{
//     question: "What's the currency of the USA?",
//     choices: ["US dollar", "Ruble", "Horses", "Gold"],
//     corAnswer: 0
// }, {
//     question: "Where was the American Declaration of Independence signed?",
//     choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//     corAnswer: 0
// }];

// Добавить в каждый объект дополнительное поле usersAnswer со значением null.

// Решение должно работать для массива любой длины.
let questions = [{ 
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}]; 

console.log(questions);

//    let usersAnswer = {
//     userName: 'null'};
//     questions[1][].push (usersAnswer);

//     for(let question of questions){
//         questions.push ({usersAnswer: 'null'});; 
// }
//      console.log(questions);
//     // // console.log(questions);
// for( let i; i > questions.length; i++){
//     questions[questions.length] = ({usersAnswer: 'null'}); 
//     console.log(questions);
   
// }
questions[questions[0].length] = ({usersAnswer: 'null'}); 
questions[0][questions.length] = ({usersAnswer: 'null'}); 

console.log(questions);
   
   

// questions[questions.length] = 'usersAnswer'; добавляет в массив еще один третий обькт
 
// questions[0] = 'usersAnswer';   до
// console.log(questions); 