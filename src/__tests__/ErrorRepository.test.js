import ErrorRepository from '../js/ErrorRepository';

test('testing ErrorRepository', () => {
  const errorRepository = new ErrorRepository();
  expect(errorRepository.translate('001')).toBe('Нет доступа к сети');
  expect(errorRepository.translate('003')).toBe('Нет ответа от сервера');
  expect(errorRepository.translate('245')).toBe('Некорректно введённое имя игрока');
  expect(errorRepository.translate('006')).toBe('Unknown error');
});
