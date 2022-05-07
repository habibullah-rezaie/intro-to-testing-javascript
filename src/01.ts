import { sub, sum } from "./math";
import * as assert from "assert";

let result, expected;

result = sum(3, 7);
expected = 10;

assert.strictEqual(result, expected);

result = sub(7, 3);
expected = 4;

assert.strictEqual(result, expected);
