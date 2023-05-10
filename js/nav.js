let openBtn = document.getElementById('open-menu')
let closeBtn = document.getElementById('close-menu')
let navMenu = document.getElementById('nav-bar-container')

openBtn.addEventListener('click', () => {
    navMenu.classList.add('show')
    event.stopPropagation()
})
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('show')
    event.stopPropagation()
})



let navLinks = document.querySelectorAll('.menu-links')
navLinks.forEach((e) => {
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
        delay: 2500,
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

//owl js ..........//
const owl = $('.owl-carousel');
owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        240: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});

$('.play').on('click', function () {
    owl.trigger('play.owl.autoplay', [1000])
})
$('.stop').on('click', function () {
    owl.trigger('stop.owl.autoplay')
})