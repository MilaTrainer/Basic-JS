
// Задание 1
// Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.

const input = document.querySelector('input');
const ul = document.querySelector('ul');

// input.addEventListener('click',() => {
//     const li = document.createElement('li');
//     li.textContent = input.value;
//     ul.append(li);
//     console.log(li);
// })


// Задание 2
// Вставить в html тег input (просто предусмотреть в разметке).

// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value

input.addEventListener('keyup', () => {
    console.log(input.value);
});


// Задание 3
// Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).

const sectionTask3 = document.querySelector('section');
// создала для того, чтобы не путаться с другими заданиями

const form = sectionTask3.querySelector('form');
const inputTask3 = sectionTask3.querySelector('input');
const ulTask3 = sectionTask3.querySelector('ul');

form.addEventListener('submit', (event) => {

    const li = document.createElement('li');
    li.textContent = inputTask3.value;
    ulTask3.append(li);

    console.log(li);
    event.preventDefault();
    inputTask3.value = '';


});



// Задание 4
// Калькулятор. 

// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.
const calcForm = document.qwerySelector('.task4');
inputNum1 = calcForm.qwerySelector('.num1');
inputNum2 = calcForm.qwerySelector('.num2');
select = calcForm.qwerySelector('select');
resulCalckForm = document.qwerySelector('.task4Result');

calcForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const reslt = 
    if ( num1=== 1){
        
    }
}
);




// 1) решить с помощью if

// 2) решить с помощью evel (https://developer.mozilla.org/...)



// Задание 5

// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
const button = document.querySelector('.task5');


 