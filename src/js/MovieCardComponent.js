export default class MovieCardComponent {
  constructor() {
    this.root = document.createElement('div');
  }

  init(movie) {
    this.root.className = 'swiper-slide card';
    // this.root.className = 'new-films';
    const POSTER = (movie.Poster === 'N/A') ? './assets/default-poster.jpeg' : movie.Poster;

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
                  <p class="rating"><span class='star-rating'></span><span>4,4</span></p>`;

    this.root.insertAdjacentHTML('beforeend', CARD);

    return this.root;
  }
}
