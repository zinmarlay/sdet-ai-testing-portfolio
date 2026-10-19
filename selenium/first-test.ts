import { Builder, By, WebDriver } from "selenium-webdriver";

async function runTest(): Promise<void> {
  const driver: WebDriver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://example.com");

    console.log("Current URL:", await driver.getCurrentUrl());
    console.log("Page Title:", await driver.getTitle());

    const body = await driver.findElement(By.css("body"));

    const text = await body.getText();

    console.log("Body Text:", text);

    if (!text.includes("This domain is for use")) {
      throw new Error("Expected page content was not found");
    }

    console.log("Test Passed!");
  } finally {
    await driver.quit();
  }
}

runTest().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
