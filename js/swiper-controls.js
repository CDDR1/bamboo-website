const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,   
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 700,

    // Autoplay 
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});