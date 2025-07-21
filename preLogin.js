const { chromium } = require("@playwright/test");
const SelectorHelper = require("./utils/SelectorHelper");
(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  await page.locator("#userEmail").fill("sasidharansteven@gmail.com");
  await page.locator("#userPassword").fill("Sarath1997");
  await page.locator("#login").click();

  await SelectorHelper.isSelectorPresent(
    page,
    ".btn.btn-custom[routerlink='/dashboard/myorders']"
  );

  await context.storageState({ path: "state.json" });

  await browser.close();
})();
