import { test, expect } from "@playwright/test";

test("TC-001: Auto Waiting Test", async ({ page }) => {
  await page.setContent(`
    <button id="login" style="display:none">
      Login
    </button>

    <script>
      setTimeout(() => {
        document.getElementById("login").style.display = "block";
      }, 2000);
    </script>
  `);

  // Playwright က Button ပေါ်လာတဲ့အထိ စောင့်မယ်
  await page.getByRole("button", { name: "Login" }).click();

  // Click လုပ်ပြီးကြောင်း အတည်ပြုမယ်
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
});
