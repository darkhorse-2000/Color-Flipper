const colors = ['blue', 'orange', 'yellow', 'green', 'purple', 'grey', 'violet', 'black', 'white'];

let button = document.querySelector('.btn');

let body = document.querySelector('body');
let colorName = document.querySelector('.colors');
let randomNumber;


button.addEventListener('click', ()=>{
    randomNumber = Math.round(Math.random()*5);
    body.style.background = colors[randomNumber];
    colorName.innerHTML = colors[randomNumber];
});