const webdriver = require('selenium-webdriver')
const By = webdriver.By
const until = webdriver.until

const driver = new webdriver.Builder().forBrowser('firefox').build()
driver.get(
  'https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html'
)

const button = driver.findElement(By.css('button:nth-of-type(1)'))
button.getText().then((text) => {
  console.log(`Button text is '${text}'`)
})
button.click()

// const alert = driver.switchTo().alert()
// alert.getText().then((text) => {
//   console.log(`Alert text is '${text}'`)
// })
// alert.accept()

const input = driver.findElement(By.id('name'))
driver.sleep(2000).then(() => {
  input.sendKeys('Filling in my form')
  input.getAttribute('value').then((value) => {
    if (value !== '') {
      console.log('Form input editable')
    }
  })
})

driver.quit()
