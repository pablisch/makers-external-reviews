const grades = require('./grades');

describe('grades', () => {
  test('returns "green:1" when give input of "green"', () => {
    const gradeList = "green";
    expect(grades(gradeList)).toEqual("green:1")
  });

  test('returns "amber:1" when give input of "amber"', () => {
    const gradeList = "amber";
    expect(grades(gradeList)).toEqual("amber:1")
  });

  test('returns "red:1" when give input of "red"', () => {
    const gradeList = "red";
    expect(grades(gradeList)).toEqual("red:1")
  });

  test('returns "green:1\namber:1" when give input of "green,amber"', () => {
    const gradeList = "green, amber";
    expect(grades(gradeList)).toEqual("green:1\namber:1")
  });

  test('returns "green:1\namber:1\nred:1" when give input of "green, amber, red"', () => {
    const gradeList = "green, amber, red";
    expect(grades(gradeList)).toEqual("green:1\namber:1\nred:1")
  });

  test('returns "" when give input of "greed"', () => {
    const gradeList = "greed";
    expect(grades(gradeList)).toEqual("")
  });
});