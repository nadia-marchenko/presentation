export default class FooterComponent {
  constructor() {
    this.root = document.createElement('footer');
  }

  init() {
    this.root.className = 'footer';
    const FOOTER = `<div class="wrapper">
                      <div class="footer__wrapper bg-dark">
                        <div class="course-name">
                          <p class="text-muted">RS School 2020q1</p>
                        </div>
                        <div class="my-github">
                          <a href="https://github.com/nadia-marchenko">
                            <p class="text-muted">my github</p>
                          </a>
                        </div>
                      </div>
                    </div>`;
    this.root.insertAdjacentHTML('beforeend', FOOTER);
    return this.root;
  }
}
