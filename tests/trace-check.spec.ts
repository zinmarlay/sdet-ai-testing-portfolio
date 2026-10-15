import { test, expect } from "@playwright/test";

test("TC-001: Trace Viewer Check", async ({ page }) => {
  await page.goto("https://example.com");

  await page.screenshot({
    path: "example-page.png",
    fullPage: true,
  });

  console.log("Title:", await page.title());

  await expect(page).toHaveTitle("Example Domain");
});
