const options= document.querySelector('.fa-gear');
const dropdown_menu = document.querySelector('.nav__dropdown_menu')

options.addEventListener('click', ()=>{
    dropdown_menu.classList.toggle('dropdown_menu_active');
})