import { test, expect } from "@playwright/test";

test.describe("AI Response Evaluation", () => {
  test("should correctly explain Laravel", async () => {
    const aiResponse =
      "Laravel is a PHP framework used for web application development.";

    // Check whether the response mentions PHP

    expect(aiResponse).toContain("PHP");

    // Check whether the response is relevant to web development

    expect(aiResponse).toContain("web application development");

    // Check whether the response does not incorrectly describe Laravel

    expect(aiResponse).not.toContain("JavaScript framework");
  });
});
