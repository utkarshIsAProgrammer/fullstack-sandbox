import { addTax, addTip, splitEvenly } from '../src/script';

test('adds tax correctly', () => {
  expect(addTax(10000, 18)).toBe(11800); // ₹100.00 + 18% = ₹118.00
});

test('adds tip correctly', () => {
  expect(addTip(11800, 10)).toBe(12980); // ₹118.00 + 10% = ₹129.80
});

test('splits evenly', () => {
  expect(splitEvenly(12980, 2)).toBe(6490); // ₹64.90 each
});
