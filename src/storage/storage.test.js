'use strict';

const storage = require('./storage');

describe('Testing storage', () => {
  test('Should set and get value', () => {
    const propsStorage = storage();
    propsStorage.setValue('name', 'Peter');
    expect(propsStorage.getValue('name'))
      .toBe('Peter');
  });

  test('Should not delete value when getValue() called', () => {
    const propsStorage = storage();
    propsStorage.setValue('age', 20);
    expect(propsStorage.getValue('age'))
      .toBe(20);
    expect(propsStorage.getValue('age'))
      .toBe(20);
  });

  test('Should return undefined if value is not set', () => {
    const propsStorage = storage();
    propsStorage.setValue('name', 'Peter');
    expect(propsStorage.getValue('age'))
      .toBe(undefined);
  });

  test('Should override value on second setValue() call with same key', () => {
    const propsStorage = storage();
    propsStorage.setValue('name', 'Peter');
    propsStorage.setValue('name', 'Michael');
    expect(propsStorage.getValue('name'))
      .toBe('Michael');
  });

  test('setValue should support null value', () => {
    const propsStorage = storage();
    propsStorage.setValue('key', null);
    expect(propsStorage.getValue('key'))
      .toBe(null);
  });

  test('setValue should support empty string value', () => {
    const propsStorage = storage();
    propsStorage.setValue('key', '');
    expect(propsStorage.getValue('key'))
      .toBe('');
  });

  test('setValue should support 0 value', () => {
    const propsStorage = storage();
    propsStorage.setValue('key', 0);
    expect(propsStorage.getValue('key'))
      .toBe(0);
  });

  test('setValue should support false value', () => {
    const propsStorage = storage();
    propsStorage.setValue('key', false);
    expect(propsStorage.getValue('key'))
      .toBe(false);
  });
});
