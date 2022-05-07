import * as assert from "assert";
import { sum } from "./math";

let result, expected;
result = sum(7, 3);
expected = 10;

expect(result).toBe(expected);

function expect(actual: any) {
  function toBe(expected) {
    return assert.strictEqual(actual, expected);
  }
  return {
    toBe,
  };
}
