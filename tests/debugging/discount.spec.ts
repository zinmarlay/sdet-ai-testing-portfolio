import { test, expect } from "@playwright/test";

function calculateDiscount(price: number): number {
  if (price >= 1000) {
    return price * 0.1;
  }

  return 0;
}

test("should return 0 discount when price is below 1000", () => {
  expect(calculateDiscount(500)).toBe(0);
});

test("should return 100 discount when price is 1000", () => {
  expect(calculateDiscount(1000)).toBe(100);
});

test("should return 150 discount when price is 1500", () => {
  expect(calculateDiscount(1500)).toBe(150);
});
