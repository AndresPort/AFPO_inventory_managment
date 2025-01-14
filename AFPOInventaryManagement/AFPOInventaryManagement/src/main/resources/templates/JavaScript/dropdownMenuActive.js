const options= document.querySelector('.fa-gear');
const dropdownMenu = document.querySelector('.nav__dropdownMenu')

options.addEventListener('click', ()=>{
    dropdownMenu.classList.toggle('dropdownMenuActive');
})