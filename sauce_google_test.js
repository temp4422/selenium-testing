const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until
const username = 'YOUR-USER-NAME'
const accessKey = 'YOUR-ACCESS-KEY'

const driver = new webdriver.Builder()
  .withCapabilities({
    browserName: 'chrome',
    platform: 'Windows XP',
    version: '43.0',
    username,
    accessKey,
  })
  .usingServer(`https://${username}:${accessKey}@ondemand.saucelabs.com:443/wd/hub`)
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
