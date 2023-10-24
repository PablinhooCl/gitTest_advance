const caesarCipher = require('./caesarCipher.js');

test('HELLO => KHOOR', () => {
    expect(caesarCipher("HELLO", 3)).toBe("KHOOR");
  });

  test('HE.LLO => KH.OOR', () => {
    expect(caesarCipher("HE.LLO", 3)).toBe("KH.OOR");
  });  
 
  test('Z => A', () => {
    expect(caesarCipher("Z", 1)).toBe("A");
  });

  test('z => a', () => {
    expect(caesarCipher("z", 1)).toBe("a");
  });  