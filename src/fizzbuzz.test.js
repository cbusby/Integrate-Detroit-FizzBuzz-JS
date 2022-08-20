const fizzbuzz = require('./fizzbuzz');

test('returns 1', () => {
  expect(fizzbuzz(1)).toBe(1);
});

test('returns 2', () => {
  expect(fizzbuzz(2)).toBe(2);
});

test('returns fizz for 3', () => {
  expect(fizzbuzz(3)).toBe("fizz");
});

test('returns fizz for 6', () => {
  expect(fizzbuzz(6)).toBe("fizz");
});