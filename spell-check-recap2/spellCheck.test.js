const spellCheck = require('./spellCheck');

describe('spellCheck function', () => {
  test('single lowercase correct word returns self', () => {
    expect(spellCheck("one")).toEqual("one");
    expect(spellCheck("two")).toEqual("two");
    expect(spellCheck("three")).toEqual("three");
  })

  test('single mixed or upper case correct word returns self', () => {
    expect(spellCheck("oNe")).toEqual("oNe");
    expect(spellCheck("ONE")).toEqual("ONE");
    expect(spellCheck("tWO")).toEqual("tWO");
  })

  test('single lowercase incorrect word returns self highlighted with tildes', () => {
    expect(spellCheck("on")).toEqual("~on~");
    expect(spellCheck("onee")).toEqual("~onee~");
    expect(spellCheck("tow")).toEqual("~tow~");
  })

  test('single mixed or upper incorrect word returns self highlighted with tildes', () => {
    expect(spellCheck("oN")).toEqual("~oN~");
    expect(spellCheck("ONEE")).toEqual("~ONEE~");
    expect(spellCheck("tOw")).toEqual("~tOw~");
  })

  test('an empty string input returns an "empty string input error"', () => {
    expect(() => spellCheck("")).toThrow("empty string input error");
  })

  test('a non-string input returns an "non-string input error"', () => {
    expect(() => spellCheck(true)).toThrow("non-string input error");
    expect(() => spellCheck(42)).toThrow("non-string input error");
    expect(() => spellCheck(3.142)).toThrow("non-string input error");
    expect(() => spellCheck(["one"])).toThrow("non-string input error");
    expect(() => spellCheck(null)).toThrow("non-string input error");
    expect(() => spellCheck({words: ["one", "two"]})).toThrow("non-string input error");
  })

  test('a multi-word lower, mixed, or upper case phrase with all correct words returns self', () => {
    expect(spellCheck("one two")).toEqual("one two");
    expect(spellCheck("one two three")).toEqual("one two three");
    expect(spellCheck("oNe TWO three")).toEqual("oNe TWO three");
  })

  test('a multi-word lower, mixed, or upper case phrase with some incorrect words returns self with tildes highlighting incorrect words', () => {
    expect(spellCheck("on two")).toEqual("~on~ two");
    expect(spellCheck("ne to tree")).toEqual("~ne~ ~to~ ~tree~");
    expect(spellCheck("oNe TWO threeee")).toEqual("oNe TWO ~threeee~");
  })
})