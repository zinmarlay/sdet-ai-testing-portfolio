import { test as base, expect } from "@playwright/test";

type MyFixtures = {
  employeeName: string;
};

const test = base.extend<MyFixtures>({
  employeeName: async ({}, use) => {
    await use("Alice");
  },
});

test("TC-001: Custom Fixture Test", async ({ employeeName }) => {
  expect(employeeName).toBe("Alice");
});
