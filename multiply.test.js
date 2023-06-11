const { multiply, divide, subtract } = require('./operations.js');

describe('multiply function', () => { 
  test('multiply 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
}
);

describe('divide function', () => {
  test('divide 6 / 3 to equal 2', () => {
    expect(divide(6, 3)).toBe(2);
  });
}
);

describe('subtract function', () => {
  test('subtract 6 - 3 to equal 3', () => {
    expect(subtract(6, 3)).toBe(3);
  });
}
);










