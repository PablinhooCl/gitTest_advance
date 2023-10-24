const reverseString = require('./reverseString.js');

test('hola => aloh', () => {
    expect(reverseString('hola')).toBe('aloh');
  });