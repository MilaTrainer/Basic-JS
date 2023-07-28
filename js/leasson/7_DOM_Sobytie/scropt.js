"use strict";
// get course
// СОБЫТИЯ
// события это все что делает пользлватель: 
// нажимает кнопку, скролит

// ДОБАВЛЕНИЕ СОБЫТИЙ
// существует несколько способов добавления события на элемент

// 1.СПОСОБ через HTML
// добавить атрибут к DOM эоементу
// в HTML разметке (строка 36-39)

// 2.СПОСОБ
// добавления событий или навешивание событий на DOM элемент
//  не часто
// т к можно присвоить только один обработчик событий элементу
// потому что у свойсва обьекта одновременно может быть только  одно значение

// сначала находим этот элемент, на которое хотим повесить это событие
// опишим фунуцию 
function sayHi(){
  alert('Hi');
}
document.querySelector('.div').onclick = sayHi 
// этому DOMэлементу проставляем свойсво, onclick = добавляем значение этому свойсву
// это свойсво функция -function
// этому свойсво присвоили значение этой функции sayHi 

// убрать описание этой функции и проставить значение свойсва onclick через ананимную фунцию, стрелочную
document.querySelector('.div').onclick = () => {console.log('Hi');};


// 3.СПОСОБ
// ADDVENT LISTENER
// само часто используется на практике
// также находим Dom элемент
// и вызываем на нем метод 
// метод - это функция, которая вызывется на обьекте
// передается имя события('click', второй парметр  - функция)
// запишем функцию в ананимной виде, в виде стрелки
document.querySelector('.div').addEventListener ('click', ()=> alert('one'),console.log('one clicked'));

// добавить второй обработчик на этот же элемент  console.log('one clicked'));

document.querySelector('.div').addEventListener ('click', ()=> console.log('one clicked'));

// ВОПРОС можно ли события через запятую перечислять? 
// ниже пример работает, выводит и в консоль и в алерт
// document.querySelector('.div').addEventListener ('click', ()=> alert('one'), console.log('one clicked'))



// НОВЫЕ СОБЫТИЯ
// производить дейсвие,когда пользователь что-то печает 
// CHANGE

// повесить на элемент input обработчик событий CHENGE и внутри этого обработчика вывести в консоль имя
document.querySelector('.input').addEventListener ('change', ()=> console.log('Mila'));

// KEYUP
// клавиша поднята вверх, клавиша на клавиатуре
// пользователь набирает один символ в inpute

// повесить обработчик событий KEYUP на элемент input и выводить число 1 в консоль, когда происъодит событие keyup
document.querySelector('.input').addEventListener ('keyup', ()=> console.log(1));
// input.addEventListener('keyup', () => {console.log('1')});


// в обработчике событий keyup выводить значение, которое хранится в теге инпут
// это значение хранится в VALUE
// и получит его можно также через атрибут VALUE
document.querySelector('.input').addEventListener ('keyup', ()=> console.log(document.querySelector('.input').value));
// принцип dry - dont repeat yourself не соблюдается
// и отображение повторяется 2 раза
// const input = решает эту проблему
// вместо стрелочной функции можно использовать обычную функцию
const input = document.querySelector('.input1')
input.addEventListener('keyup', function(){
console.log(input.value);
});




// ОБЬЕКТ СОБЫТИЯ
// при нажатии клавиши выводить не все значение, которое хранится в impute
// а только клавиша, которая нажата
// функуция, которая является обработчиком событий примимает один параметр,
// и этот параметр это обьект, который хранит информацию об этом событии
// этот обьект чаще всего называют (event)
// и оно хранит как раз поле, которое нужно (.key)
// вместе с keyup оно хранит значение клавиши, которая была нажата
const input1 = document.querySelector('.input').addEventListener('keyup', function(event){
console.log(event.key);
})

// РАЗНИЦА KEYUP AND keyDOWN
//keydown- нажили на клавишу и не отпустили ее - событие уже сработает 
// keyup- нажмем и не отпустим  - не  сработает
// оно сработает тоолько тогда, когда отпустите клавишу

// второй OBJECT СОБЫТИЯ
// способ - посетить обработчик событий keydown
// которое будет выводит в косоль нажатую клавишу
// KEYDOWN
// клавиша опущена вниз, т. е. нажата (а не поднята)
const input2 = document.querySelector('.input2')
input2.onkeydown = function(event) {
  console.log(event.key);
  };
  // onkeydown = и вешаем обработчик в виде функции



// СОБЫТИЕ ОТПРАВКИ ФОРМЫ
// SUBMIT
// произыести какое- то дейсвие по нажатию кнопки SUBMIT
// это дейсвие вешается на форму
// сначчала ищем form, после доьавляет обработчик событий submit
// обработчик в виде стрелки

// const formInput = document.querySelector('.form');
// formInput.addEventListener('submit', () => {
//   console.log('Привет');
// });


//слово не вываодится, оно выводится но быстро исчезает, т. к страница быстро обновляется 
// это стандартное поведение браузера -тогда когда вы отправляется форма,страница перезагружается, отправляется запрос на какой- то другое содержимое 
// но можно предотвратить предмет по умолчанию, сказать браузеру не делать этого (БРАУЗЕР, НЕ ПЕРЕЗАГРУЖАЙ СТРАНИЦУ)
// (preventDefault:)
// вызывается этот метод на обьекте событий (передается как параметр функции callback)
// в этой функции обратного вызова -вызовем preventDefault
const formInput = document.querySelector('.form');
formInput.addEventListener('submit', (event) => {
  event.preventDefault();
  // console.log('Привет');

  // и страница не обновилась, т к мы сообщили это браузеру
// на отправку formy выводить значение inputa
// стререть знаение input, т е перезаписать его пустой строкой
const input1 = formInput.querySelector('.string');
console.log(input1.value);
// перезапишем это значение
// перезаписать так же как и свойсво любого обьекта
// с полем value = пустая строка
input1.value = '';
});


// СОБЫТИЯ: ВСПЛЫТИЕ И ПОГРУЖЕНИЕ
const button1 = document.querySelector('.button_wrapper');
const divButton1 = document.querySelector('.wrapper');
// теперь кнопка и div хранятся в JS в виде перемнных и можно вешать на них обработчики клики 
// на кнопку вешаем обработчики клики 
// отслеживаем click
button1.addEventListener('click',() => {
// что поихойдет, дейсвие, когда отработает клик на этой кнопке
console.log('button click');
})

divButton1.addEventListener('click', () =>{
  console.log('wrapper click');
})
// когда нажимаем на кнопку, идем событие ВСПЛЫТИЕ 
// сначала событие срабатывает на дочернем элементе(тот, кто внутри, на том -где произошел клик), а потом  на родителе
// из внутреннего элемента происходит вспытие
// сначала срабатывает на снутреннем элемента, затем срабатывает событие, которое навешано на родительский элемент

// ОБЬЕКТ СОБЫТИЯ 






// отправка формы может генерировать данные в каком-то другом месте: запускать поиск по тексту на странице


// простые вещи
// 3 элемента сначала найдем через JS : form, button 
// одним ключевым словом const можно обьявить несколько перемнных  через запятую


const form = document.querySelector('form');
// qwerySelector умеет искать элементы не только во всем документе, 
//  но и он может вызвыватся на любых вложенных документ обьекте 
// input ищем не во всем доекменте , а именно в forme


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     document.body.innerHTML += 'Submit';);



// еще один способ
// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector("form"),
//     input = form.querySelector(".form-control"),
//     ul = document.querySelector(".list-group");

//   const renderList = (taskText, parent) => {
//     ul.innerHTML += `
// <li class="list-group-item"> 
//         <label class="form-check-label"><input class="form-check-input me-3" type="checkbox"> ${taskText}</label>
//         <button class='btn btn-outline-danger" deleteBtn'>Удалить</button>
// </li>
// `;
//     input.value = "";
//   }});
//   // li.addEventListener('click', () => {
//   //     console.log (li);
//   const markChecked = (taskElements) => {
//     if (!taskText){
//         `<li class="list-group-item"> 
//         <label class="form-check-label"><input class="form-check-input me-3" type="checkbox"> ${taskText}</label>
//         <button class='btn btn-outline-danger" deleteBtn'>Удалить</button>
//         </li>`
//     }
//     taskElements.forEach((li) => {
//       li.addEventListener("click", () => {
//         const chekbox = li.querySelector(".form-check-input");
//         if (chekbox.cheked) {
//           chekbox.setAttribute("checked", "true");
//           li.classList.add(".list-group-item-success");
//         } else {
//           chekbox.remove("checked", "false");
//           li.classList.remove(".list-group-item-success");
//         }
//       })
//     })
// }
// const deleteTask = (delBtn) => {
// delBtn.forEach(btn => {
//     btn.addEventListener("click", () => {
//         btn.parentElement.remove();
//   })
// })
// }

  // form.addEventListener("submit", (event) => {
  //   event.preventDefault(); //отмена дейсия по умолчанию, перезагруска страниц
  //   renderList(input.value, ul);
  //   markChecked(ul.querySelectorAll(".list-group-item"));
  //   deleteTask(ul.querySelectAll('.deleteBtn'));
  // })
// ul.querySelectorAll(".list-group-item").forEach((li) => {
// event.preventDefault();
// renderList(input.value,ul);
// ul.querySelectorAll(".list-group-item").forEach((li) =>{
// li.addEventListener("click",
// }
//   li.querySele).chcto('.list-group-item'ecked); //будет ли он чекнутый или нет, этот li
//   li.addEventListener("click", () => {
// const checkbox= li.querySelector(".form-check-input");
// if (checkbox.checked){
//     checkbox.checked = !checkbox.checked;
// }

// if (li.querySelector(".form-check-input").checked) {
//   li.classList.add("list-group-item-success");
// } else {
//   li.classList.remove("list-group-item-success");
//         // }
//       });
//     });
//     //   console.log(li);
//   });
//});
// если хотим несколько переменных через конст , то ставитт запятую
//  const form = document.querySelector('form'), -тут запятая
// input = form.querySelector('input');
// const users = [
//     {
//         userName: 'Anna',
//         isAdmin: true
//     },
//     {
//         userName: 'Alex',
//         isAdmin: false
//     },
//     {
//         userName: 'Kate',
//         isAdmin: false
//     }
// ]
// localStorage.setItem('users', 'Anna');
// localStorage.userName = 'Alex';

