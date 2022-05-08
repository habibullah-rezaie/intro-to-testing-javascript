import {sum, sub} from './math';

let result, expected;

test("sum adds numbers", () => {
  result = sum(7, 3);
  expected = 10;
  expect(result).toBe(expected);
});

test("sub subtracts numbers", () => {
  result = sub(7, 3);
  expected = 4;
  expect(result).toBe(expected);
});
