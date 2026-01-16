import ErrorRepository from '../basic';

let errorRepo;

beforeEach(() => {
  errorRepo = new ErrorRepository();
});

const datalist = [
  [1, 'Validation error'],
  [2, 'Database connection failed'],
  [3, 'User not found'],
  [4, 'Permission denied'],
  [5, 'Server internal error']];

test.each(datalist)('translate код %i', (code, expected) => {
  const result = errorRepo.translate(code);
  expect(result).toBe(expected);
});
