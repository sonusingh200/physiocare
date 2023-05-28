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

//owl*js*****************************************************************************************//

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3,
            nav: false
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 4,
            nav: false
        }
    }
});

/******************************************************************************************/
(function (w,d,s,o,r,js,fjs) {
    w[r]=w[r]||function() {(w[r].q = w[r].q || []).push(arguments)}
    w[r]('app', '1UU6J7SJuw');
    if(d.getElementById(o)) return;
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = 'https://embed.trustmary.com/embed.js';
    js.async = 1; fjs.parentNode.insertBefore(js, fjs);
  }(window, document, 'script', 'trustmary-embed', 'tmary'));