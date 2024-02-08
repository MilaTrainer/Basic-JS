// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const li = document.createElement('li');

input.addEventListener('click', () => {
    li.textContent = 'нажатая клавиша';
    ul.append(li);
})

// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

const inputTask2 = document.querySelector('.task2')
inputTask2.addEventListener('keyup', () => {
    console.log(inputTask2.value);
})
// keyup- когда опускает клавищу


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
const sectionTask3 = document.querySelector('section');
// создала для того, чтобы не путаться с другими заданиями

const form = sectionTask3.querySelector('form');
const inputTask3 = sectionTask3.querySelector('input');
const ulTask3 = sectionTask3.querySelector('ul');

form.addEventListener('submit', (event) => {
    const li = document.createElement('li');//создали ли
    li.textContent = inputTask3.value;//добавлять в список тег li введенный текст
    ulTask3.append(li);//выводим на страницу
    console.log(li);//выводим в консоль
    event.preventDefault();//чтобы браузер не обновлялся по умолчанию
    inputTask3.value = '';//инпут очищен
});



// Задание 4
// Калькулятор.
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой.Добавить в html div.Внутри select будут options - арифметические знаки.В оба инпута пользователь вводит число.Когда пользователь отправляет форму(событие submit), над двумя числами выполняется действие, выбранное в select(чтобы получить выбранный пользователем option, мы "забираем" значение  select.value).Результат отображается в div.
// 1) решить с помощью if

// 2) решить с помощью evel (https://developer.mozilla.org/...)
const task4Result = document.querySelector('.task4Result');
const formTask4 = document.querySelector('.task4');
const inputTask4__1 = formTask4.querySelector('.num1');
const inputTask4__2 = formTask4.querySelector('.num2');
const selectTask4 = formTask4.querySelector('.sings');
const btnTask4 = formTask4.querySelector('button');
const optionsTask4 = formTask4.querySelectorAll('option');
// console.log(formTask4);
// console.log(inputTask4__1);
// console.log(inputTask4__2);
// console.log(selectTask4);
const options = formTask4.querySelectorAll('.options');

formTask4.addEventListener('submit', (event) => {
    // event.preventDefault();
    // let result = Number(inputTask4__1);
    // привести в числовое значение
    // let result2 = Number(inputTask4__2);
    if (selectTask4.value === '*') {
        task4Result.textContent = +inputTask4__1.value * +inputTask4__2.value
    } else if (selectTask4.value === '+') {
        task4Result.textContent = +inputTask4__1.value + +inputTask4__2.value
    } else if (selectTask4.value === '-') {
        task4Result.textContent = +inputTask4__1.value - +inputTask4__2.value
    } else if (selectTask4.value === '/') {
        task4Result.textContent = +inputTask4__1.value / +inputTask4__2.value
    }
    console.log(task4Result);
    event.preventDefault();
    inputTask4__1.value = '';
    inputTask4__2.value = '';

})
document.body.appendChild(task4Result);
console.log(task4Result);
// Задание 5
// ЕЩЕ ДЕЛАЮ, В ПРОЦЕССЕ

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
// const button = document.querySelector('.task5');

// MouseOver- наведение на элемент
// MouseOut - выведен курсок
const btn = document.querySelector('.task5');
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(btn);

btn.addEventListener('mouseover', () => {
    const getRandomRGB = () => {
        let r = getRandomInteger(0, 255);
        let g = getRandomInteger(0, 255);
        let b = getRandomInteger(0, 255);
        return `rgb(${r}, ${g}, ${b})`;
    }
    btn.style.backgroundColor = getRandomRGB();
}
)

// функцию rotateButton() нашла в инете
function rotateButton() {
    const randomRotation = Math.floor(Math.random() * 361) - 180;
    btn.style.transform = `rotate(${randomRotation}deg)`;
}

btn.addEventListener('mouseout', () => {
    rotateButton()
    // btn.style.transform = rotateButton();
});






