import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';
import MoviesComponent from './MoviesComponent';
// Import images
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../assets', true, /\.jpeg$/));

export default class PageComponent {
  constructor() {
    this.root = document.body;
    this.header = new HeaderComponent();
    this.search = new SearchComponent();
    this.movies = new MoviesComponent();
    this.footer = new FooterComponent();
  }

  init() {
    const DEFAULT_SEARCH = 'cat';

    this.root.prepend(this.header.init());
    this.root.querySelector('header').after(this.search.init());
    this.root.querySelector('main').append(this.movies.init(DEFAULT_SEARCH));
    this.root.querySelector('main').after(this.footer.init());
  }
}
