/* pegando o menu */
const menu = document.querySelector('.menu');
const navUL = document.querySelector('.navigation ul'); /* pegando as urls */

/* adicionando o evento quando clicar no menu */
menu.addEventListener('click', ()=> {
    navUL.classList.toggle('active'); /*  aplicando o estilo */
    menu.classList.toggle('active');

    
})
