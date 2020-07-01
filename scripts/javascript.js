var botaomenu = document.querySelector(".botao-menu-responsivo");
var menu = document.querySelector('.menu')
var body = document.querySelector('body')


var itemsmenu = document.querySelectorAll('.item')

itemsmenu.forEach((item)=>{
    item.addEventListener('click', ()=>{
        menu.classList.remove('mostrar')
        body.classList.remove('scrolar')
    })
})

botaomenu.addEventListener('click', ()=>{
    menu.classList.toggle('mostrar')
    body.classList.add('scrolar')
});

window.onresize = ()=>{
    menu.classList.remove('mostrar');
    body.classList.remove('scrolar')
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


