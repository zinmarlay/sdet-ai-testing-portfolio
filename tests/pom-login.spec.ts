import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

test.beforeEach(async ({ page }) => {
  await page.setContent(`
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

        if (email === "admin@test.com" && password === "123456") {
          document.getElementById("message").textContent = "Login Successful";
        } else {
          document.getElementById("message").textContent = "Login Failed";
        }
      });
    </script>
  `);
});

// Positive Test
test("TC-001: Login with valid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("admin@test.com", "123456");
  await expect(page.locator("#message")).toHaveText("Login Successful");
});

// Negative Test
test("TC-002: Login with invalid credentials", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login("admin@test.com", "wrong123");
  await expect(page.locator("#message")).toHaveText("Login Failed");
});
