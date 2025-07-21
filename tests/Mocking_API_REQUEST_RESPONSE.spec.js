const { test, expect } = require("@playwright/test");
test.use({ storageState: "state.json" });
const fakeResponse = { data: [], message: "No Orders" };
test("MOCKING API RESPONSE", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6872433f6eb377753096c665",
    async (route) => {
      const response = await page.request.fetch(route.request());
      const body = JSON.stringify(fakeResponse);
      await route.fulfill({
        response,
        body,
      });
    }
  );

  await page.locator('button[routerlink*="myorder"]').click();

  await page.waitForResponse((res) =>
    res
      .url()
      .includes(
        "https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/6872433f6eb377753096c665"
      )
  );
});

test("Mocking the Request", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.locator('button[routerlink*="myorder"]').click();

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=687d0b536eb3777530ab5b16",
    async (route) =>
      await route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=687d0b536eb3777530ab5b00",
      })
  );
  await page.click("//tbody/tr[1]/td[5]/button[1]");
});
