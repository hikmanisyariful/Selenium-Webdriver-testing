const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

(async function example() {
  // Create Chrome driver
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeService(
      new chrome.ServiceBuilder(
        "/Users/hikmanisyarifulfajar/Documents/Penentration_Testing/tools/chromedriver-mac-x64/chromedriver"
      )
    )
    .build();

  try {
    // 1. Open Kopi Kenangan website
    await driver.get("https://kopikenangan.com/");
    await driver.sleep(3000);

    // 2. Check footer
    let footer = await driver.wait(
      until.elementLocated(By.id("footer-sections")),
      1000
    );
    await driver.executeScript("arguments[0].scrollIntoView(true);", footer);

    // 3. Tunggu hasil
    await driver.sleep(10000);
  } finally {
    // 4. quit
    await driver.quit();
  }
})();
