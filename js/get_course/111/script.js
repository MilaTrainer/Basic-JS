'use strict';
// события


// делегирования событий
// при клике на парашраф становится фон
//  при клике на Li меняется цвет шрифта

// записать их в js и после делегировать
// это похоже на массив, узел Nodes

const paragraphs = document.querySelectorAll('p');
const lis = document.querySelectorAll('li');
console.log(paragraphs, lis); //получилось 2 html коллекции
// первая список из DOM узлов
// и вторая их li
// переменная aragraphs и lis 



// чтобы отслелить клина на каждом их параграфа, нужно обойти коллекцию из параграфа и на каждый элемент этого массива навешать клик

// item - элемент этой коллекции
// forEach - это означает для каждого из \той коллеции
// 
 paragraphs.forEach(item =>{
    // обработчик клика addEventListener (будем для кажлго \лемента ловить событие click) 
    // и по событию запускать функцию
    item.addEventListener('click', () =>{
        // эта функця будет для каждго itemто есть, для каждого параграфа применять какой-то стиль css
        item.style.background = 'yellow';
    })//функция , которую нужно для каждого \лемента этой колекции ВЫПОЛНЯТЬ
 })
//  кликаем на параграв- становится жедтым 

// также для  li, только поменяем цвет щрифта при клике

lis.forEach(item => {
    item.addEventListener('click',() => {
    item.style.color = 'red';})
})


// можем почсеть одит процесс на все окно, или целый див, можно сделать как для обертки, так и для окна 

// вешаем события на секции

// id -  модно с помощью querySelector/ querySelectorAll или с помощью get element by id

// передаем название id-('first')

const firstSection = document.getElementById('first');
// вешаем обработчик события на всю секцию
// (event) у него есть многов всего внутри , он запоминает 
// в кончоль выводится эоемент по которому сделан клик
firstSection.addEventListener('click', (event) => {
    сonsole.log(event.target);
    // независимо от того куда я попала, желаю поменять стиль этомк элементу 
    // у even target есть - обьект события , у него значение , он в виде строки, внутри 



    event.target.style.color = 'blue';//все эдементы
    if (event.target === blu){}
})

// задание9
// const table = document.querySelector('table');
// forEach(user => {
// const tr = documetn.createElement('tr');
// const tdName = documetn.createElement('td'); 
// const tdAge = documetn.createElement('td'); 
// tdName.innerText = user.name; //текстовый контект добавляет, не строки
// // inertml- помогает доьаыить кусок разметки
// tdAge.innerText= user.age;//наполнила ячейку
// tr.append(tdName);//поместила в ячейку
// table.append(tr);
// })





const form= document.querySelector('form'),
input = form.querySelector('input');
button = form.querySelector('button');


input.addEventListener('change', () =>{

    console.log(input.value);//вывесьт в консоль событияе change


// console.log(input.value); 
// содержимое инпута выводим в консоль - value
}
);


// когда обраьатывем формк, надо отменить дейсвие по умолчанию (обновление страницв)
// event- сам обякт 
form.addEventListener('submit', (event) => {
    event.preventDefault(); // отменять десвие по умолчние, отмена перезагруски страницы , при отправке форм
    console.log(event);
    console.log(input.value);
})

// let table;
// users.forEach(user => {
// table.innerHTML += `
// <tr>
//     <td> ${user.name} </td>
//     <td> ${user.age} </td>  
// </tr>
// `;
// // table.innerHTML = trCode;
// })


// домашка
// Задание 4

// Калькулятор. 

// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

const calcForm = document.querySelector('.calc');
num1 = document.querySelector('.num1');
num2 = document.querySelector('.num2');
select = document.querySelector('.select');

resultBlock = document.querySelector('.result');


calcForm.addEventListener('submit', (e) => {
    e.preventDefault();

let result
if(select.value === '+'){
    result = +(num1.value) + +(num2.value)
}
})


// сами на наведние меняет цвет 
calcTitel = document.querySelector('h2');
calcTitel.addEventListener('mousover', () => {
    calclForm.style.backgroundColor = 'yellow';
});//при приведнии мыши меняет цвет

calcTitel.addEventListener('mouseout', () => {
calcForm.style.backgroundColor = 'blue';
}); //при отведнии мыши меняет цвет
