import { test } from "node:test";
import assert from "node:assert/strict";
import { saludar } from "./index.js";

test("saludar", () => {
  assert.equal(saludar("Ana"), "Hola, Ana!");
});
