var botaomenu = document.querySelector(".botao-menu-responsivo");
var menu = document.querySelector('.menu')
var body = document.querySelector('body')

botaomenu.addEventListener('click', ()=>{
    menu.classList.toggle('mostrar')
});

window.onresize = ()=>{
    menu.classList.remove('mostrar');
}