import { split, multiply, power } from './numbers.component';

it(`This function divides two numbers`, () => {
  expect(split(6, 2)).toEqual(3);
});

it('This function multiply two numbers', () => {
  expect(multiply(1, 1)).toEqual(1);
});

it(`This function calculates the power of a number`, () => {
  expect(power(2, 4)).toEqual(16);
});

