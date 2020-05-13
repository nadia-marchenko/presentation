import Helper from '../helpers/Helper';

export default class MovieCardComponent {
  constructor() {
    this.root = document.createElement('div');
  }

  init(movie) {
    this.root.className = 'swiper-slide card';
    const POSTER = (movie.Poster === 'N/A') ? './images/default-poster.jpeg' : movie.Poster;

    const CARD = `<a href="https://www.imdb.com/title/${movie.imdbID}/">  
                    <img
                      class="poster"
                      alt="${movie.Title}"
                      src="${POSTER}"
                      />
                  </a>
                  <a href="https://www.imdb.com/title/${movie.imdbID}/">
                    <h5 class ="title-movie">${movie.Title}</h5>
                  </a>
                  <p>${movie.Year}</p>
                  <p class="rating">
                    <span class='star-rating'></span><span class="rating-text"></span>
                  </p>`;

    this.root.insertAdjacentHTML('beforeend', CARD);

    this.root.querySelector('.poster').onerror = () => {
      this.root.querySelector('.poster').src = './images/default-poster.jpeg';
      throw new Error('Problems with loading image');
    };

    this.fetchRating(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=e504ed78`);

    return this.root;
  }

  async fetchRating(url) {
    await Helper.fetchPost(url).then((content) => this.getRating(content));
  }

  getRating(searchResult) {
    this.root.querySelector('.rating-text').innerHTML = searchResult.imdbRating;
  }
}
