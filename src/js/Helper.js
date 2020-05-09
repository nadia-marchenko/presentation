import Swiper from 'swiper';

export default class Helper {
  static async fetchPost(url) {
    try {
      const response = await fetch(url);
      const json = await response.json();
      // this.hideSpinner();
      return json;
    } catch (error) {
      throw new Error('No data');
    }
  }

  // static showSpinner() {
  //   document.querySelector('main').insertAdjacentHTML('afterbegin', '<div id="spinner"></div>');
  // }

  static showSpinner() {
    // this.root.insertAdjacentHTML('afterbegin', '<div id="spinner"></div>');
    document.getElementById('spinner').removeAttribute('hidden');
  }

  static hideSpinner() {
    document.getElementById('spinner').setAttribute('hidden', '');
  }

  static addSwiper() {
    /* eslint-disable no-unused-vars */
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
  /* eslint-enable no-unused-vars */
  }
}
