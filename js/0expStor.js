console.log('для 0');


console.log("Swiper init");

document.addEventListener("DOMContentLoaded", () => {
    // Перший Swiper
    const swiper1 = new Swiper(".mySwiper1", {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: false,
        },
        effect: "slide",
        navigation: {
            nextEl: ".mySwiper1-next",
            prevEl: ".mySwiper1-prev",
        },
        pagination: {
            el: ".mySwiper1-pagination",
            clickable: true,
        },
        breakpoints: {
            770: {
                navigation: {
                    enabled: true,
                },
                pagination: {
                    enabled: false,
                },
            },
            0: {
                navigation: {
                    enabled: false,
                },
                pagination: {
                    enabled: true,
                },
            },
        },
    });

    // Другий Swiper
    const swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: ".mySwiper2-next",
            prevEl: ".mySwiper2-prev",
        },
        pagination: {
            el: ".mySwiper2-pagination",
            clickable: true,
        },
    });

    // 3swiper

const swiper3 = new Swiper(".mySwiper3", {
    breakpoints: {
        2000:{
            slidesPerView: 5
        },
        1700:{
            slidesPerView: 4
        },
        1024: {
             slidesPerView: 3,
            spaceBetween: -1
         },
        768: { slidesPerView: 2,
            spaceBetween: 0
         },
        425: { slidesPerView: 1 },
    }, // Три слайда одновременно
    
    autoplay: {
        delay: 1000000,
    },

    pagination: {
        el: ".mySwiper3-pagination", // Исправленный селектор
        clickable: true, // Возможность кликать по точкам
    },
});


});

