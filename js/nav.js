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
/******************************************************************************************/

(function (w, d, s, o, r, js, fjs) {
    w[r] = w[r] || function () { (w[r].q = w[r].q || []).push(arguments) }
    w[r]('app', '1UU6J7SJuw');
    if (d.getElementById(o)) return;
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o; js.src = 'https://embed.trustmary.com/embed.js';
    js.async = 1; fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'trustmary-embed', 'tmary'));

/************faq*********************************************************************************/

let toggles = document.getElementsByClassName('toggle');
let contentDiv = document.getElementsByClassName('faq-content');
let icons = document.getElementsByClassName('icon');

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener('click', () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            toggles[i].style.color = "#0084e9";
            icons[i].classList.remove('fa-plus');
            icons[i].classList.add('fa-minus');
        }
        else {
            contentDiv[i].style.height = "0px";
            toggles[i].style.color = "#111130";
            icons[i].classList.remove('fa-minus');
            icons[i].classList.add('fa-plus');
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = "0px";
                toggles[j].style.color = "#111130";
                icons[j].classList.remove('fa-minus');
                icons[j].classList.add('fa-plus');
            }
        }
    });
}