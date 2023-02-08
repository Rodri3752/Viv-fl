const barmenu = document.querySelector('.nav-bar');
let navbars = document.querySelector('#menu-bar');
let header3 = document.querySelector('.header-3');
let scrollTop = document.querySelector('.scroll-top');
document.querySelector("#menu-bar").onclick = () => {
        navbars.classList.toggle('fa-times');
        barmenu.classList.toggle('active');
        cart.classList.remove('active');
    }
    /*
    barmenu.addEventListener('click',()=>{
        navbars.classList.toggle('fa-times');
        barmenu.classList.toggle('active');
    })
    */

window.onscroll = () => {

    navbars.classList.remove('fa-times');
    barmenu.classList.remove('active');
    if (window.scrollY > 250) {
        header3.classList.add('active');
    } else {
        header3.classList.remove('active');
    }
    if (window.scrollY > 250) {
        scrollTop.style.display = 'initial';
    } else {
        scrollTop.style.display = 'none';
    }

}

let swiper = new Swiper(".home-slider", {

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
