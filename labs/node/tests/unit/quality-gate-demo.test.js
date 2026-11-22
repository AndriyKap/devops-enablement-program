import assert from "node:assert/strict";
import test from "node:test";

// Deliberately failing test for M02 quality-gate enforcement evidence.
// This test exists ONLY in the temporary demonstration branch.
test("quality gate blocks a PR when a required test fails", () => {
  assert.equal(1, 2);
});
