import Swiper, { Navigation, Scrollbar } from 'swiper';

Swiper.use([Navigation, Scrollbar]);

let swiper = new Swiper('.swiperImages', {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
