// Require Webdriver
const webdriver = require('selenium-webdriver');
// Require Methods From Webdriver
const {Builder, By, Key, until} = webdriver;
const {randomLetters,randomNumbers, randomInt} = require('./utils');

const driver = new webdriver.Builder().forBrowser('chrome').build();

const user = {
  firstName:randomLetters(5),
  lastName:randomLetters(5),
  email:randomLetters(5)+'@gmail.com',
  password:'A123$'+randomLetters(5),
  phoneNumber:[435,randomNumbers(3),randomNumbers(4)]
};

describe('Publicity AI Authentication',function(){
  after(function(done){
    driver.quit();
    done();
  });
  describe('Sign Up',()=>{
    it('Should get the page successfully',function(done){
      this.timeout(10000);
      driver.get('https://pai-test.herokuapp.com/users/sign_up').then(()=>{
        done();
      });
    });
    it('can enter the signup details successfully',function(){
      this.timeout(10000);
      return new Promise((resolve,reject)=>{
        // NOTE: Although not sytactically pretty, it is best to chain thens here because
        // .then is a method of a regular object not a promise so we cannot use Promise.All,
        // Unless we wrap it in a promise which would be more inefficient and ugly.
        driver.findElement(By.name('user[first_name]')).sendKeys(user.firstName).then(()=>{
          driver.findElement(By.name('user[last_name]')).sendKeys(user.lastName).then(()=>{
            driver.findElement(By.name('user[email]')).sendKeys(user.email).then(()=>{
              driver.findElement(By.name('user[password]')).sendKeys(user.password).then(()=>{
                driver.findElement(By.name('phone1')).sendKeys(user.phoneNumber[0]).then(()=>{
                  driver.findElement(By.name('phone2')).sendKeys(user.phoneNumber[1]).then(()=>{
                    driver.findElement(By.name('phone3')).sendKeys(user.phoneNumber[2]).then(()=>{
                      driver.findElement(By.name('user[password_confirmation]')).sendKeys(user.password).then(()=>{
                        resolve();
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
    it('can sign up successfully',function(){
      return new Promise((resolve,reject)=>{
        driver.findElement(By.id('frack')).click().then(()=>{
          resolve();
        });
      });
    });
  });
});


//
// driver.get('https://pai-test.herokuapp.com/users/sign_in');
// driver.findElement(By.name('user[email]')).sendKeys('');
