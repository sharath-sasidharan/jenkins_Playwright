async function isSelectorPresent(page, selectorText, timeout = 15000) {
  try {
    await page.waitForSelector(selectorText, { timeout });
    return true;
  } catch (error) {
    return false;
  }
}
module.exports = {
  isSelectorPresent,
};
