const grades = require('./grades');

describe('grade', () => {
  test('returns "green:1" when give input of "green"', () => {
    const grades = "green";
    expect(grades(grades)).toEqual("green:1")
  });

  test('returns "amber:1" when give input of "amber"', () => {
    const grades = "amber";
    expect(grades(grades)).toEqual("amber:1")
  });

  test('returns "red:1" when give input of "red"', () => {
    const grades = "red";
    expect(grades(grades)).toEqual("red:1")
  });

  test('returns "green:1\namber:1" when give input of "green,amber"', () => {
    const grades = "green, amber";
    expect(grades(grades)).toEqual("green:1\namber:1")
  });

  test('returns "green:1\namber:1\nred:1" when give input of "green, amber, red"', () => {
    const grades = "green, amber, red";
    expect(grades(grades)).toEqual("green:1\namber:1\nred:1")
  });

  test('returns "" when give input of "greed"', () => {
    const grades = "greed";
    expect(grades(grades)).toEqual("")
  });
});