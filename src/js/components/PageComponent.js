import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';
import MoviesComponent from './MoviesComponent';
// Import images
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../../assets', true, /\.jpeg$/));

export default class PageComponent {
  constructor() {
    this.root = document.body;
    this.header = new HeaderComponent();
    this.search = new SearchComponent();
    this.movies = new MoviesComponent();
    this.footer = new FooterComponent();
  }

  init() {
    this.root.insertAdjacentElement('beforeend', this.header.init());
    this.root.insertAdjacentElement('beforeend', this.search.init());
    this.root.insertAdjacentElement('beforeend', this.footer.init());
  }
}
