const { test, expect } = require("@playwright/test");

test("dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#male").check();
});
