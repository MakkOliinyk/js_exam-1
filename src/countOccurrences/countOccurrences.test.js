'use strict';

const countOccurrences = require('./countOccurrences');

describe('Testing countOccurrences', () => {
  test('Should return 0 for: empty string', () => {
    expect(countOccurrences('', 'a'))
      .toBe(0);
  });

  test('Should return zero when substr not found in str.', () => {
    expect(countOccurrences('samsung', 'ba'))
      .toBe(0);
  });

  test(
    'Should return number of occurences when substring is found in the string',
    () => {
      expect(countOccurrences('samsungsamsung', 'sam'))
        .toBe(2);
    });
});
