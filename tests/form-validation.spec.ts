import { test, expect } from "@playwright/test";

test("Required Email Validation Test", async ({ page }) => {
  await page.setContent(`
    <form>
      <label for="email">Email</label>
      <input id="email" type="email" required>

      <button type="submit">Submit</button>
    </form>
  `);

  const emailInput = page.getByLabel("Email");

  // Email Input မှာ required Attribute ရှိမရှိ စစ်မယ်
  await expect(emailInput).toHaveAttribute("required", "");

  // Email ကို Empty ထားမယ်
  await emailInput.fill("");

  // Browser Validation Result ကို စစ်မယ်
  const isValid = await emailInput.evaluate(
    (element: HTMLInputElement) => element.validity.valid,
  );

  expect(isValid).toBe(false);
});

test("Invalid Email Format Test", async ({ page }) => {
  await page.setContent(`
    <form>
      <label for="email">Email</label>
      <input id="email" type="email" required>

      <button type="submit">Submit</button>
    </form>
  `);

  const emailInput = page.getByLabel("Email");
  await expect(emailInput).toHaveAttribute("required", "");
  await emailInput.fill("invalid-email");

  const isTypeMismatch = await emailInput.evaluate(
    (element: HTMLInputElement) => element.validity.typeMismatch,
  );

  expect(isTypeMismatch).toBe(true);
});
