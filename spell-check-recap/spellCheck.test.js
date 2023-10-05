const spellCheck = require('./spellCheck');

describe('spellCheck', () => {
  test('single lowercase correct word returns itself', () => {
    expect(spellCheck("one")).toEqual("one");
    expect(spellCheck("two")).toEqual("two");
    expect(spellCheck("three")).toEqual("three");
  });

  test('single lowercase incorrect word returns itself highlighted with tildes', () => {
    expect(spellCheck("on")).toEqual("~on~");
    expect(spellCheck("ones")).toEqual("~ones~");
  });

  test('single mixed case correct word returns itself', () => {
    expect(spellCheck("One")).toEqual("One");
    expect(spellCheck("OnE")).toEqual("OnE");
    expect(spellCheck("tWO")).toEqual("tWO");
  })

  test('single mixed case incorrect word returns itself highlighted with tildes', () => {
    expect(spellCheck("On")).toEqual("~On~");
    expect(spellCheck("OnES")).toEqual("~OnES~");
    expect(spellCheck("tWOoO")).toEqual("~tWOoO~");
  })
  
  test('empty string returns an "arg error" error message', () => {
    expect(() => spellCheck("")).toThrow("No input error");
  })
  
  test('non-string input returns an "arg error" error message', () => {
    expect(() => spellCheck(true)).toThrow("Arg error");
    expect(() => spellCheck(42)).toThrow("Arg error");
    expect(() => spellCheck(3.142)).toThrow("Arg error");
    expect(() => spellCheck(["one"])).toThrow("Arg error");
  })

  test('multiple word phrase with all correct words returns self', () => {
    expect(spellCheck("one two")).toEqual("one two");
    expect(spellCheck("one two three")).toEqual("one two three");
    expect(spellCheck("onE tWo thRee")).toEqual("onE tWo thRee");
  })

  test('multiple word phrase with some incorrect words returns highlighted words where there are errors', () => {
    expect(spellCheck("on two")).toEqual("~on~ two");
    expect(spellCheck("one to three")).toEqual("one ~to~ three");
    expect(spellCheck("onE Wo tRee")).toEqual("onE ~Wo~ ~tRee~");
  })
});