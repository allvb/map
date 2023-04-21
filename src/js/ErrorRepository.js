export default class ErrorRepository {
  constructor() {
    this.mistakes = new Map();
  }

  add(key, value) {
    this.mistakes.set(key, value);
  }

  translate(code) {
    if (this.mistakes.has(code)) {
      return this.mistakes.get(code);
    }
    return 'Unknown error';
  }
}
