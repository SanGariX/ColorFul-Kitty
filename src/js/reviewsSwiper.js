import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiperReviews = () => {
  new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    speed: 800,
    grabCursor: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1440: {
        slidesPerView: 4.2,
      },
    },
  });
};

export default swiperReviews;
