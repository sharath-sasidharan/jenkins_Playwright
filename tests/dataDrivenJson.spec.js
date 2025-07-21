const { test, expect } = require("@playwright/test");
const { data } = require("../data/user.json");
import fs from "fs";
import { parse } from "csv-parse/sync";

/* fs.readFileSync is a method in Node.js used to read a file synchronously — that means it waits until the file is fully read before moving on to the next line.

✅ columns: true
This means:

➡️ First row in the CSV file is treated as the header (column names).

  skip_empty_lines: true: It tells the parser to ignore any completely empty lines in your CSV file
*/
const records = parse(fs.readFileSync("data/test.csv"), {
  columns: true,
  skip_empty_lines: true,
});
// for (let [key, value] of Object.entries(data)) {
//   test(`Data driven ${value}`, async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.locator("#Wikipedia1_wikipedia-search-input").fill(value);
//     await page.locator("#email").fill(value);
//     await page.locator("#phone").fill(value);
//     await page.keyboard.press("Enter");
//   });
// }

//json
for (const { name, email, phone } of data) {
  test(`Data-driven test for ${name}`, async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("#name").fill(name);
    await page.locator("#email").fill(email);
    await page.locator("#phone").fill(phone.toString());

    await page.keyboard.press("Enter");
  });
}

//csv
for (let { id, name, email, phone } of records) {
  test(`Data driven from csv ${id}`, async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#name").fill(name);
    await page.locator("#email").fill(email);
    await page.locator("#phone").fill(phone.toString());
    await page.waitForTimeout(5000);
  });
}
