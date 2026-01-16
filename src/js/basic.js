export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Validation error'],
      [2, 'Database connection failed'],
      [3, 'User not found'],
      [4, 'Permission denied'],
      [5, 'Server internal error'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
