const calculator = require('./calculator.js');

test('10 + 4 = 14', () => {
    expect(calculator(10, 4, 'sum')).toBe(14);
  });

  test('12 - 4 = 8', () => {
    expect(calculator(12, 4, 'min')).toBe(8);
  });

  test('4 * 3 = 12', () => {
    expect(calculator(4, 3, 'times')).toBe(12);
  });

  test('21 / 7 = 3', () => {
    expect(calculator(21, 7, 'divi')).toBe(3);
  });