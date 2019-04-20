'use strict';

const countOccurrences = require('./countOccurrences');

describe('Testing countOccurrences', () => {
  test('Should return 0 for: empty string', () => {
    expect(countOccurrences('', 'a'))
      .toBe(0);
  });

  test('Should return 0 for: "ba" in "samsung"', () => {
    expect(countOccurrences('samsung', 'ba'))
      .toBe(0);
  });

  test('Should return 2 for: "sam" in "samsungsamsung"', () => {
    expect(countOccurrences('samsungsamsung', 'sam'))
      .toBe(2);
  });

  test('Should return 2 for: "zykl" in "kalabrankxzyklarbkezyklaferon"', () => {
    expect(countOccurrences('kalabrankxzyklarbkezyklaferon', 'zykl'))
      .toBe(2);
  });
});
