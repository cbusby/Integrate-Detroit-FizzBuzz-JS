const fizzbuzz = require('./fizzbuzz');

test('returns 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});

test('returns 2', () => {
  expect(fizzbuzz(2)).toBe(2);
});