const { test, expect } = require("@playwright/test");

test("Child Window", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(
    "https://www.hyrtutorials.com/p/window-handles-practice.html"
  );

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("#newTabBtn").click(),
  ]);

  await newPage.waitForSelector("h1.post-title", { timeout: 5000 });
  const text = await newPage.locator("h1.post-title").textContent();

  expect(text.trim()).toEqual("AlertsDemo");
});
