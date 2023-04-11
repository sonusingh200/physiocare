let openBtn = document.getElementById('open-menu')
let closeBtn = document.getElementById('close-menu')
let navMenu = document.getElementById('nav-bar-container')

openBtn.addEventListener('click', () => {
    navMenu.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('show')
})



let navLinks = document.querySelectorAll('.menu-links')
navLinks.forEach(e => {
    e.addEventListener('click', () => {
        let navMenu = document.getElementById('nav-bar-container')
        navMenu.classList.remove('show')
    })
    
})

let scrollh = () => {
    let header = document.getElementById("header");
    this.scrollY >= 50
      ? header.classList.add("bg-header")
      : header.classList.remove("bg-header");
  };
  
  window.addEventListener("scroll", scrollh);

