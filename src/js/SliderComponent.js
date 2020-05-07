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
      slidesPerView: 3,
      grabCursor: true,
      paginationClickable: true,
      spaceBetween: 30,
      loop: true,
    });
  }
}
