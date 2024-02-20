'use strict';
const form = document.querySelector('form');
const inputName = form.querySelector('.form__input-name');
const inputAutor = form.querySelector('.form__input-autor');
const select = form.querySelector('select');
const optionArr = form.querySelectorAll('option');
const btn = form.querySelector('button');
const ol = document.querySelector('ol');

// const deleteTask = (deleteBtns) => {
//     // берет массив, перебирает его
//     deleteBtns.forEach(btn => {
//         // есть все кнопки удаления
//         btn.addEventListener('click', () => {//на этих кнопках слушаю событие 'клик' 
//             btn.parentElement.remove();//и ту кнопку, на которую этот клик пришел - удлаем у нее родителя 
//         })
//     })
// }




form.addEventListener('submit', (event) => {
    event.preventDefault();
    const optionAnswer = document.createElement('p');//создала p, для ответа из 'select'
    // const div = document.createElement('div');//создала див для всех 'P'
    const li = document.createElement('li');
    // проверила содержимое value в option со строковым значением
    if (select.value === `to_do`) {
        optionAnswer.textContent = `to_do`; //добавила текстовое содержимое в переменную optionAnswer (p)
    } else if (select.value === `in_progress`) {
        optionAnswer.textContent = `in progress`;
    } else if (select.value === `completed`) {
        optionAnswer.textContent = `completed`;
    } else (optionAnswer.textContent = `please select task status`)

    const inputNameText = inputName.value;
    const inputAutorText = inputAutor.value;

    // через шаблонные строки
    // const divA = `<ol>
    // <li> ${inputNameText}  ${inputAutorText}
    // ${optionAnswer.textContent} </li> </ol> }`;

    // div.innerHTML = divA;
    // document.body.appendChild(div); //создала div для всех 'P'

    const p = `${inputNameText} ${inputAutorText}
     ${optionAnswer.textContent}`;

    li.textContent = p;
    
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';
    li.appendChild(btnDelete);

    ol.append(li);

    btnDelete.addEventListener('click', () => {
        li.remove();
    })

    inputName.value = ''; //при обновление пустая строка
    inputAutor.value = '';    
})


// ВОПРОСЫ


// порядок числовой задачи
// как установить числовой порядок задачи?

  // 1.Пробовла через HTML - там создать ol и отсюда li отправитт
    // 2. Пробовала JS создать ol, звкинуть Li и все это вметсе на страничку 

    // const ol = document.createElement('ol');//создала список числовой, но не могу туда отпраить Li-шки,если через шаблонную строку
// let ol = document.createElement('ol');
    //     ol = `<li> ${inputNameText}  ${inputAutorText}
    // // ${optionAnswer.textContent}</li>`;
    // div.innnerHTML= ol;

    
//  const li = document.createElement('li');
//li.textContent = `${li}: ${taskName} (Автор: ${authorName}, Состояние: ${taskStatus})`;

