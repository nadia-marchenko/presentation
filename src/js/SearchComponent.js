export default class SearchComponent {
  constructor() {
    this.root = document.createElement('main');
  }

  draw() {
    const search = `<div class="wrapper">
                      <div class="search-line">
                          <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="text" placeholder="Search">
                            <button class="search-button btn btn-secondary my-2 my-sm-0" type="submit">
                              Search
                            </button>
                          </form>
                      </div>
                    </div>`;
    this.root.insertAdjacentHTML('beforeend', search);
    return this.root;
  }
}
