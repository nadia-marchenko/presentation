// import 'babel-polyfill';
// import fetch from 'node-fetch';
import MovieCardComponent from './MovieCardComponent';
import SliderComponent from './SliderComponent';
import Helper from './Helper';

export default class MoviesComponent {
  constructor() {
    this.root = document.createElement('div');
    // this.slider = new SliderComponent();
  }

  init(input) {
    this.root.className = 'movies';

    const CARDS = `<div class="wrapper movies-wrapper">
                    <div class="swiper-container">
                      <div class="swiper-wrapper"></div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-next"></div>
                      <div class="swiper-button-prev"></div>
                    </div>
                  </div>`;

    this.root.insertAdjacentHTML('beforeend', CARDS);

    this.fetchMovies(`https://www.omdbapi.com/?s=${input}&apikey=e504ed78`);

    return this.root;
  }

  async fetchMovies(url) {
    await Helper.fetchPost(url).then((content) => this.addMovies(content));
  }

  addMovies(searchResult) {
    for (let i = 0; i < searchResult.Search.length; i += 1) {
      const card = new MovieCardComponent();
      this.root.querySelector('.swiper-wrapper').append(card.init(searchResult.Search[i]));
    }
    Helper.addSwiper();
    // new SliderComponent().init();
  }

  changeMovies(inputMovie) {
    document.querySelector('.movies').remove();
    document.querySelector('main').append(this.init(inputMovie));
  }
}
