import { test, expect } from "@playwright/test";

test("Locator Practice Test", async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1>Welcome</h1>

        <p>Login Successful</p>

        <label for="email">Email</label>
        <input id="email" type="email">

        <label for="password">Password</label>
        <input id="password" type="password">

        <button>Login</button>
      </body>
    </html>
  `);

  // 1. Heading ကို ရှာမယ်
  await expect(page.getByRole("heading", { name: "Welcome" })).toBeVisible();

  // 2. Text ကို ရှာမယ်
  await expect(page.getByText("Login Successful")).toBeVisible();

  // 3. Email Input ကို ရှာမယ်
  await expect(page.getByLabel("Email")).toBeVisible();

  // 4. Password Input ကို ရှာမယ်
  await expect(page.getByLabel("Password")).toBeVisible();

  // 5. Login Button ကို ရှာမယ်
  await expect(page.getByRole("button", { name: "Login" })).toBeVisible();
});
