import { test, expect } from "../fixtures/login-fixture.js";
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

        document.getElementById("message").textContent =
          email === "admin@test.com" && password === "123456"
            ? "Login Successful"
            : "Login Failed";
      });
    </script>
  `);
});

test("TC-003: Login User Fixture", async ({ loginUser }) => {
  expect(loginUser.email).toBe("admin@test.com");
  expect(loginUser.password).toBe("123456");
});

test("TC-004: Login with Custom Fixture", async ({ page, loginUser }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(loginUser.email, loginUser.password);
  await expect(page.locator("#message")).toHaveText("Login Successful");
});
