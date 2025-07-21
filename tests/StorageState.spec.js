const { test, expect } = require("@playwright/test");

test.use({ storageState: "state.json" });
test("Dsshboard", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/");
  const rows = page.locator("h5");
  const product = "ZARA COAT 3";
  for (let i = 0; i < (await rows.count()); i++) {
    console.log(rows.nth(i));
    const productNames = await rows.nth(i).textContent();
    if (productNames.includes(product)) {
      console.log(productNames, "=======");
      expect(product).toEqual(productNames);
      break;
    }
  }
});
