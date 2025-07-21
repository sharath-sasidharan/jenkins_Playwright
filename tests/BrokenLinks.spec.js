const { test, expect } = require("@playwright/test");

test("Broken Links", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const anchors = await page.locator("#broken-links a").all();
  const hrefs = [];

  for (let link of anchors) {
    const href = await link.getAttribute("href");
    if (href && href.startsWith("http")) {
      hrefs.push(href);
    }
  }

  for (let url of hrefs) {
    const response = await page.request.get(url);
    const status = response.status();
    if (status >= 400) {
      console.log(`❌ Broken link: ${url} - Status: ${status}`);
    } else {
      console.log(`✅ Valid link: ${url} - Status: ${status}`);
    }
  }
});

// Steps to detect the broke links

/*


1. Get all the links using all()
const links = await page.locator("a").all()
const hrefs= []
2. use For Of Loop through the link 
for(let link of anchors){


}
3. get the attribute i.e href using getAttribute("href")
const href = await link.getAttribute("href")
4. check it startswith http use startsWith("http")
if(href && href.startsWith("http")){

}
5. push all the href in the blank array
hrefs.push(href)
6.now Loop through the hrefs 
for(let url of hrefs){
}
7. turn into page to api mode i.e. page.request.get(url)
const response = await page.request.get(url)
8.get the status i.e. response.status()
const status = response.status()

9. check if that status is above or equal to 400 then broken link
if(status >=400) broken
  
valid






*/
