const menu= document.querySelector('.fa-bars');
const userOptions = document.querySelector('.userOptionsMenuContainer')

menu.addEventListener('click', ()=>{
    userOptions.classList.toggle('activeUserOptionsMenuContainer');
})