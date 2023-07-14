'use strict';
// const form = document.querySelector('form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     document.body.innerHTML += 'Submit';);

// еще один способ 
document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('form'),
        input = form.querySelector('.form-control'),
        ul = document.querySelector('.list-group');


const renderList =(taskText, parent)  => {
    ul.innerHTML += `
<li class="list-group-item"> 
        <label class="form-check-label"><input class="form-check-input me-3" type="checkbox"> ${taskText}</label>
</li>
`;
input.value = '';
}
// li.addEventListener('click', () => {
//     console.log (li);

form.addEventListener('submit', (event) => {
    event.preventDefault(); //отмена дейсия по умолчанию
// console.log(taskText);
renderList(input.value, ul);

ul.querySelectorAll('.list-group-item').forEach(li => {
    // li.querySele).chcto('.list-group-item'ecked); //будет ли он чекнутый или нет, этот li
    li.addEventListener('click', () => {
        if (li.querySelector('.form-check-input').checked){
            li.classList.add('list-group-item-success');
        } else {
            li.classList.remove('list-group-item-success');
        }
    })
    })
//   console.log(li);
})
})
// если хотим несколько переменных через конст , то ставитт запятую
//  const form = document.querySelector('form'), -тут запятая 
// input = form.querySelector('input');