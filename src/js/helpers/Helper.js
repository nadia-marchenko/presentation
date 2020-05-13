import Swiper from '../../../node_modules/swiper';

const fetch = require('../../../node_modules/node-fetch');

export default class Helper {
  static async fetchPost(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }

  static isRussianWord(word) {
    return (/[а-я]/.test(word));
  }

  static addSwiper() {
    /* eslint-disable no-unused-vars */
    const SWIPER = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: true,
      centerInsufficientSlides: true,
      grabCursor: true,
      paginationClickable: true,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 5,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
    /* eslint-enable no-unused-vars */
  }
}
