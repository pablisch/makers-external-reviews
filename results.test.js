const Results = require('./results');

describe('Results', () => {
  test('returns count of green grades', () => {
    results = new Results("Green, Green, Amber, Red, Green");
    expect(results.countResultsOfAGrade('Green')).toBe(3);
  });

  test('returns count of green grades', () => {
    results = new Results("Green, Green, Amber, Red, Green");
    expect(results.countResultsOfAGrade('amBer')).toBe(1);
  });

  test('returns count of green grades', () => {
    results = new Results("Green, Green, Amber, Red, Green");
    expect(results.countResultsOfAGrade('Red')).toBe(1);
  });

  test('returns count of green grades', () => {
    results = new Results("Green, Green, Amber, Green, Green");
    expect(results.countResultsOfAGrade('Red')).toBe(0);
  });

  test('returns an object of all grades', () => {
    results = new Results("Green, Green, Amber, Red, Green");
    expect(results.collectCounts()).toEqual({
      green: 3,
      amber: 1,
      red: 1,
    });
  });

  test('returns an object of all grades', () => {
    results = new Results("Green, Red, Amber, Red, Green");
    expect(results.collectCounts()).toEqual({
      green: 2,
      amber: 1,
      red: 2,
    });
  });
});