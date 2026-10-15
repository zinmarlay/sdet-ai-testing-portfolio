import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { loginData } from "../test-data/login-data.js";

test.beforeEach(async ({ page }) => {
  await page.setContent(`
    <h1>Employee Login</h1>

    <label for="email">Email</label>
    <input id="email" type="email">

    <label for="password">Password</label>
    <input id="password" type="password">

    <button id="login">Login</button>

    <p id="message"></p>

    <script>
      document.getElementById("login").addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        document.getElementById("message").textContent =
          email === "admin@test.com" && password === "123456"
            ? "Login Successful"
            : "Login Failed";
      });
    </script>
  `);
});

test("TC-001: Valid Employee Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
    loginData.validUser.email,
    loginData.validUser.password,
  );

  await expect(page.locator("#message")).toHaveText("Login Successful");
});

test("TC-002: Invalid Employee Login", async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.login(
    loginData.invalidUser.email,
    loginData.invalidUser.password,
  );

  await expect(page.locator("#message")).toHaveText("Login Failed");
});
