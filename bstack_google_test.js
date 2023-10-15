const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until

// Input capabilities
const capabilities = {
  browserName: 'Firefox',
  browser_version: '56.0 beta',
  os: 'OS X',
  os_version: 'Sierra',
  resolution: '1280x1024',
  'browserstack.user': 'YOUR-USER-NAME',
  'browserstack.key': 'YOUR-ACCESS-KEY',
  'browserstack.debug': 'true',
  build: 'First build',
}

const driver = new webdriver.Builder()
  .usingServer('http://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build()

driver.get('http://www.google.com')
driver.findElement(By.name('q')).sendKeys('webdriver')

driver.sleep(1000).then(() => {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB)
})

driver.findElement(By.name('btnK')).click()

driver.sleep(2000).then(() => {
  driver.getTitle().then((title) => {
    if (title === 'webdriver - Google Search') {
      console.log('Test passed')
    } else {
      console.log('Test failed')
    }
  })
})

driver.quit()
