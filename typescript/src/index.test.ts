import { expect, test } from "vitest";
import { sumar } from "./index";

test("sumar", () => {
  expect(sumar(2, 3)).toBe(5);
});
