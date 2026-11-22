import assert from "node:assert/strict";
import test from "node:test";
import { createGreeting } from "../../src/greeting.js";

test("greets a trimmed name", () => {
  assert.equal(createGreeting("  Andriy  "), "Hello, Andriy!");
});

test("uses a default name", () => {
  assert.equal(createGreeting(null), "Hello, world!");
});
