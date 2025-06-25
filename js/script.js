document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-form');
    const loginForm = document.querySelector('.login-form-container');
    const searchBtn = document.querySelector('#search-btn');
    const loginBtn = document.querySelector('#login-btn');
    const closeLoginBtn = document.querySelector('#close-login-btn');
    const header2 = document.querySelector('.header .header-2');
    const loaderContainer = document.querySelector('.loader-container');

    // Toggle search form
    searchBtn.onclick = () => {
        searchForm.classList.toggle('active');
    };

    // Toggle login form
    loginBtn.onclick = () => {
        loginForm.classList.toggle('active');
    };

    closeLoginBtn.onclick = () => {
        loginForm.classList.remove('active');
    };

    // Sticky nav on scroll
    window.onscroll = () => {
        if (window.scrollY > 80) {
            header2.classList.add('active');
        } else {
            header2.classList.remove('active');
        }
        fadeOut();
    };

    function loader() {
        loaderContainer.classList.add('active');
    }

    function fadeOut() {
        setTimeout(loader, 3000);
    }

    fadeOut(); // Call it once at page load

    // Swiper sliders
    const bookSlider = new Swiper(".books-slider", {
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    const featuredSlider = new Swiper(".featured-slider", {
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            465: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
        },
    });

    const arrivalsSlider = new Swiper(".arrivals-slider", {
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    const reviewsSlider = new Swiper(".reviews-slider", {
        loop: true,
        centeredSlides: true,
        spaceBetween: 10,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });

    const blogsSlider = new Swiper(".blogs-slider", {
        loop: true,
        centeredSlides: true,
        grabCursor: true,
        spaceBetween: 10,
        autoplay: {
            delay: 9500,
            disableOnInteraction: false,
        },
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        },
    });
});
