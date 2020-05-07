export default class HeaderComponent {
  constructor() {
    this.root = document.createElement('header');
  }

  init() {
    const HEADER = `<div class="wrapper header__wrapper">
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a class="navbar-brand logo-text" href="#">MovieSearch</a>
                        </nav>
                    </div>`;
    this.root.insertAdjacentHTML('beforeend', HEADER);

    return this.root;
  }
}
