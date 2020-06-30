var botaomenu = document.querySelector(".botao-menu-responsivo");
var menu = document.querySelector('.menu')

botaomenu.addEventListener('click', ()=>{
    console.log(menu)
    menu.classList.toggle('mostrar')
})