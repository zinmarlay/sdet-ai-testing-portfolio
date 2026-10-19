import { Builder, By, until, WebDriver } from "selenium-webdriver";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

async function runTest(): Promise<void> {
  // 1. Open Chrome browser
  const driver: WebDriver = await new Builder().forBrowser("chrome").build();

  try {
    // 2. Open the local login page
    const filePath = resolve("selenium/pages/login.html");
    const fileUrl = pathToFileURL(filePath).href;

    await driver.get(fileUrl);

    // 3. Check the page title
    console.log("Page Title:", await driver.getTitle());

    // 4. Find email and password input fields
    const email = await driver.findElement(By.id("email"));
    const password = await driver.findElement(By.id("password"));

    // 5. Enter login credentials
    await email.sendKeys("admin@test.com");
    await password.sendKeys("123456");

    // 6. Check the entered email
    const emailValue = await email.getAttribute("value");
    console.log("Entered Email:", emailValue);

    // 7. Find and click the Login button
    const loginButton = await driver.findElement(By.id("login"));
    await loginButton.click();

    // 8. Find the message element
    const message = driver.findElement(By.id("message"));

    // 9. Wait until the expected text appears (maximum 5 seconds)
    await driver.wait(until.elementTextIs(message, "Login Successful"), 5000);

    // 10. Get and display the login result
    const result = await message.getText();
    console.log("Login Result:", result);

    // 11. Verify the test result
    if (result !== "Login Successful") {
      throw new Error(`Login test failed: ${result}`);
    }

    console.log("Test Passed!");

    // 12. Keep the browser open for 5 seconds
    await driver.sleep(5000);
  } finally {
    // 13. Close the browser, even if the test fails
    await driver.quit();
  }
}

// Handle errors
runTest().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
