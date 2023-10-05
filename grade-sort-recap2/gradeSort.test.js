const gradeSort = require('./gradeSort');

describe('gradeSort function', () => {
  test('a single grade returns that grade with a count of 1', () => {
    expect(gradeSort("Green")).toEqual("Green: 1");
    expect(gradeSort("Amber")).toEqual("Amber: 1");
  });

  test('multiple grades of a single type return that grade with a valid count', () => {
    expect(gradeSort("Green, Green")).toEqual("Green: 2");
    expect(gradeSort("Amber, Amber, Amber")).toEqual("Amber: 3");
    expect(gradeSort("Red")).toEqual("Red: 1");
  });

  test('multiple grades of a single type return that grade with a valid count where the csv format is inconsistent', () => {
    expect(gradeSort("Green,  Green")).toEqual("Green: 2");
    expect(gradeSort("Amber,Amber,   Amber")).toEqual("Amber: 3");
    expect(gradeSort("Red ")).toEqual("Red: 1");
  });

  test('multiple grades of a single type return that grade with a valid count where case is inconsistent', () => {
    expect(gradeSort("grEen, GREEN")).toEqual("Green: 2");
    expect(gradeSort("AMBER, amber, AmbeR")).toEqual("Amber: 3");
    expect(gradeSort("reD")).toEqual("Red: 1");
  });

  test('return appropriate message where input is empty', () => {
    expect(gradeSort("")).toEqual("There was no grades provided");
  });

  test('throw appropriate error where input is not a string', () => {
    expect(() => gradeSort(true)).toThrow("Invalid input type error: Not a string");
    expect(() => gradeSort(42)).toThrow("Invalid input type error: Not a string");
    expect(() => gradeSort(3.142)).toThrow("Invalid input type error: Not a string");
    expect(() => gradeSort(["Green"])).toThrow("Invalid input type error: Not a string");
    expect(() => gradeSort(null)).toThrow("Invalid input type error: Not a string");
    expect(() => gradeSort({grade: "Green"})).toThrow("Invalid input type error: Not a string");
  });

  test('multiple grades of different values return those grades with a valid count for each', () => {
    expect(gradeSort("Green, Red")).toEqual("Green: 1\nRed: 1");
    expect(gradeSort("Amber, Red, Amber")).toEqual("Amber: 2\nRed: 1");
    expect(gradeSort("Red, Green, Amber, Green, Red, Green")).toEqual("Green: 3\nAmber: 1\nRed: 2");
  });
});