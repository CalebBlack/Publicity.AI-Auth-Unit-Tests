const webdriver = require('selenium-webdriver'),
    chrome = require('selenium-webdriver/chrome');
const {Builder, By, Key, until} = webdriver;
var driver = new webdriver.Builder().forBrowser('chrome').withCapabilities(webdriver.Capabilities.chrome()).build();

describe('Sign Up',()=>{
  it('Should get the page successfully',function(done){
    this.timeout(10000);
    driver.get('https://pai-test.herokuapp.com/users/sign_up').then(()=>{
      done();
    });
  });
});
// 
// driver.get('https://pai-test.herokuapp.com/users/sign_in');
// driver.findElement(By.name('user[email]')).sendKeys('');
