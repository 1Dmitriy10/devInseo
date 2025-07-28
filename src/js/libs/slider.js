// ========================= Подключение слайдера =============================================
//подключение в gulp 
import Swiper from 'swiper/bundle';
import "swiper/swiper-bundle.css";


const portfolioSlider = new Swiper('.portfolio-slider', {
    // Стрелки
    navigation: {
        nextEl: '.portfolio__slider-btn-next',
        prevEl: '.portfolio__slider-btn-prev',
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
    /*Отступ у карточек*/
    // spaceBetween: 22,
    /*Показывать по n карточек*/
    // slidesPerView: 1,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    // lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1220: {
            slidesPerView: 2.8,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 15,
        }
    },

});

const brandPrevSlider = new Swiper('.brand-prev__slider', {
    // Стрелки
    // navigation: {
    //     nextEl: '.slider-btn-next',
    //     prevEl: '.slider-btn-prev',
    // },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
    /*Отступ у карточек*/
    spaceBetween: 12,
    /*Показывать по n карточек*/
    slidesPerView: 1.4,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    // lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 15,
        }
    },

});

const reviewsSlider = new Swiper('.reviews-slider', {
    // Стрелки
    navigation: {
        nextEl: '.reviews__slider-btn-next',
        prevEl: '.reviews__slider-btn-prev',
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
    /*Отступ у карточек*/
    spaceBetween: 12,
    /*Показывать по n карточек*/
    slidesPerView: 1.2,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    // lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1440: {
            slidesPerView: 3.5,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        575: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        }
    },

});

const teamSlider = new Swiper('.team-swiper', {
    // Стрелки
    navigation: {
        nextEl: '.reviews__slider-btn-next',
        prevEl: '.reviews__slider-btn-prev',
    },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true
    //   },
    /*Отступ у карточек*/
    spaceBetween: 12,
    /*Показывать по n карточек*/
    slidesPerView: 1.2,
    /* При достижении конца, перепрыгнуть в начало */
    // rewind: true,
    /*Увеличение при наведении курсора мыши */
    // zoom: true,
    /*Ленивая подгрузка */
    // lazy: true,
    /*Бесконечная прокрутка */
    // loop: true,
    /*Ориентация */
    // direction: 'vertical',
    /*Авто высота*/
    // autoHeight: true,
    /*иконка захвата при наведении на слайд*/
    grabCursor: true,
    /*Автоматическое перелистывание*/
    // autoplay: {
    //     delay: 5000,
    //   },
    /*Брек-поинты*/
    breakpoints: {
        1440: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        575: {
            slidesPerView: 1.2,
            spaceBetween: 15,
        }
    },

});




