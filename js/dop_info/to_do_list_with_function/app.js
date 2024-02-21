'use strict';
const form = document.querySelector('form'),
    input = form.querySelector('.form-control'),
    ul = document.querySelector('.list-group');
console.log(ul);
// 1. собрали все 3 константы, необходимые
// 2. описали необходимые три функции, который отвечаю:
//                     1-ая функция: за отрисовку задачи, 2.
//                     2-ая функция: за поменитку задачи
//                     3-ая функция: за их удаление
// 3. написала логику моего приложения


// функция 1
// умеет добавлять внутрь родителя задачи со встроенной проверкой 
// показывать вписанную задачу
// render- отрисовывает задачу
// ее параметры(куда эту задачу закинуть, и какой у нее текст)
const renderTask = (parentElement, taskElement) => {
    if (taskElement) {
        // иначе, второй вариант
        // taskTextt === 0 || taskTextt === '' || taskText === NULL || taskText === NAN
        parentElement.innerHTML += `
    <li class="list-group-item ">
            <label class="form-check-label"> <input class="form-check-input me-1" type="checkbox" value="" >
                ${input.value}</label>
          <button type="button" class="btn btn-outline-success">Delet</button>  </li > `;
    }
}
// функция 2
// вынести функции- как проверять чекнуто и стилизовать это
// отмечанять li -помечены ли или нет, как сделано - или не сделано
// markAsDone- помечать, как сделано
// принмает в себя массив элементов/ псевдомассив, HTMLколлекцию состоящий из элементов с задачами
// теги в который есть задачи, мн.число указыввет, что это массив
const markAsDone = (tasksElements) => { // словили массив и добавляем логику
    tasksElements.forEach(li => {
        li.addEventListener('click', () => {
            const checkbox = li.querySelector('.form-check-input');
            if (checkbox.checked) {
                li.classList.add('list-group-item-success');
                checkbox.setAttribute('checked', 'true');
            } else {
                li.classList.remove('list-group-item-success');
                checkbox.removeAttribute('checked');
            }
        })
    })
}

// 3 функция
// функция удаляет элемент (задачу), внутри которого мы нажали на кнопку
// удобнее - собрать кнопки delet со страницы
const deleteTask = (deleteBtns) => {
    // берет массив, перебирает его
    deleteBtns.forEach(btn => {
        // есть все кнопки удаления
        btn.addEventListener('click', () => {//на этих кнопках слушаю событие 'клик' 
            btn.parentElement.remove();//и ту кнопку, на которую этот клик пришел - удлаем у нее родителя 
        })
    })
}


// логика моего приложения:
// как только на форме ловим событие submit -> 
form.addEventListener('submit', (event) => {
    event.preventDefault(); //предотврощаем перезагрузку страницы
    renderTask(ul, input.value);//вызываем функцию, которую вынесли (кусочек логики): доьавляем задачу на страницу
    input.value = '';//очищаем поле , в которое пользователь писал задачу

    markAsDone(ul.querySelectorAll('.list-group-item'));//и собирается массив из li с задачами
    deleteTask(ul.querySelectorAll('.btn-outline-success'));// вызвывем функцию, которая удаляет (передаем массив всех отрисованных кнопок 'delete')
})
