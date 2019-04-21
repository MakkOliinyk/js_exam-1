'use strict';

const storage = require('./storage');

describe('Testing storage', () => {
  test('Should set and get value', () => {
    const store = storage();
    store.setValue('name', 'Peter');
    expect(store.getValue('name'))
      .toBe('Peter');
  });

  test('Should not delete value when store.getValue() called', () => {
    const store = storage();
    store.setValue('age', 20);
    expect(store.getValue('age'))
      .toBe(20);
    expect(store.getValue('age'))
      .toBe(20);
  });

  test('Should return undefined if value is not set', () => {
    const store = storage();
    store.setValue('name', 'Peter');
    expect(store.getValue('age'))
      .toBe(undefined);
  });

  test('Should override value on second setValue() call with same key',
    () => {
      const store = storage();
      store.setValue('name', 'Peter');
      store.setValue('name', 'Michael');
      expect(store.getValue('name'))
        .toBe('Michael');
    });

  test('store.getValue("key") should return null if it is set to "key"', () => {
    const store = storage();
    store.setValue('key', null);
    expect(store.getValue('key'))
      .toBe(null);
  });

  test('store.getValue("key") should return "" if it is set to "key"', () => {
    const store = storage();
    store.setValue('key', '');
    expect(store.getValue('key'))
      .toBe('');
  });

  test('store.getValue("key") should return 0 if it is set to "key"', () => {
    const store = storage();
    store.setValue('key', 0);
    expect(store.getValue('key'))
      .toBe(0);
  });

  test('store.getValue("key") should return false if it is set to "key"',
    () => {
      const store = storage();
      store.setValue('key', false);
      expect(store.getValue('key'))
        .toBe(false);
    });
});
