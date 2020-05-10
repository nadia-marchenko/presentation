// import 'babel-polyfill';
// import fetch from 'node-fetch';
import MovieCardComponent from './MovieCardComponent';
import Helper from './Helper';

export default class MoviesComponent {
  constructor() {
    this.root = document.createElement('div');
  }

  init(inputMovie) {
    this.root.className = 'movies';

    const CARDS = `<div id="spinner" hidden></div>
                  <div class="wrapper movies-wrapper">
                    <div class="swiper-container">
                      <div class="swiper-wrapper"></div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-next"></div>
                      <div class="swiper-button-prev"></div>
                    </div>
                  </div>`;

    this.root.insertAdjacentHTML('beforeend', CARDS);

    this.fetchMovies(inputMovie);

    return this.root;
  }

  async fetchMovies(inputMovie) {
    try {
      const URL = `https://www.omdbapi.com/?s=${inputMovie}&apikey=e504ed78`;
      await Helper.fetchPost(URL).then((content) => ((content.Response === 'False' && content.Error === 'Movie not found!')
        ? this.root.insertAdjacentHTML('afterbegin', `<h6 class="no-results">No results for "${inputMovie}"</h6>`)
        : this.addMovies(content)
      ));
      Helper.hideSpinner();
    } catch (error) {
      throw new Error('No data');
    }
  }

  addMovies(searchResult) {
    try {
      this.root.querySelector('.swiper-wrapper').innerHTML = '';
      for (let i = 0; i < searchResult.Search.length; i += 1) {
        const card = new MovieCardComponent();
        this.root.querySelector('.swiper-wrapper').append(card.init(searchResult.Search[i]));
      }
      Helper.addSwiper();
    } catch (error) {
      throw new Error('No data');
    }
  }

  changeMovies(inputMovie) {
    if (this.root.querySelector('h6')) {
      this.root.querySelector('h6').remove();
    }
    if (/[а-я]/.test(inputMovie)) {
      this.getTranslate(inputMovie);
    } else {
      this.fetchMovies(inputMovie);
    }
  }

  async getTranslate(word) {
    const YANDEX_KEY = 'trnsl.1.1.20200509T171523Z.8afa2930a0dbf88e.b4b9b4b699c21bdf051b12aa18e705c7e16a2d21';
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${YANDEX_KEY}&text=${word}&lang=ru-en`;
    this.root.insertAdjacentHTML('afterbegin', `<h6>Showing results for "${word}"</h6>`);
    await Helper.fetchPost(url).then((content) => this.fetchMovies(content.text[0]));
  }
}
