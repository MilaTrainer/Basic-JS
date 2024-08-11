/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const ArrayCars = [{
    carBrand: 'audi',
    price: 500,
    isAvailableForSale: true,
}, {
    carBrand: 'wolsvagen',
    price: 1500,
    isAvailableForSale: false,
}, {
    carBrand: 'bmw',
    price: 300,
    isAvailableForSale: true,
}];

ArrayCars.push({
    carBrand: 'volvo',
    price: 3500,
    isAvailableForSale: true,
});

console.log(ArrayCars);