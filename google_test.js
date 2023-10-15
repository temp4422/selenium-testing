const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until

const driver = new webdriver.Builder().forBrowser('firefox').build()

driver.get('http://www.google.com')

driver.findElement(By.name('q')).sendKeys('webdriver')

driver.sleep(1000).then(() => {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB)
})

// driver.findElement(By.name('btnK')).click()
driver.findElement(By.xpath(`//div[@class='FPdoLc lJ9FBc']//input[@name='btnK']`)).click()

driver.sleep(2000).then(() => {
  driver.getTitle().then((title) => {
    // if (title === 'webdriver - Пошук Google') {
    if (title === 'webdriver - Google Search') {
      console.log('Test passed')
    } else {
      console.log('Test failed')
    }
    driver.quit()
  })
})
