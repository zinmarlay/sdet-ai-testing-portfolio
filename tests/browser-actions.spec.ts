import { test, expect } from "@playwright/test";

test("Login Form Interaction Test", async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1>Login Form</h1>

        <label for="email">Email</label>
        <input id="email" type="email">

        <label for="password">Password</label>
        <input id="password" type="password">

        <button id="loginBtn" type="button">Login</button>

        <p id="message"></p>

        <script>
          document.getElementById("loginBtn").addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "test@example.com" && password === "123456") {
              document.getElementById("message").textContent =
                "Login Successful";
            } else {
              document.getElementById("message").textContent =
                "Login Failed";
            }
          });
        </script>
      </body>
    </html>
  `);

  // Step 1: Email ထည့်မယ်
  await page.getByLabel("Email").fill("test@example.com");

  // Step 2: Password ထည့်မယ်
  await page.getByLabel("Password").fill("123456");

  // Step 3: Input Values စစ်မယ်
  await expect(page.getByLabel("Email")).toHaveValue("test@example.com");

  await expect(page.getByLabel("Password")).toHaveValue("123456");

  // Step 4: Login Button နှိပ်မယ်
  await page.getByRole("button", { name: "Login" }).click();

  // Step 5: Result စစ်မယ်
  await expect(page.getByText("Login Successful")).toBeVisible();
});

test("Button Click Test", async ({ page }) => {
  await page.setContent(`
    <button id="loginBtn">Login</button>
    <p id="message"></p>

    <script>
      document.getElementById("loginBtn").addEventListener("click", () => {
        document.getElementById("message").textContent =
          "Button Clicked";
      });
    </script>
  `);

  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Button Clicked")).toBeVisible();
});

test("Invalid Password Login Test", async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1>Login Form</h1>

        <label for="email">Email</label>
        <input id="email" type="email">

        <label for="password">Password</label>
        <input id="password" type="password">

        <button id="loginBtn" type="button">Login</button>

        <p id="message"></p>

        <script>
          document.getElementById("loginBtn").addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (email === "test@example.com" && password === "123456") {
              document.getElementById("message").textContent =
                "Login Successful";
            } else {
              document.getElementById("message").textContent =
                "Login Failed";
            }
          });
        </script>
      </body>
    </html>
  `);
  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Password").fill("wrong123");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Login Failed")).toBeVisible();
});
