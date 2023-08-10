const pets = 
const openBtn= document.querySelector('button');
const popup= document.querySelector('.popup');

document.addEventListener('click',(event) => {
    console.log(event.target);
   
    if(event.target.matches('button')) {
        popup.classList.add('visible');
    }
    // if(event.target === openBtn) {
    //     popup.classList.add('visible');
    // }
// открытие пропишем
// popup.classList.add('visible');
// event.target - это конкретный тот элемент , на который пришелся элемент (то есть я кликнула на h1 - то появится h1)
// слушаюся события на всем листе 

// if(event.target.matches('button')){
// доьавляем этот класс
// popup.classList.add('visible');}

// в теперь закрваем, чтобы обработались клики 
// когда окошко уже открыто, обрабатывюся
// console.log(event.target.closest('body'))
// если найдет выведет, если нет, то null


if (popup.classList.contains('visible')) {
    // if(!event.target.closest('.popup') && !event.target ===openBtn('button')){

    if(!event.target.closest('.popup') && !event.target.matches('button')){
        popup.classList.remove('visible');
        // popup.classList.add('visible');
    }
}
});