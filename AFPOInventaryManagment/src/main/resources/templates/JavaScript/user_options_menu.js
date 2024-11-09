const menu= document.querySelector('.fa-bars');
const menuDesplegable = document.querySelector('.user_options_menu_container')

menu.addEventListener('click', ()=>{
    menuDesplegable.classList.toggle('active_user_options_menu_container');
})