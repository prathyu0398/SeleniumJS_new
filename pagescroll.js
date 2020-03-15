const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
async function scroll(){
    let driver =await new webdriver.Builder()
    .forBrowser('firefox')
    .build();
   
    await driver.get('https://iris-beta.netlify.com/profile')
//give waitttt hereeeee

    await driver.executeScript("window.scrollBy(0, 1000)")

    if (driver.scroll===false){
        console.log("Test failêd!");
    }
    else{

        console.log("Test passed!");
    }


}

scroll();