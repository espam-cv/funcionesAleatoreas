import { split, multiply } from './numbers.component';

it(`This function divides two numbers`, () => {
  expect(split(6, 2)).toEqual(3);
});

it('This function multiply two numbers', () => {
  expect(multiply(1, 1)).toEqual(1);
});


