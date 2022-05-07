import * as assert from "assert";
import { sub, sum } from "./math";

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

function test(title: string, callback: () => void) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (error) {
    console.error(`✕ ${title}`);
    console.error(error);
  }
}

function expect(actual: any) {
  function toBe(expected) {
    if (actual !== expected)
      throw new Error(`${actual} is not equal to ${expected}.`);
  }
  return {
    toBe,
  };
}
