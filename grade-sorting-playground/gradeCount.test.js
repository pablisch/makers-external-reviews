const gradeCount = require('./gradeCount');

describe('gradeCount', () => {
  test('returns 1 when input is ["green"]', () => {
    const grade = "green";
    const array = ["green"];
    expect(gradeCount(grade, array)).toBe(1);
  });
  
  test('returns 1 when input is ["amber"]', () => {
    const grade = "amber";
    const array = ["amber"];
    expect(gradeCount(grade, array)).toBe(1);
  });

  test('returns 1 when input is ["red"]', () => {
    const grade = "red";
    const array = ["red"];
    expect(gradeCount(grade, array)).toBe(1);
  });
  
  test('returns 2 when input is ["re", "ed"]', () => {
    const grade = "red";
    const array = ["re", "ed"];
    expect(gradeCount(grade, array)).toBe(0);
  });
  
    test('returns 1 when input is ["red", "green"]', () => {
      const grade = "red";
      const array = ["red", "green"];
      expect(gradeCount(grade, array)).toBe(1);
    });
0
});