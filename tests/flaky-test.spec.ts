import { test, expect } from "@playwright/test";

test("TC-001: Stable Test with Auto-Retry", async ({ page }) => {
  await page.setContent(`
    <p id="result"></p>

    <script>
      const delay = Math.random() * 3000;

      setTimeout(() => {
        document.getElementById("result").textContent = "Data Loaded";
      }, delay);
    </script>
  `);

  await expect(page.locator("#result")).toHaveText("Data Loaded");
});
