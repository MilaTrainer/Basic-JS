//Пример
//Используйте метод querySelector, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Ты нашёл элемент и изменил его текст!"
//Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

// const text = document.getElementById('practicum0');
// const btnTask1 = document.querySelector('.b-0');

// btnTask1.addEventListener('click', () => {
// 	text.innerHTML = `Ты нашёл элемент и изменил его текст!`;
// })

// 2 вариант
// const paragraph = document.getElementById('practicum0');
// function makeZero() {
// 	paragraph.innerText = 'Ты нашёл элемент и изменил его текст!';
// }

// document.querySelector('.b-0').onclick = makeZero();


// //Задание 1
// //Используйте метод getElementById, чтобы найти элемент <p>. При нажатии на кнопку измените его текст на "Привет!"
// //Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

// const textForTask1 = document.getElementById('practicum');
// const btnTask11 = document.querySelector('.b-1');
// btnTask11.addEventListener('click', () => {
// 	textForTask1.innerHTML = 'Hello';
// })


// ВТОРОЙ ВАРИАНТ
// function makeOne() {
// 	textForTask1.innerHTML = `Hello`
// }


// ВТОРОЙ ВАРИАНТ
// document.querySelector('.b-1').onclick = makeOne;

// //Задание 2
// //Используйте метод getElementById, чтобы найти элемент <span>. При нажатии на кнопку измените его текст на "Привет, Мир!"
// //Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

// const divForText = document.getElementById('practicum2');
// const btnTask2 = document.querySelector('.b-2');
// function makeTwo() {
// 	divForText.innerHTML = `Hi, world!`;
// }

// ВТОРОЙ ВАРИАНТ
// btnTask2.addEventListener('click', makeTwo);


// //Задание 3
// //Используйте метод querySelector, чтобы найти элемент <h1>. При нажатии на кнопку измените его текст на "Заголовок изменен!"
// //Подсказка: Используйте метод для изменения текстового содержимого элемента (innerHTML/innerText/textContent)

// const textTask3 = document.querySelector('h1');
// //
// const btnTask3 = document.querySelector('.b-3');

// function makeThree() {
// 	textTask3.innerHTML = `Title changed`;
// }

// btnTask3.addEventListener('click', makeThree);

// ВТОРОЙ ВАРИАНТ
// document.querySelector('.b-3').onclick = makeThree;


// //Задание 4
// //Используйте метод querySelector, чтобы найти элемент <div>. При нажатии на кнопку измените его фоновый цвет на красный.
// //Подсказка: Используйте свойство style для изменения стилей элемента

// const styleDiv = document.querySelector('#practicum4');
// const btnTask4 = document.querySelector('.b-4');

// function makeFour() {
// 	btnTask4.addEventListener('click', () => {
// 		styleDiv.style.backgroundColor = 'red';
// 	})
// }
// makeFour();


// ВТОРОЙ ВАРИАНТ
// document.querySelector('.b-4').onclick = makeFour;

// //Задание 5
// //Используйте метод getElementById, чтобы найти элемент <input>. При нажатии на кнопку измените его значение на "Новое значение".
// //Подсказка: Используйте свойство value для изменения значения элемента формы


// const inpuTask5 = document.getElementById('practicum5');
// const btn = document.querySelector('.b-5');
// function makeFive() {

// 	btn.addEventListener('click', () => {
// 		inpuTask5.value = `Новое значение`;
// 	}
// 	)
// }

// makeFive();

// // ВТОРОЙ ВАРИАНТ
// document.querySelector('.b-5').onclick = makeFive;

// //Задание 6
// //Используйте метод getElementById, чтобы найти элемент <img>. При нажатии на кнопку измените его атрибут src на "newimage.jpg", а атрибут alt на "Новое изображение".
// //Подсказка: Используйте знак равенства для изменения атрибутов элемента

// const img = document.getElementById('practicum6');
// const btnTask6 = document.querySelector('.b-6');

// function makeSixz() {
// 	btnTask6.addEventListener('click', () => {
// 		// img.setAttribute('src', newimage.jpg);
// 		img.src = 'newimage.jpg';
// 		img.alt = 'Новое изображение';
// 	})
// }
// makeSixz();

// // ВТОРОЙ ВАРИАНТ
// document.querySelector('.b-6').onclick = makeSix;

// //Задание 7
// //Используйте метод querySelector, чтобы найти элемент <a>. При нажатии на кнопку измените его href на "https://www.google.com", а название ссылки на "Ссылка на Google".
// //Подсказка: Используйте знак равенства для изменения атрибутов элемента и метод для изменения текстового содержимого элемента

// const sTask7 = document.querySelector('#practicum7');
// const btnTask7 = document.querySelector('.b-7');

// function makeSeven() {
// 	btnTask7.addEventListener('click', () => {
// 		sTask7.href = "https://www.google.com";
// 		sTask7.innerHTML = "Ссылка на Google";
// 	})
// }
// makeSeven();

// ВТОРОЙ ВАРИАНТ
// document.querySelector('.b-7').onclick = makeSeven;

// //Задание 8
// //Используйте метод getElementById, чтобы найти элемент <ul>. При нажатии на кнопку добавьте новый элемент <li> со значением "Новый элемент" в список.
// //Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.



// function makeEight() {
// 	const elementsTask8 = document.getElementById('practicum8');//Найдите элемент x
// 	const liTask8 = document.createElement('li');//Создайте новый пункт списка y
// 	liTask8.textContent = "Новый элемент";//Добавьте значение в созданный пункт списка y
// 	elementsTask8.appendChild(liTask8);//Добавьте в список х новый элемент y
// }

// document.querySelector('.b-8').onclick = makeEight;

// //Задание 9
// //Используйте метод getElementById, чтобы найти элемент <select>. При нажатии на кнопку добавьте новый элемент <option> со значением "Новый вариант" в список.
// //Подсказка: Используйте метод createElement(), который используется для динамического изменения и взаимодействия с элементами веб-страницы, и метод append(item), который добавляет элемент в конец списка. Новый элемент становится последним элементом списка.

// function makeNine() {
// 	const selectTask9 = document.getElementById('practicum9');	//Найдите элемент 
// 	const newOption = document.createElement('option');//Создайте новый элемент
// 	newOption.textContent = "Новый вариант";//Добавьте текст в созданный эелемент
// 	selectTask9.appendChild(newOption);
// 	//Добавьте новый элемент в выпадающий список
// }


//  ВТОРОЙ ВАРИАНТ
// document.querySelector('.b-9').onclick = makeNine;

// //Задание 10
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его стиль на "display: none;", чтобы скрыть его.
// //Подсказка: Используйте свойство display для изменения стилей элемента

// function makeTen() {
// 	const divTask10 = document.getElementById('practicum10');
// 	divTask10.style.display = 'none';
// }

// document.querySelector('.b-10').onclick = makeTen;


// 50 СТРОЧЕК СЕГОДНЯ 


// //Задание 11
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку измените его ширину на 400px и высоту на 200px.
// //Подсказка: Используйте свойство style для изменения стилей элемента

// function makeEleven() {
// 	const divTask11 = document.getElementById('practicum11');
// 	divTask11.style.width = '400px';
// 	divTask11.style.height = '200px';
// }
// //  ВТОРОЙ ВАРИАНТ
// document.querySelector('.b-11').onclick = makeEleven;


// 54 СТРОЧЕК СЕГОДНЯ

// //Задание 12
// //Используйте метод querySelector, чтобы найти элемент <div>. При клике на этот элемент измените его ширину на 400px и высоту на 200px. При повторном клике верните его размеры в исходное состояние.
// //Подсказка: Используйте метод toggle() для добавления/удаления класса, который изменяет размеры элемента

// function makeTwelve() {
// 	const divTask12 = document.querySelector('#practicum12');
// 	// divTask12.addEventListener('click', () => {
// 	divTask12.classList.toggle('mila');
// 	// })
// }

// 57 СТРОЧЕК СЕГОДНЯ	

// //Задание 13
// //Используйте метод `getElementsByTagName`, чтобы найти первый элемент <ol>. Затем измените его текст на "Первый!".
// //Подсказка: Используйте метод для изменения текстового содержимого элемента

// function makeThirteen() {
// 	const ol = document.getElementsByTagName('ol');
// 	let olElement = ol[0];
// 	olElement.textContent = 'Первый';
// 	console.log(ol);
// }

// document.querySelector('.b-13').onclick = makeThirteen;

// 61СТРОЧЕК

// //Задание 14
// //Используйте метод querySelectorAll, чтобы найти все элементы <p> на странице. Затем измените их текст на "Огого, что могу!".
// //Метод forEach является методом массивов в JavaScript. Он выполняет указанную функцию один раз для каждого элемента в массиве. С этим методом мы познакомимся на следующей неделе.

function makeFourteen() {
	const paragraphs = document.querySelectorAll('p');//Найдите все элементы <p>

	paragraphs.forEach(function (paragraph) {
		paragraph.textContent = '"Огого, что могу!"'; //Измените их текстовое содержимое у paragraph
	});
}

document.querySelector('.b-14').onclick = makeFourteen;

// 64 x СТРОЧКИ

// //Если задание выполнено верно, то вы увидите, что все элементы <p> на странице, в том числе и задния, изменили свои значения.  Чтобы вернуть всё, как было до выполнения задания, перезагрузите страницу.

// //Задание 15
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "practicum15".
// //Подсказка: Используйте метод remove для удаления класса элемента



function makeFifteen() {
	const div = document.getElementById('practicum15');
	div.remove('practicum15');//
}
document.querySelector('.b-15').onclick = makeFifteen;
// 67 СТРОЧЕК

// //Задание 16
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "practicum16".
// //Подсказка: Используйте метод add для добавления класса элемента



// 28.02.2024
function makeSixteen() {
	// 	//Ваш код
	const div16 = document.getElementById('practicum16');
	div16.classList.add('practicum16');
}
document.querySelector('.b-16').onclick = makeSixteen;

// //Задание 17
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку переключите у него класс "color", который изменяет его фоновый цвет. Если класс уже присутствует, удалите его, иначе добавьте.
// //Подсказка: Используйте метод toggle класса элемента

function makeSeventeen() {
	const div = document.getElementById('practicum17');
	div.classList.toggle('color');
}
document.querySelector('.b-17').onclick = makeSeventeen;

// //Задание 18
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте ему класс "active", который изменит его стиль, например, изменит цвет текста. При повторном нажатии удалите класс "active".
// //Подсказка: Используйте метод toggle класса элемента

function makeEighteen() {
	const div = document.getElementById('practicum18');
	div.classList.toggle('active');
	if (div.classList.contains('activ')) {
		div.style.color = 'red';
	}
}
document.querySelector('.b-18').onclick = makeEighteen;

// //Задание 19
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку удалите у него класс "active", который изменяет его стиль, например, изменяет цвет текста.
// //Подсказка: Используйте метод remove класса элемента

function makeNineteen() {
	const div = document.getElementById('practicum19');
	div.classList.remove('active');
}
document.querySelector('.b-19').onclick = makeNineteen;

// //Задание 20
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в начало элемента <div> новый дочерний элемент <p> с текстом "Добавлено в начало".
// //Подсказка: Используйте метод prepend для добавления нового дочернего элемента в начало элемента <div>

function makeTwenty() {
	const div = document.getElementById('practicum20');
	const p = document.createElement('p');
	p.textContent = "Добавлено в начало";
	div.prepend(p);
}

document.querySelector('.b-20').onclick = makeTwenty;

// //Задание 21
// //Используйте метод getElementById, чтобы найти элемент <div>. При нажатии на кнопку добавьте в конец элемента <div> новый дочерний элемент <p> с текстом "Добавлено в конец".
// //Подсказка: Используйте метод append для добавления нового дочернего элемента в конец элемента <div>

function makeTwentyOne() {
	const div = document.getElementById('practicum21');
	const p = document.createElement('p');
	p.textContent = "Добавлено в конец";
	div.append(p);
}

document.querySelector('.b-21').onclick = makeTwentyOne;

// //Задание 22
// //Используйте метод getElementById, чтобы найти элемент <img>. Выведите информацию на экран о наличии атрибута "src" у изображения.
// //Подсказка: Используйте метод hasAttribute для проверки наличия атрибута

// function makeTwentyTwo() {
// const picter = document.getElementById('practicum22');	//1 шаг: Найдите элемент
// const truePicter = picter.hasAttribute(scr);
// console.log(truePicter); //2 шаг: Создайте переменную, которая проверяет наличие атрибута у найденного элемента

// 	//3 шаг: Найдите элемент, в который нужно вставить значение
// 	//4 шаг: Добавьте в эелемент текстовое значение 2 шага. Например: переменная = 'Атрибут "src" присутствует: ' + название переменной из 2 шага;
// }
// document.querySelector('.b-22').onclick = makeTwentyTwo;

// //Задание 23
// //Используйте метод getElementById, чтобы найти элемент <a>. Удалите атрибут "href" ссылки.
// //Подсказка: Используйте метод removeAttribute для удаления атрибута

function makeTwentyThree() {
	const aAtribut = document.getElementById('practicum23');
	console.log(aAtribut);
	aAtribut.removeAttribute("href");
}
document.querySelector('.b-23').onclick = makeTwentyThree;

// //Задание 24
// //Используйте метод getElementById, чтобы найти элемент <input>. Установите атрибут "value" текстового поля на значение "Новое значение".
// //Подсказка: Используйте метод setAttribute для установки атрибута

function makeTwentyFour() {
	const input = document.getElementById('practicum24');
	input.setAttribute('value', 'Новое значение');
	input.value = 'Новое значение';
}

document.querySelector('.b-24').onclick = makeTwentyFour;

// //Задание 25
// //Используйте метод getElementById, чтобы найти элемент <div>. Добавьте атрибут "data-info" со значением "Дополнительная информация" к элементу <div>. Выведите значение атрибута на экран.
// //Подсказка: Используйте метод setAttribute для добавления атрибута

function makeTwentyFive() {
	const div = document.getElementById('practicum25');//1 шаг: Найдите элемент

	div.setAttribute('data-info', 'Дополнительная информация');//2 шаг: Добавьте элементу, найденному в первом шаге, атрибут: ('data-info', 'Дополнительная информация');

	const attributeValue = div.getAttribute('data-info');
	console.log(attributeValue); //3 шаг: Запишите значение атрибута в переменную

	const p = document.getElementById('infoOutput');
	console.log(attributeValue);//4 шаг: Найдите элемент, в который нужно вставить значение из 3 шага

	p.innerHTML = 'Добавленный атрибут: ' + attributeValue;//5 шаг: Добавьте в элемент 4 шага текстовое значение 3 шага. Например: переменная = 'Добавленный атрибут: ' + название переменной из 3 шага;
}
document.querySelector('.b-25').onclick = makeTwentyFive;

// //Задание 26
// //Используйте метод closest, чтобы найти ближайший родительский элемент с классом "parent". При нажатии на кнопку измените его фоновый цвет на красный.

// //Подсказка: Используйте метод closest для поиска ближайшего родительского элемента

const makeTwentySix = () => {
	const btn = document.querySelector('.b-26');
	const parent = btn.closest('.parent');
	parent.style.background = 'red';
};
document.querySelector('.b-26').onclick = makeTwentySix;

// //Задание 27
// //Используйте метод `getElementById`, чтобы найти элемент `<div>`. Проверьте, содержит ли данный элемент класс `highlight`. Выедите результат в <div> c id result.
// //Подсказка: Используйте метод `contains` для проверки наличия класса у элемента. В <div> должен появиться результат true или false.

function makeTwentySeven() {
	const div = document.getElementById('practicum27'); //Найдите переменную

	const divResult = div.classList.contains('highlight');
	console.log(divResult);//Создайте переменную и сохраните в неё результат проверки метода contains. Например: const result = p.classList.contains('active');

	const result = document.getElementById('result');//Найдите переменную, в которую нужно вывести результат
	result.innerHTML = divResult;//Запишите результат в переменную
}

document.querySelector('.b-27').onclick = makeTwentySeven;

// //Задание 28
// //Используйте метод getElementById, чтобы найти элемент <button>. Добавьте обработчик события click, который будет выводить сообщение "Кнопка нажата" в консоль при каждом клике на кнопку.
// //Подсказка: Используйте метод addEventListener для добавления обработчика события

// const buttonTaskTwentyEight = document.getElementById('button28');
const buttonTaskTwentyEight = document.getElementById('button28');

function handleClick() {
	console.log('Кнопка нажата');
}
buttonTaskTwentyEight.addEventListener('click', handleClick);

// //Задание 29
// //Используйте метод getElementById, чтобы найти элемент <input />. Добавьте обработчик события change, который будет выводить сообщение "Значение изменено" в консоль при изменении значения в поле ввода.
// //Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.

function handleChange() {
	console.log('Значение изменено');
}
const input = document.getElementById('input29');
input.addEventListener('change', handleChange);
// //Задание 30
// //Используйте метод getElementById, чтобы найти элемент <div>. Добавьте обработчик события `mouseover`, который будет выводить сообщение "Курсор наведен на элемент" в консоль при наведении курсора на элемент.
// //Подсказка: Используйте метод addEventListener для добавления обработчика события. Чтобы проверить работу слушателя, нужно напечатать один символ и более в поле ввода и убрать фокус с инпута, кликнув на любое место страницы.
function handleMouseOver() {
	console.log('Курсор наведен на элемент');
}
const div30 = document.getElementById('div30');
div30.addEventListener('mouseover', handleMouseOver);
// //Ваш код
