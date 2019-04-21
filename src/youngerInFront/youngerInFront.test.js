'use strict';

const youngerInFront = require('./youngerInFront');

describe('Testing youngerInFront', () => {
  test('Should return [1] for: 1', () => {
    expect(youngerInFront(1))
      .toEqual([1]);
  });

  test('Should return [1, 2] for: 21', () => {
    expect(youngerInFront(21))
      .toEqual([1, 2]);
  });

  test('Should return the array of digits correctly for large numbers.', () => {
    expect(youngerInFront(76432541))
      .toEqual([1, 4, 5, 2, 3, 4, 6, 7]);
  });

  test('Should return [1, 1, 1] for: 111', () => {
    expect(youngerInFront(111))
      .toEqual([1, 1, 1]);
  });
});
