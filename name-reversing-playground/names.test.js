const {namesShuffle, getChar} = require('./names');

describe('namesShuffle', () => {
  test('returns the first and last name switched', () => {
    expect(namesShuffle("James Dean")).toEqual("Dean James")
  });

  test('returns the first and last name switched', () => {
    expect(namesShuffle("Kevin Bacon")).toEqual("Bacon Kevin")
  });
});

describe('getChar', () => {
  test('returns an ASCI char that is represented by the number input', () => {
    const num = 65
    expect(getChar(num)).toEqual("A");
  });

  test('returns an ASCI char that is represented by the number input', () => {
    const num = 70
    expect(getChar(num)).toEqual("F");
  });
});