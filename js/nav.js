let openBtn = document.getElementById('open-menu')
let closeBtn = document.getElementById('close-menu')
let navMenu = document.getElementById('nav-bar-container')

openBtn.addEventListener('click', ()=>{
    navMenu.classList.add('show')
})
closeBtn.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})