const spellCheck = require('./spellCheck');

describe('spellCheck', () => {
  test('returns an unmodified string where spelling is correct for "one"', () => {
    const phrase = "one";
    expect(spellCheck(phrase)).toEqual("one");
  });

  test('returns an unmodified string where spelling is correct for "two"', () => {
    const phrase = "two";
    expect(spellCheck(phrase)).toEqual("two");
  });

  test('returns an unmodified string where spelling is correct for "three"', () => {
    const phrase = "three";
    expect(spellCheck(phrase)).toEqual("three");
  });

  test('returns an modified string where spelling is incorrect for "on"', () => {
    const phrase = "on";
    expect(spellCheck(phrase)).toEqual("~on~");
  });

  test('returns an modified string where spelling is incorrect for "tow"', () => {
    const phrase = "tow";
    expect(spellCheck(phrase)).toEqual("~tow~");
  });

  test('returns an unmodified string where spelling is correct for multiple words "one two"', () => {
    const phrase = "one two";
    expect(spellCheck(phrase)).toEqual("one two");
  });

  test('returns an modified string where spelling is correct/incorrect for multiple words "one tow"', () => {
    const phrase = "one tow";
    expect(spellCheck(phrase)).toEqual("one ~tow~");
  });

  test('returns an unmodified string where spelling is correct for multiple words "one tow free"', () => {
    const phrase = "one tow free";
    expect(spellCheck(phrase)).toEqual("one ~tow~ ~free~");
  });
});