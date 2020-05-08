export default class Helper {
  static async fetchPost(url) {
    const response = await fetch(url);
    const json = await response.json();
    this.hideSpinner();
    return json;
  }

  static showSpinner() {
    document.querySelectorAll('main').insertAdjacentHTML('afterbegin', '<div id="spinner"></div>');
  }

  static hideSpinner() {
    if (document.getElementById('spinner')) {
      document.getElementById('spinner').setAttribute('hidden', '');
    }
  }
}
