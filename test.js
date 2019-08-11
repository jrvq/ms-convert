const convertMS = require('./index');

test('Converts 6000ms to format: 00:00:06', () => {
  expect(convertMS(6000)).toBe('00:00:06');
});

test('Converts 60000ms to format: 00:01:00', () => {
  expect(convertMS(60000)).toBe('00:01:00');
});

test('Converts 11900ms to format: 00:01:59', () => {
  expect(convertMS(119000)).toBe('00:01:59');
});

test('Should return object with following keys: seconds, minutes, hours', () => {
  expect(convertMS(1000, {})).toHaveProperty('seconds');
  expect(convertMS(1000, {})).toHaveProperty('minutes');
  expect(convertMS(1000, {})).toHaveProperty('hours');
});

test('Converts 61000ms to object with values: {seconds: 1, minutes: 1, hours: 0}', () => {
  expect(convertMS(61000, {})).toEqual({ seconds: 1, minutes: 1, hours: 0 });
});
