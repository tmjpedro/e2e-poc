let generalPage = require('../pages/general.po.js');

let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1200);

/*Before(function () {
    // This hook will be executed before scenarios tagged with @withoutLogin
    generalPage.init();
  });
  */
Before({tags: "@login"}, async function () {
    // This hook will be executed before all scenarios
    generalPage.init();
    await generalPage.get('http://app-local.COMPANY.com:8080/auth/login');
    await generalPage.setUsername('#INSERT_EMAIL#');
    await generalPage.setPassword('#INSERT_PASSWORD#');
    await generalPage.clickOnButton('submit');
});


Given('The user go to {string}', async function (string) {
    await generalPage.get(string);
});

When('The user fill {string} in the email field', async function (string) {
    await generalPage.setUsername(string);
});

When('The user fill {string} in the password field', async function (string) {
    await generalPage.setPassword(string);
});

When('The user clicks on {string} button', async function (string) {
    await generalPage.clickOnButton(string);
});

Then('The user should see {string}', async function (string) {
    expect(await generalPage.getGreetingText()).to.have.string(string)
});

Then('The user should see new {string} is created', async function (string) {
    expect(await generalPage.getAppName()).to.have.string(string);
});

When('The user click on edit name and delete text, add {string} and press Enter', async function (string) {
    await generalPage.clickOnDiv();
    await generalPage.fillInput(string);
});


Then('The user should be able to see app name is updated to {string}', async function (string) {
    expect(await generalPage.getAppName()).to.have.string(string);
});