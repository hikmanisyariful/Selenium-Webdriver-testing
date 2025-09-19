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
    await driver.sleep(2000);

    // 2. Click link to Career
    let careerLink = await driver.wait(
      until.elementLocated(By.linkText("Career")),
      5000
    );
    await careerLink.click();

    // 3. Tunggu halaman Career terbuka
    await driver.wait(until.urlContains("/career"), 10000);

    // 4. Input "QA" ke search box
    let searchBox = await driver.wait(
      until.elementLocated(By.id("search-job")),
      5000
    );
    await searchBox.sendKeys("QA");

    // 5. Klik tombol FIND JOBS
    let findJobsBtn = await driver.findElement(By.css("button.btn"));
    await findJobsBtn.click();

    // 6. Scroll to class="filter-body"
    let filterBody = await driver.wait(
      until.elementLocated(By.css(".filter-body")),
      1000
    );
    await driver.executeScript(
      "arguments[0].scrollIntoView(true);",
      filterBody
    );

    // 7. Tunggu hasil (opsional)
    await driver.sleep(5000); // biar hasilnya sempat dimuat
  } finally {
    // 8. Screenshot hasil pencarian
    await driver.quit();
  }
})();
