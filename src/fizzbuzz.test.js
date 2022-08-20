const fizzbuzz = require('./fizzbuzz');

test('returns 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});

test('returns 4', () => {
  expect(fizzbuzz(4)).toBe(4);
});
