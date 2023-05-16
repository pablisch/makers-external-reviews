const filter = require('./filter');

describe('filter function', () => {
  test('returns an ummodified array where freqs are within range', () => {
    const freqArray = [50];
    const min = 40;
    const max = 1000;
    expect(filter(freqArray, min, max)).toEqual([50])
  });

  test('returns a modified array where a freq is below min range', () => {
    const freqArray = [10];
    const min = 40;
    const max = 1000;
    expect(filter(freqArray, min, max)).toEqual([40])
  });

  test('returns a modified array where a freq is below min range', () => {
    const freqArray = [5];
    const min = 40;
    const max = 1000;
    expect(filter(freqArray, min, max)).toEqual([40])
  });

  test('returns a modified array where a freq is above max range', () => {
    const freqArray = [1100];
    const min = 40;
    const max = 1000;
    expect(filter(freqArray, min, max)).toEqual([1000])
  });

  test('returns a modified array where a freq is above max range', () => {
    const freqArray = [11000];
    const min = 40;
    const max = 1000;
    expect(filter(freqArray, min, max)).toEqual([1000])
  });

  test('raises an error when array is empty', () => {
    const freqArray = [];
    const min = 40;
    const max = 1000;
    expect(filter(freqArray, min, max)).toThrow("no frequencies supplied")
  });
});