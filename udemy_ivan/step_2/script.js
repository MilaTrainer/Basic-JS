'use strict';

// Задачи:

// Создайте переменную с названием магазина (магазин - store, имя - name) и поместите в неё любое название на ваш выбор.

const storeShopName = 'Max';
// Создайте объект под названием storeDescription
const storeDescription = {};
// Во внутрь этого объекта напрямую поместите свойство budget и укажите его как 10000. Напрямую - это сразу внутри фигурных скобок, мы его расширяем на месте
storeDescription.budget = 10000;
console.log(storeDescription);
// Во внутрь объекта storeDescription напрямую поместите свойство employees. Это должен быть массив, который содержит имена трех сотрудников на ваш выбор
storeDescription.employees = ['Victor', 'Alena', 'Kate'];
console.log(storeDescription);
// Во внутрь объекта storeDescription напрямую поместите свойство products. Это должен быть тоже объект, который содержит два товара и их цену. То есть, нужно создать пару ключ-значение в виде товар: цена Данные на ваш выбор.
storeDescription.products = {
    'banan': 35, 
    'apple': 40, 
}
console.log(storeDescription);
// Во внутрь объекта storeDescription напрямую поместите свойство open. Тут можно контролировать: или магазин открыт, или закрыт, то есть логическое значение. Сделайте его открытым
storeDescription.open =  true;
console.log(storeDescription);
