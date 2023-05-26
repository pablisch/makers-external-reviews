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
});