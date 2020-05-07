// import 'babel-polyfill';
// import fetch from 'node-fetch';
import MovieCardComponent from './MovieCardComponent';
import SliderComponent from './SliderComponent';
import Helper from './Helper';

export default class MoviesComponent {
  constructor() {
    this.root = document.createElement('div');
    this.slider = new SliderComponent();
  }

  init() {
    this.root.className = 'movies';

    const CARDS = `<div class="wrapper">
                      <div class="swiper-container">
                        <div class="swiper-wrapper"></div>
                        <!-- Add Pagination -->
                        <div class="swiper-pagination"></div>
                        <!-- Add Arrows -->
                        <div class="swiper-button-next"></div>
                        <div class="swiper-button-prev"></div>
                      </div>
                    </div>`;

    this.root.insertAdjacentHTML('beforeend', CARDS);

    this.fetchFilms('http://www.omdbapi.com/?s=cat&apikey=e504ed78');

    return this.root;
  }

  async fetchFilms(url) {
    await Helper.fetchPost(url).then((content) => this.addFilms(content));
  }

  addFilms(searchResult) {
    for (let i = 0; i < searchResult.Search.length; i += 1) {
      const card = new MovieCardComponent();
      this.root.querySelector('.swiper-wrapper').append(card.init(searchResult.Search[i]));
    }
    this.slider.init();
  }
}
