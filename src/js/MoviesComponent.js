// import * as FILMS from '../Films.json';
import MovieCardComponent from './MovieCardComponent';
import 'babel-polyfill';
import fetch from 'node-fetch';
import SliderComponent from './SliderComponent';

export default class MoviesComponent {
  constructor() {
    this.root = document.createElement('div');
    // this.data = FILMS;
    // this.data = this.getFilms();
    this.slider = new SliderComponent();
  }

  init() {
    this.root.className = 'movies';
    // const searchResult = this.data.default.Search;

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

    // for (let i = 0; i < searchResult.length; i += 1) {
    //   const card = new MovieCardComponent();
    //   this.root.querySelector('.swiper-wrapper').append(card.init(searchResult[i]));
    // }

    this.fetchFilms('http://www.omdbapi.com/?s=cat&apikey=e504ed78');

    return this.root;
  }

  async fetchPost(url) {
    const response = await fetch(url);
    const json = await response.json();
    // console.log(json);
    return json;
  }

  async fetchFilms(url) {
    const films = await this.fetchPost(url).then((content) => 
      { this.addFilms(content)}
    );
  }

  addFilms(searchResult) {
    for (let film of searchResult.Search) {
      const card = new MovieCardComponent();
      this.root.querySelector('.swiper-wrapper').append(card.init(film));
      // this.root.append(card.init(film));
    }
    this.slider.init();
  }

}
