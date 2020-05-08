import MoviesComponent from './MoviesComponent';
import Helper from './Helper';

export default class SearchComponent {
  constructor() {
    this.root = document.createElement('main');
    // this.movies = new MoviesComponent();
  }

  init() {
    const search = `<div class="search-line">
                      <div class="wrapper">
                          <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" autofocus>
                            <button class="search-button btn btn-secondary my-2 my-sm-0" type="submit">
                              Search
                            </button>
                          </form>
                      </div>
                    </div>`;
    this.root.insertAdjacentHTML('beforeend', search);

    this.root.querySelector('.search-button').onclick = () => {
      Helper.showSpinner();
      let inputValue = (this.root.querySelector('.form-control')).value;
      console.log(inputValue);
      new MoviesComponent().changeMovies(inputValue);
    };

    return this.root;
  }
}
