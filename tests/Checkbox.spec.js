const { test, expect } = require("@playwright/test");

test("Loop Checkbox", async ({ page }) => {
  const week = "Thursday";
  await page.goto("https://testautomationpractice.blogspot.com/");
  const rows = page.locator(".form-check-inline");
  for (let i = 0; i < (await rows.count()); i++) {
    const weeknames = await rows.nth(i).locator("label").textContent();
    console.log(weeknames, "w===");
    if (weeknames.includes(week)) {
      const checkbox = rows.nth(i).locator('input[type="checkbox"]');
      await checkbox.click();
      expect(checkbox).toBeChecked();
      break;
    }
  }
});
