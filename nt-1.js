const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function nt1(){
    let driver=await new webdriver.Builder()
    .forBrowser('firefox')
    .build()

    await driver.get('https://iris-beta.netlify.com/')

    await driver.findElement(By.name('email')).sendKeys('prathyu0398@gmail.com')
    await driver.findElement(By.name('password')).sendKeys('prathyu')

    await(await driver.findElement(By.xpath('/html/body/div/div/div/div/div/div/div/form/div[4]/button'))).click()

    await driver.getPageSource().then(function(content) 
    {
      if(content.indexOf('The password is invalid or the user does not have a password.') !==-1 ) {
       console.log('Test failed');
       /*console.log('Target page');
       d.get('https://iris-se.netlify.com') */
      } else {
          console.log('Test passed');
          return false;
      }
      //driver.quit();
    
      
    });

}
nt1();