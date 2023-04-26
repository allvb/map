export default class ErrorRepository {
  constructor() {
    this.mistakes = new Map([
      ['001', 'Нет доступа к сети'],
      ['003', 'Нет ответа от сервера'],
      ['245', 'Некорректно введённое имя игрока'],
      ['246', 'Сервер не отвечает'],
    ]);
  }

  translate(code) {
    if (this.mistakes.has(code)) {
      return this.mistakes.get(code);
    }
    return 'Unknown error';
  }
}
