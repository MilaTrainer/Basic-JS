'use strict';
// через запятую групповое обращение к константам
const form = document.querySelector('form'),
    input = form.querySelector('.form-control'),
    ul = document.querySelector('.list-group');
console.log(ul);

// ловим событие на форме
form.addEventListener('submit', (event) => {
    event.preventDefault();//браузер обновление отключаем, у формы всегда надо отменять
    // += добавляется li 
    ul.innerHTML += `
    <li class="list-group-item ">
            <label class="form-check-label"> <input class="form-check-input me-1" type="checkbox" value="" >
                ${input.value}</label>
          <button type="button" class="btn btn-outline-success">Delet</button>  </li > `
    //эти классы в li  с boostrapa взяты, чтобы краствая стилизация была у liшек

    input.value = '';
    //собрали все лишки- нашли все li со страницы
    ul.querySelectorAll('.list-group-item').forEach(li => {
        // перебираем все li  через ForEach по очереди и для каждого Li вешаем (слушаем) событие
        li.addEventListener('click', () => {
            // при наступлении клика
            // ищем чекбокс внутри ли, чтобы проверить - он в этот момент чекнутый или нет
            const checkbox = li.querySelector('.form-check-input'); //чекбокс который в этом ли находится ищем,
            // то есть чекбокс на который пришел клик
            // чтобы проверить: чекнутый ли чекбокс на этом li или нет
            // и если он чекнутый, то тогда меняется цвет - на li повесить класс из bostrapa, который сделает его зеленым
            // если он не чекнктый , то тогда у li- убрать класс
            if (checkbox.checked)//чекнутый ли чекбокс (checked="true")
            {
                li.classList.add('list-group-item-success');//добавляем класс, который меняет цвет
                // добавляем атрибут, что он чект
                //  чтобы когда выделенные задачи отмечены и при этом вводим  еще новые задачи = в этот момент чекбокс - исчезает
                checkbox.setAttribute('checked', 'true');
            } else {
                li.classList.remove('list-group-item-success');//удаляем класс, который меняет цвет
                checkbox.removeAttribute('checked');// удаляем атрибут, что он не чект
            }

            // эти все дейсвия можно вывести в отдельные 2 функции
        }
        )

        const btnDelete = li.querySelector('.btn-outline-success');
        // ПЕРВЫЙ ВАРИАНТ
        
        // btnDelete.addEventListener('click', () => li.remove()

        // ВТОРОЙ ВАРИАНТ

        // btnDelete.parentElement.remove()//ищем родителя кнопки и удаляем


        // ТРЕТИЙ ВАРИАНТ
        // на кнопку вешаем прослушиватель события
        // и слушаем клики 
        btnDelete.addEventListener("click", () => {
            // у того btn, у которого нашли клик - мы должны найти то что нам нужно удалить
            // искать родителя на любом уровни вложенности по определенному селектору

            btnDelete.closest('.list-group-item').remove();// метод closest- ищу близжайшего из родительских элементов, включая самого элемента (по  класса ищу -  .form-check-label)
            // селектор LI -  .form-check-label (по этому классу ищем среди всех родителей этого buttona)
            //  и после ставлю новый метод - remove, и удаляю этонр класса элемент

        }
        );
    })


})