import { test, expect } from "@playwright/test";
test("should filter scores greater than or equal to 60", () => {
  const scores = [45, 80, 32, 90, 60, 25, 75];
  const result = scores.filter((score) => score >= 60);
  expect(result).toEqual([80, 90, 60, 75]);
});
