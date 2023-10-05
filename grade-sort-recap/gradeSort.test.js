const gradeSort = require('./gradeSort');

describe('gradeSort function', () => {
  test('a single grade returns a single result of that grade', () => {
    expect(gradeSort("Green")).toEqual("Green: 1");
    expect(gradeSort("Amber")).toEqual("Amber: 1");
    expect(gradeSort("Red")).toEqual("Red: 1");
  })

  test('two grades of the same value return that value with a count of 2', () => {
    expect(gradeSort("Green, Green")).toEqual("Green: 2");
    expect(gradeSort("Red, Red")).toEqual("Red: 2");
  })

  test('multiple grades including different values return those values with a count for each', () => {
    expect(gradeSort("Green, Green, Red")).toEqual("Green: 2\nRed: 1");
    expect(gradeSort("Red, Red, Amber, Amber, Red")).toEqual("Amber: 2\nRed: 3");
  })

  test('Grades are counted even if the case is not capitalised', () => {
    expect(gradeSort("green, GREEN, rEd")).toEqual("Green: 2\nRed: 1");
  })

  test('Message returned if no grades are inputted', () => {
    expect(gradeSort("")).toEqual("No grades entered");
  })

  test('Error thrown if an invalid grade is included in grades string', () => {
    expect(() => gradeSort("greeeen")).toThrow("Invalid grade entry error");
  })
})