import { Builder, By, until, WebDriver } from "selenium-webdriver";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

async function runTest(): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("chrome").build();

  try {
    // Open the login page
    const filePath = resolve("selenium/pages/login.html");
    const fileUrl = pathToFileURL(filePath).href;

    await driver.get(fileUrl);

    // Enter email and incorrect password
    const email = await driver.findElement(By.id("email"));
    const password = await driver.findElement(By.id("password"));

    await email.sendKeys("admin@test.com");
    await password.sendKeys("wrong123");

    // Click the Login button
    const loginButton = await driver.findElement(By.id("login"));
    await loginButton.click();

    // Wait for the expected failure message
    const message = driver.findElement(By.id("message"));

    await driver.wait(until.elementTextIs(message, "Login Failed"), 5000);

    // Verify the result
    const result = await message.getText();
    console.log("Login Result:", result);

    if (result !== "Login Failed") {
      throw new Error(`Login failure test failed: ${result}`);
    }

    console.log("Login Failure Test Passed!");

    // Keep the browser open for 3 seconds
    await driver.sleep(3000);
  } finally {
    await driver.quit();
  }
}

runTest().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
