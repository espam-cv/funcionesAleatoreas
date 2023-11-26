import { divide, multiply, power, subtract, sum } from './numbers.component';

it(`This function divide two numbers`, () => {
  expect(divide(6, 2)).toEqual(3);
});

it('This function multiply two numbers', () => {
  expect(multiply(1, 1)).toEqual(1);
});

it(`This function calculates the power of a number`, () => {
  expect(power(2, 4)).toEqual(16);
});

it(`This function calculates the subtract of two number`, () => {
  expect(subtract(4, 2)).toEqual(2);
});

it(`This function calculates the sum of two numbers`, () => {
  expect(sum(2, 4)).toEqual(6);
});

