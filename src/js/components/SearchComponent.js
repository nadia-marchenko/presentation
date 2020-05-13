import MoviesComponent from './MoviesComponent';

export default class SearchComponent {
  constructor() {
    this.root = document.createElement('main');
    this.movies = new MoviesComponent();
  }

  init() {
    const DEFAULT_SEARCH = 'cat';
    const SEARCH = `<div class="search-line">
                      <div class="wrapper">
                          <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" autofocus>
                            <button class="search-button btn btn-secondary my-2 my-sm-0" type="submit">
                              Search
                            </button>
                          </form>
                      </div>
                    </div>`;
    this.root.insertAdjacentHTML('beforeend', SEARCH);
    this.root.insertAdjacentElement('beforeend', this.movies.init(DEFAULT_SEARCH));

    this.root.querySelector('.search-button').onclick = (event) => {
      event.preventDefault();
      const INPUT_VALUE = (this.root.querySelector('.form-control')).value;
      this.movies.changeMovies(INPUT_VALUE);
    };
    return this.root;
  }
}
