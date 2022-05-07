import * as assert from "assert";
import { sub, sum } from "./math";

let result, expected;

result = sum(7, 3);
expected = 10;
expect(result).toBe(expected);

result = sub(7, 3);
expected = 4;
expect(result).toBe(expected);

function expect(actual: any) {
  function toBe(expected) {
    if (actual !== expected) throw new Error(`${actual} is not equal to ${expected}.`)
  }
  return {
    toBe,
  };
}
