const { test, expect } = require("@playwright/test");
const path = require("path");
const fs = require("fs").promises;

test("Download", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/FileDownload.html");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.locator(".btn-primary").click(),
  ]);

  const downloadFileName = download.suggestedFilename();
  console.log(downloadFileName);
  const filePath = path.resolve("./downloads", downloadFileName);
  await download.saveAs(filePath);
  // ✅ Assertion using async access
  let fileExists = true;
  try {
    await fs.access(filePath);
  } catch {
    fileExists = false;
  }
  expect(fileExists).toBeTruthy();
});
