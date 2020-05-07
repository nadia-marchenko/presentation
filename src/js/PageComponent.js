import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import SearchComponent from './SearchComponent';
import SliderComponent from './SliderComponent';
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
    // this.slider = new SliderComponent();
    this.movies = new MoviesComponent();
    this.footer = new FooterComponent();
  }

  init() {
    this.root.prepend(this.header.draw());
    this.root.querySelector('header').after(this.search.draw());
    this.root.querySelector('main').append(this.movies.init());
    // this.slider.init();
    this.root.querySelector('main').after(this.footer.draw());
  }
}
