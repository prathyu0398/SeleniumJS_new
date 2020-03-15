const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function dmp(){
    let driver=await new webdriver.Builder()
    .forBrowser('firefox')
    .build()

    await driver.get('https://iris-beta.netlify.com/profile')

    await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div[1]/aside/ul/li[2]/a'))).click()

    await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div[2]/div/div/div/form/h1/input')).sendKeys('SaiHarsha B')
    await driver.findElement((By.xpath('/html/body/div/div/div/div/div/div[2]/div/div/div/form/div/div[4]/input'))).sendKeys('Amrita School of Engineering')
    await (await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div[2]/div/div/div/form/div/div[6]/button'))).click()

    


}
dmp();