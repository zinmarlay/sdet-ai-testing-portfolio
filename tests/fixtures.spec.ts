import { test, expect } from "@playwright/test";

test("TC-001: Page Fixture", async ({ page }) => {
  await page.setContent("<h1>Employee Management</h1>");
  await expect(
    page.getByRole("heading", { name: "Employee Management" }),
  ).toBeVisible();
});
