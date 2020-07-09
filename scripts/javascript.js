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

new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro: "<div id='form-erro'><p>Um erro ocorreu, tente para o email arianemiranda58@gmail.com</p></div>", // mensagem de erro
    sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });


