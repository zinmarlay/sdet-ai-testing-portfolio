import { test, expect } from "@playwright/test";
test("Homepage Title Test", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Login Domain");
});
