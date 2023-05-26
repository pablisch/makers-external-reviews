const spellCheck = require('./spellCheck');
describe('spellCheck', () => {
  test('returns an unmodified string where speeling is correct', () => {
    const phrase = "one";
    expect(spellCheck(phrase)).toEqual("one");
  });

  test('returns an unmodified string where speeling is correct', () => {
    const phrase = "two";
    expect(spellCheck(phrase)).toEqual("two");
  });
});