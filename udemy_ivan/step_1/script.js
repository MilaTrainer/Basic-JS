'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
// let numberOfFilms = 
// Задайте в коде переменную n с числовым значением.

// С помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: 0,
    // или можно сразу записать переменную в значение ключа
    // count: numberOfFilms
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMovieDB.count = numberOfFilms;
console.log(personalMovieDB);

const qwestionUser = prompt('Один из последних просмотренных фильмов?', '');
const ratingFilm = prompt('На сколько оцените его?', '');

personalMovieDB.movies[qwestionUser] = ratingFilm; //изменила название в обьектк ключа  и присвоила значение
// когда мы записыаем какое- то свойсво в обьект, лучще использовать [квадратные скобки]:
// 1.так избовляемся от багов, которые пользлватель мог ввести
// 2. есть некоторые баги - в некоторых версиях, которая через точку не работают

console.log(personalMovieDB);


/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла



4) Потренироваться и переписать цикл еще двумя способами*/


// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
// str.length - и получить её длину)

function create() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', '');

        if ((a !== '' && b !== '') || (a !== null && b !== null) || (a.length < 50)) {
            personalMovieDB.movies[a] = b;
            console.log('yes, it true');
        }
        else {
            console.log('Please repead')
        }
        return
    }
}

create();

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов')
}
else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
}
else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
}
else {
    console.log('Произошла ошибка');
}
