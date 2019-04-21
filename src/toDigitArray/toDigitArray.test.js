'use strict';

const toDigitArray = require('./toDigitArray');

describe('Testing toDigitArray', () => {
  test('Should return array of one digit for single digit numbers', () => {
    expect(toDigitArray(1))
      .toEqual([1]);
  });

  test(
    'Should return the array of digits correctly for two-digit numbers.',
    () => {
      expect(toDigitArray(21))
        .toEqual([1, 2]);
    });

  test('Should return the array of digits correctly for large numbers.', () => {
    expect(toDigitArray(76432541))
      .toEqual([1, 4, 5, 2, 3, 4, 6, 7]);
  });

  test(
    `Should return the array of digits correctly for number containing a 
    repeated digit.`,
    () => {
      expect(toDigitArray(111))
        .toEqual([1, 1, 1]);
    });
});
