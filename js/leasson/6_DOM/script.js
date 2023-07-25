'use strict';
const h2Element = document.querySelector('h2'); 
const paragraphs = document.querySelectorAll('p');
const footerParagraph = document.querySelector('footer p');


// нахидим (DOM элементы) на странице
// ПОИСК ЭЛЕМЕНТОВ НА СТРАНИЦЕ

// 1 метод GET ELEMENT BY ID
// поиск одного эоеммента по его ID
// getElementById - получить элементы по названию ID
//  по названию его ID custom-item (у li в html)
// элементы со страницы записываюсся в костанты 
// и потом не переопределяются 
// const customItem- похожее название перемнной, как ID в HRML
// getElementById -иди в document и получи элемент по названию ID
// всю констуркцию надо записать в переменную
 const customItem = document.getElementById('custom-item');
 console.log(customItem);

 // разница между 1 и 2 методами
// 1метод- находил один элемент  ------- 2метод - находит, что-то похожее на массив (псевдомассив)
// находим DOM элементы на странице

// 2 метод -искать элементв по названию классу 
// поиск всех элементов с классом, создает HTML коллекцию (псевдомассив)
// очень похожи на массив, но массивом не является и методы для массива - не подходят ему 
// но они могут перебираться 
// например, чтобы достучаться до опреденного параграфа нам нужен цикл for
// не работает метод forEach
// у кажого элемента есть свой индекс

 const conteinerElements = document.getElementsByClassName('conteiner');
console.log(conteinerElements);


// 3 МЕТОД
// // нахидим (DOM элементы) на странице
// поиск всех элементов по тегу
// getElementsByTagName - получить элементы по названию тега
// находим все параграфы 'p'
// получим псевдомассив, HTML коллекцию
const paragraps3= document.getElementsByTagName('p');
console.log(paragraps3);


// 4 метод
// // нахидим (DOM элементы) на странице
// поиск всех элементов по CSS селектору
// переберается черех метод ForEach
// тут ищет все  селекторы 'h2' 'h1'
// ищем 2 заголовка первого уровня 
// querySelector - запрос селектора (это термин CSS: header, img, footer, p)
// пишем в ('как обращались бы в CSS')
// #id, .selector, header, img, footer, p, h2
// создаем псевдомассив из всех заголовков

// создает псевдомассив, HTML коллекцию
const headers = document.querySelectorAll('h2, h1');
console.log(headers);
// получам список из узлов DOM дерева 

// тут ищет все селекторы 'p'
const paraghps = document.querySelectorAll('p');
console.log(paraghps);

// разница между 4 и 5 методами
// 4метод- находии все элементы  ------- 5метод - находит один элемент


// 5 МЕТОД
// // нахидим (DOM элементы) на странице
// ищет только один элемент/селекткор на странице, первый попавшийся элемент, который удовлетворяет этому селектору и остановится
// по Сss селектору ищет
// появляется в итоге как обьект в консоле
const footerParaghp = document.querySelector('footer p');
console.log(footerParaghp);

const blockTitel2 = document.querySelector('.block-titel2');
console.log(blockTitel2);
// к селектору обращаемся, как записывается в Css
// получила один элемент


// первая li внутри  ul 
// образение, как в CSS 'ul li:first-child'
const firstLi = document.querySelector('ul li:first-child');
console.log(firstLi);



// ВЗАИМОДЕСВИЕ С DOM-ЭЛЕМЕНТАМИ

// 1.
// мы находим что-то (элементы), чтобы динамически изменять 
//можно изменить: цвет, 
// можно сделать стили, менять эти стили
// свойсво, = присваивание значения этому свойсву
// значение указывается, как строка
// через JS добавили атрибут style и необходимо значение, которое будет 
customItem.style.fontSize = '50px';
// JS назначил атрибут style и написал свойсво fontSize 50px, доьавляюся inline стили
// js меняет разметру, меняя атрибуты и значения 
customItem.style.color = 'red';
// поменяли цвет




// 2.
// к содержимому этого тега 
// чтобы получить текст внутри тега
// получить текстовое содержимое какого-то элемента внутри DOM
// 2метода- text content, iner text (текстовое содержимое элемента)
// эти методы идентичны

console.log(customItem.innerText);
console.log(customItem.textContent);


// 3.
// поменять, присвоить какое- то другое значение элементу
customItem.innerText= 'Hello';
// заменить на пустоту, все удалить
// внутрь тега ничего не пишем, пустая строка
customItem.innerText= '';



// 4. ВЗАИМОДЕЙСВИЕ С ПЕРЕБИРАЕМЫМИ СУЩНОСТЯМИ / С ПСЕВДОМАССИВАМИ

// элемент можно получить и в нем можно что-то поменять 
// можно получить содердимое элемента, можно взаимодейсвовать с содержимым, можно его менять и удалять

// работа с элементами, которые в псевдомассивах (HTML коллекция)
// которые собраны с помощью:
// 1.querySelectorAll
// 2.getElementsByTagName
// 3.getElementsByClassName
// все эти три метода позволяют получить HTML коллекцию
// чтобы взаисодейсвовать с элемента у нее внутри,=> ее нужно перебрать 
// то есть это перебираемые сущности 


// могут быть доступны/ недоступны какие либо методы 
// For цикл - доступен к любой коллекции
// for ... of -тоже

// переьираем HTML коллекцмю и с каждым параграфом что-то делаем
// берем переменную, в уоторой лежит эта коллекция 
// далее с ней взаимодейсвуем через цикл for 
// простой синтаксис перебора чего угодно
// elemetn - теги, которые лежать в HTML коллекции (p.selected) и для каждого из них можем что-то делать
for(let element of paraghps) {
    element.style.backgroundColor = 'yellow';
}
// берем эlемент и меняет стиль 


// метод ForEach 
// можно использовать у такого псевдомассива, который собрать с помощью:
// querySelectorAll
// 
const conteinerElements1 = document.querySelectorAll('.conteiner');

// изменим текст во всех параграфах
paraghps.forEach(el=>{
el.textContent = 'New text';
});

conteinerElements1.forEach(item => console.log(item));
console.log(conteinerElements1);
// выведи все эдементы в консоль по отдельностиб сначал один, потом второй
// и по очереди с каждым дивом что-то делается

// мы их ищем для того, чтобы:
//  с ними что-то делать
// их можно менять
// их содержимое можно менять
// в них внутрь можно что-то помещать
// можно создавать на лету какие-то элементы в них, которые раньше в них не было, они появляюся при нажатии кнопки например




// УДАЛЕНИЕ ЭЛЕМЕНТОВ DOM
footerParaghp.remove(); //когда один
// когда надо удалить несколько , то через forEach перебираем и удаляем



// СОЗДАНИЕ ЭЛЕМЕНТОВ DOM
// создание элемента через JS
// (какой конкретный эоемент)
// создание тега <a></a> необходимо записать в переменную (const link)
const link = document.createElement('a');
// далее я могу наполнить его содержимым, добавить различные атрибуты
// как он будет готов- добавить его в разметку
//  !необъодимо сначала сделать все манипуляции с элементом: создать его содердимое, стелизацию, добавить необходимые атрибуты
//  ! и только в конце добавлять его в DOM (в реальную разметку)


// 1.способ, как добавлять атрибуты к элементам
// всегла работаем с переменной, где записан элемент
// добавляем атрибут
// всем страндартным атрибутам тегов: черех точку добавляем
link.href = 'https://google.com'
console.log(link);

// 2.способ
// нестрандартные , более хитрые атрибуты
// добавление атрибута и его значение
link.setAttribute('target', '_blank');
console.log(link);

// 3ю способ
// стелизауия ссылки
// добавляем стили 
link.style.color = 'violet'; //цвет 
link.style.textDecoration = 'underline'; //подчеркивание 
link.textContent = 'click me'; //доьавоеие тексва внутрь ссылки
console.log(link)

// ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В РАЗМЕТКУ/ на старницу
// 2 метода: appEnd, appendChild


// 1.метод
// APPENDCHILD
// различия: добавляет только элементы (узлы элементы)
// сначал пишем родителя (внутрь какого элемента нужно добавить созданный элемент)
// (что добавить нужно - переменную линк- готовую ссылку)
document.body.appendChild(link)//добавили в конец body
console.log(link)


// 2 пример
const forAdding = document.querySelector('.forAdding');

// создаем кнопку, через document creat element
const button = document.createElement('button');
// наполню его тектом 
button.textContent = 'My Button';
//эту кнопку  помещаю в <div class'forAdding'></div>
forAdding.append(button);
// пишется КУДА я помещаю.append(и ЧТО я помещаю)
// и теперь кнопка добавилась в div
console.log(button);
// 

// 2.метод
// APPEND
// различия: добавляет узлы элементов и тектсовые узлы










// РАБОТА С ДАТОЙ И ВРЕМЯ







// сверху находится переменная h2
// модно посмотреть его текстовое содержимое 
// и поменять это текстовое содержимое налету
h2Element.textContent = 'hi';
//я записываю сразу туда что-то записываю
// в браузе на странице появилось 'hi'

// также можно менять стиль налету 
// поменяла цвет
// у яstyle есть все CSS свойста 
// в данном примере color
h2Element.style.color = 'orange';

// удалить один элемент, текст из заголовка - пустые ковычки
h2Element.textContent = ''; 


// добавить класс (название нужного класса) .classList.add(назввние )
// добавить класс .classList.toggle ('название')
// toggle без события не отработаешь (вкл/выкл, как кнопка работает)
// удалить класс .classList.remove
// заменить содердимое атрибута class: .className= 'название'





// удалить один элемент, текст из заголовка - пустые ковычки



// всем прораграфам, которые есть на странице: добавить класс selected (название нужного класса ) .
// т к в paragraphs - лежит целый массив, его нужно перебрать и потом каждому элементу что-то назначать
// есть псевдомассив и перебираем его с помтщью метода ForEach
// как параметр принимаем (item/ element)
//  далее стрелка => и что мы этому элемнету делаем 
// classList  обращение к списку имеющихся классов
// .add - хотим добавить что-то у этому списку
// ('тут пишем то название , которое хочу добавить в список уже имеющихся классов')
paragraphs.forEach (element => element.classList.add('selected'));
// JS переберет параграыф и добавить каждому такой класс 'selected'
// с помощью JS можем управлять наличие, отсутвие или заменять эти классы, переключать эти классы
// динамически можем работать с классами 

// добавить класс к каждому второму
// через счетчик for i






// удалить класс classList.remove
// удалить элемент , можно сразу найти без создания переменной и сразу удалить его
document.querySelector('#last').remove();

// удвлила один элемент с ID
// footerParaghp.className = 'red-back'

// есть один параграф, значение классов затереть и вместо этого сделать(присвоить) другой класс 
// className это свойсво(не метод) и поэтому идет присваивание новго класса  'red-back'
footerParaghp.className = 'red-back';
//этому элементу переназначили класс


// ИТОГ
// CLAssLIST: работает со списком кслассов
//достает какие-то классы, добавляет туда какие-то классы, меняет, переключает какие-то классы
// метод, как функция вызывется со скобочками()

// CLAssNAME - это свойсво
// он заменяет собой все , что там было в этих классах
// идет присваивание


// создали кнопку в JS

const themeBtn = document.createElement('button');//<button.></button>
themeBtn.innerText = 'Change page color';//<button.> Change page color</button>
themeBtn.style.backgroundColor = '#000000';
themeBtn.style.color = '#fff';
document.body.appendChild(themeBtn);
// события добавляем - чтобы при нажатии что-то происходило
// при нажатии на кнопку body окрашивается в черный цвет
// для того, чтобы повесит обработчик события
