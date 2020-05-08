import Swiper from 'swiper';

export default class SliderComponent {
  constructor() {
    this.root = document.createElement('div');
  }

  init() {
    this.root.className = 'slider';
    const SWIPER = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: true,
      grabCursor: true,
      paginationClickable: true,
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
      loop: true,
    });
  }
}
