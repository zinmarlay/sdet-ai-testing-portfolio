import { test, expect } from "@playwright/test";

test("TC-001: Wait for Loading to Disappear", async ({ page }) => {
  await page.setContent(`
    <p id="loading">Loading...</p>
    <p id="result" style="display:none">Data Loaded</p>

    <script>
      setTimeout(() => {
        document.getElementById("loading").style.display = "none";
        document.getElementById("result").style.display = "block";
      }, 2000);
    </script>
  `);

  // Loading Message ပျောက်တဲ့အထိ စောင့်မယ်
  await page.locator("#loading").waitFor({
    state: "hidden",
  });

  // Result ပေါ်လာကြောင်း စစ်မယ်
  await expect(page.locator("#result")).toBeVisible();
  await expect(page.locator("#result")).toHaveText("Data Loaded");
});
