import { lowerCase, upperCase } from "./letters.component";

it(`This function convert chain to lowercase`, () => {
  expect(lowerCase("HELLO WORLD")).toEqual("hello world");
});

it(`This function transforms a string to uppercase`, () => {
  expect(upperCase("hello world")).toEqual("HELLO WORLD");
});