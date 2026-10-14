import { test, expect } from "@playwright/test";

test("TC-001: Valid Login", async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1>Login</h1>

        <label for="email">Email</label>
        <input id="email" type="email">

        <label for="password">Password</label>
        <input id="password" type="password">

        <button id="loginBtn">Login</button>

        <p id="message"></p>

        <script>
          document.getElementById("loginBtn").addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            let message = "";

            if (email === "") {
              message = "Email is required";
            } else if (password === "") {
              message = "Password is required";
            } else if (
              email === "test@example.com" &&
              password === "123456"
            ) {
              message = "Login Successful";
            } else {
              message = "Login Failed";
            }

            document.getElementById("message").textContent = message;
          });
        </script>
      </body>
    </html>
  `);

  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Login Successful")).toBeVisible();
});

test("TC-002: Invalid Password", async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1>Login</h1>

        <label for="email">Email</label>
        <input id="email" type="email">

        <label for="password">Password</label>
        <input id="password" type="password">

        <button id="loginBtn">Login</button>

        <p id="message"></p>

        <script>
          document.getElementById("loginBtn").addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            let message = "";

            if (email === "") {
              message = "Email is required";
            } else if (password === "") {
              message = "Password is required";
            } else if (
              email === "test@example.com" &&
              password === "123456"
            ) {
              message = "Login Successful";
            } else {
              message = "Login Failed";
            }

            document.getElementById("message").textContent = message;
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

test("TC-003: Empty Email", async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1>Login</h1>

        <label for="email">Email</label>
        <input id="email" type="email">

        <label for="password">Password</label>
        <input id="password" type="password">

        <button id="loginBtn">Login</button>

        <p id="message"></p>

        <script>
          document.getElementById("loginBtn").addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            let message = "";

            if (email === "") {
              message = "Email is required";
            } else if (password === "") {
              message = "Password is required";
            } else if (
              email === "test@example.com" &&
              password === "123456"
            ) {
              message = "Login Successful";
            } else {
              message = "Login Failed";
            }

            document.getElementById("message").textContent = message;
          });
        </script>
      </body>
    </html>
  `);

  await page.getByLabel("Email").fill("");
  await page.getByLabel("Password").fill("123456");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Email is required")).toBeVisible();
});

test("TC-004: Empty Password", async ({ page }) => {
  await page.setContent(`
    <html>
      <body>
        <h1>Login</h1>

        <label for="email">Email</label>
        <input id="email" type="email">

        <label for="password">Password</label>
        <input id="password" type="password">

        <button id="loginBtn">Login</button>

        <p id="message"></p>

        <script>
          document.getElementById("loginBtn").addEventListener("click", () => {
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            let message = "";

            if (email === "") {
              message = "Email is required";
            } else if (password === "") {
              message = "Password is required";
            } else if (
              email === "test@example.com" &&
              password === "123456"
            ) {
              message = "Login Successful";
            } else {
              message = "Login Failed";
            }

            document.getElementById("message").textContent = message;
          });
        </script>
      </body>
    </html>
  `);

  await page.getByLabel("Email").fill("test@example.com");
  await page.getByLabel("Password").fill("");
  await page.getByRole("button", { name: "Login" }).click();
  await expect(page.getByText("Password is required")).toBeVisible();
});
