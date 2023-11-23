import { split } from './numbers.component';

it(`This function divides two numbers`, () => {
  expect(split(6, 2)).toEqual(3);
});
