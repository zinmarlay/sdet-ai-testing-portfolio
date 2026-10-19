import { test, expect } from "@playwright/test";
test("playwright automation", async ({ page }) => {
  await page.goto("https://example.com");
  await expect(page).toHaveTitle("Example Domain");
  await expect(page.getByRole("link", { name: "Learn more" })).toBeVisible();
});
