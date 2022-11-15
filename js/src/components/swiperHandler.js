import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
// import "./styles/style.scss";

export class swiperHandler {
    static founder() {
        let founders = new Swiper(".swiper-wrapper", { 
            loop: true,
            slidesPerView: 1,
            spaceBetween: 80,
            grabCursor: true,
            effect: "fade",
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            navigation: {
                nextEl: ".swiper-right_a",
                prevEl: ".swiper-left_a",
            },
        });
    }
}