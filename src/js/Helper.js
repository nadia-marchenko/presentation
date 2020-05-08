export default class Helper {
  static async fetchPost(url) {
    const response = await fetch(url);
    const json = await response.json();
    if (document.getElementById('spinner')) {
      document.getElementById('spinner').setAttribute('hidden', '');
    }
    return json;
  }
}
