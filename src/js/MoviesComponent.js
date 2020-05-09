// import 'babel-polyfill';
// import fetch from 'node-fetch';
import MovieCardComponent from './MovieCardComponent';
import SliderComponent from './SliderComponent';
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

    this.fetchMovies(`https://www.omdbapi.com/?s=${inputMovie}&apikey=e504ed78`, inputMovie);

    return this.root;
  }

  async fetchMovies(url, inputMovie) {
    // await Helper.fetchPost(url).then((content) => this.addMovies(content));
    await Helper.fetchPost(url).then((content) => { this.addMovies(content, inputMovie), console.log(content)});
  }

  addMovies(searchResult, inputMovie) {
    try {
      // if (searchResult.Error === 'Too many results.') {
      //   this.fetchMovies();
      // }
      for (let i = 0; i < searchResult.Search.length; i += 1) {
        const card = new MovieCardComponent();
        this.root.querySelector('.swiper-wrapper').append(card.init(searchResult.Search[i]));
      }
      Helper.addSwiper();
    } catch (error) {
      this.root.insertAdjacentHTML('afterbegin', `<h2 class="no-results">No results for ${searchResult}</h2>`);
      throw new Error('No data');
    }
  }

  changeMovies(inputMovie) {
    let movie = inputMovie;
    this.root.querySelector('.swiper-wrapper').innerHTML = '';
    if (/[а-я]/.test(inputMovie)) {
      this.getTranslate(inputMovie);
    } else {
      this.fetchMovies(`https://www.omdbapi.com/?s=${movie}&apikey=e504ed78`);
    }
    Helper.hideSpinner();
  }
  // isRussianWord() {
  //   if (/[а-я]/.test(inputMovie)) {
  //     inputMovie = this.getTranslate();
  //   }
  // }

  async getTranslate(word) {
    const YANDEX_KEY = 'trnsl.1.1.20200509T171523Z.8afa2930a0dbf88e.b4b9b4b699c21bdf051b12aa18e705c7e16a2d21';
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${YANDEX_KEY}&text=${word}&lang=ru-en`;
    this.root.insertAdjacentHTML('afterbegin', `<h6>Showing results for "${word}"</h6>`);
    await Helper.fetchPost(url).then((content) => 
      this.fetchMovies(`https://www.omdbapi.com/?s=${content.text[0]}&apikey=e504ed78`)
    );
  }
}
