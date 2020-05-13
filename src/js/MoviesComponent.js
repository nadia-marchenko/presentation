import MovieCardComponent from './MovieCardComponent';
import Helper from './Helper';

export default class MoviesComponent {
  constructor() {
    this.root = document.createElement('div');
  }

  init(inputMovie) {
    this.root.className = 'movies';

    const CARDS = `<div class="spinner d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
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
    this.showSpinner();
    const URL = `https://www.omdbapi.com/?s=${inputMovie}&apikey=e504ed78`;
    await Helper.fetchPost(URL)
      .then((content) => this.checkErrors(content, inputMovie))
      .then((content) => this.addMovies(content))
      // .then(this.hideSpinner())
      .catch((error) => {
        console.log(error);
      });
  }

  checkErrors(response, inputMovie) {
    if (response.Response === 'False' && response.Error === 'Movie not found!') {
      this.root.insertAdjacentHTML('afterbegin', `<h6 class="no-results">No results for "${inputMovie}"</h6>`);
      throw Error(response.statusText);
    }
    if (response.Response === 'False' && response.Error === 'Too many results.') {
      this.root.insertAdjacentHTML('afterbegin', `<h6 class="no-results">Too many results for "${inputMovie}". Please, try again</h6>`);
      throw Error(response.statusText);
    }
    return response;
  }

  addMovies(searchResult) {
    try {
      this.root.querySelector('.swiper-wrapper').innerHTML = '';
      this.createCards(searchResult);
      this.hideSpinner();
      Helper.addSwiper();
    } catch (error) {
      throw new Error('No data');
    }
  }

  createCards(searchResult) {
    for (let i = 0; i < searchResult.Search.length; i += 1) {
      const card = new MovieCardComponent();
      this.root.querySelector('.swiper-wrapper').append(card.init(searchResult.Search[i]));
    }
  }

  changeMovies(inputMovie) {
    if (this.root.querySelector('h6')) {
      this.root.querySelector('h6').remove();
    }
    if (Helper.isRussianWord(inputMovie)) {
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

  showSpinner() {
    this.root.querySelector('.spinner').classList.remove('hidden');
    // this.root.querySelector('#spinner').removeAttribute('hidden');
    // this.root.querySelector('#spinner').
  }

  hideSpinner() {
    this.root.querySelector('.spinner').classList.add('hidden');
    // this.root.querySelector('#spinner').setAttribute('hidden', '');
  }
}
