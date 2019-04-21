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

  test('setValue should support null value', () => {
    const store = storage();
    store.setValue('key', null);
    expect(store.getValue('key'))
      .toBe(null);
  });

  test('setValue should support empty string value', () => {
    const store = storage();
    store.setValue('key', '');
    expect(store.getValue('key'))
      .toBe('');
  });

  test('setValue should support 0 value', () => {
    const store = storage();
    store.setValue('key', 0);
    expect(store.getValue('key'))
      .toBe(0);
  });

  test('setValue should support false value',
    () => {
      const store = storage();
      store.setValue('key', false);
      expect(store.getValue('key'))
        .toBe(false);
    });
});
