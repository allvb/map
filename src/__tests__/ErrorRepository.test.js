import ErrorRepository from '../js/ErrorRepository';

test('testing ErrorRepository', () => {
  const errorRepository = new ErrorRepository();
  errorRepository.add('001', 'Нет доступа к сети');
  errorRepository.add('003', 'Нет ответа от серсера');
  errorRepository.add('245', 'Некорректно введённое имя игрока');
  expect(errorRepository.translate('001')).toBe('Нет доступа к сети');
  expect(errorRepository.translate('003')).toBe('Нет ответа от серсера');
  expect(errorRepository.translate('245')).toBe('Некорректно введённое имя игрока');
  expect(errorRepository.translate('006')).toBe('Unknown error');
});
