import { test, expect } from "@playwright/test";
test("Homepage Assertions Test", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle("Example Domain");
  await expect(page).toHaveURL("https://example.com/login");
  await expect(page).not.toHaveTitle("Login Page");
});
