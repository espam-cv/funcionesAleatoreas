import { lowerCase } from "./letters.component";

it(`This function convert chain to lowercase`, () => {
  expect(lowerCase("HELLO WORLD")).toEqual("hello world");
});