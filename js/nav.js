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

//owl*js***************//

$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
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

/***/

const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () => {
        item.classList.toggle("open");
        let description = item.querySelector(".description");
        if (item.classList.contains("open")) {
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        } else {
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})
function removeOpen(index1) {
    accordionContent.forEach((item2, index2) => {
        if (index1 != index2) {
            item2.classList.remove("open");
            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}