const capitalize = require('./capitalize.js');

test('hola => Hola', () => {
    expect(capitalize('hola')).toBe('Hola');
  });