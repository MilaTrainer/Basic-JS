'use strict';
const form = document.querySelector('form');
const inputName = form.querySelector('.form__input-name');
const inputAutor = form.querySelector('.form__input-autor');
const select = form.querySelector('select');
const optionArr = form.querySelectorAll('option');
const btn = form.querySelector('button');
console.log(form);
console.log(inputName);
console.log(inputAutor);
console.log(select);
console.log(optionArr);
console.log(btn);
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const optionAnswer = document.createElement('p');//создала p, для ответа из 'select'
    const div = document.createElement('div');//создала див для всех 'P'
    // проверила содержимое value в option со строковым значением
    if (select.value === `to_do`) {
        optionAnswer.textContent = `to_do`; //добавила текстовое содержимое в переменную optionAnswer (p)
    } else if (select.value === `in_progress`) {
        optionAnswer.textContent = `in progress`;
    } else if (select.value === `completed`) {
        optionAnswer.textContent = `completed`;
    } else (optionAnswer.textContent = ` please select task status`)

    const inputNameText = inputName.value;
    const inputAutorText = inputAutor.value;


    // через шаблонные строки
    const divA = `
<p> ${taskIndex} ${inputNameText}  ${inputAutorText}
${optionAnswer.textContent}</p>
    }`
    div.innerHTML = divA;
    document.body.appendChild(div); //создала div для всех 'P'
    inputName.value = '';//при обновление пустая строка
    inputAutor.value = '';
}

)


// ВТОРОЕ РЕШЕНИЕ


// const nameTask = document.createElement('p'); //создала p, для ответа из inputa Name
// const autorName = document.createElement('p');//создала p, для ответа из inputa Autor
// порядок числовой задачи
// как установить числовой порядок задачи?
// попробовать через счетцик
// let index = 0;
// let taskIndex = index + 1;



