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

    if (this.scrollY >= 50) {
        header.classList.add("bg-header")
    }
    else {
        header.classList.remove("bg-header")
    }


};

window.addEventListener("scroll", scrollh);

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

