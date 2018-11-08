'use strict';
module.exports = {
  init: () => {
    this.usernameInput = element(by.css('input[type="email"]'));
    this.passwordInput = element(by.css('input[type="password"]'));
    this.loginButton = element(by.css('button[type="submit"]'));
    this.greeting = element(by.css('span[data-test="greetings"]'));
    this.name = element(by.css('span[data-test="name"]'));
    this.appName = element(by.css('aside strong'));
  },
  login: async () => {
    await browser.get('http://app-local.COMPANY.com:8080/auth/login');
    await browser.wait(
      EC.visibilityOf(this.usernameInput),
      10000,
      'inputs Visibility'
  );
    await this.usernameInput.sendKeys('#INSERT_EMAIL#');
    await this.passwordInput.sendKeys('#INSERT_PASSWORD#');
    return await this.loginButton.click();
  },
  get: async (string) => {
    return await browser.get(string);
  },
  setUsername: async (user) => {
    return await this.usernameInput.sendKeys(user);
  },
  setPassword: async (pass) => {
    return await this.passwordInput.sendKeys(pass);
  },
  clickOnButton: async (string) => {
    const button = await element(by.css('button[type="' + string + '"]'));
    return await button.click();
  },
  getGreetingText: async () => {
    await browser.wait(
        EC.visibilityOf(this.greeting),
        10000,
        'greeting Visibility'
    );
    return await this.greeting.getText() + ' ' +  await this.name.getText();
  },
  getAppName: async () => {
    await browser.wait(
        EC.visibilityOf(this.appName),
        10000,
        'app name'
    );
    return await this.appName.getText();
  },
  clickOnDiv: async () => {
    const button = await element(by.css('main div[role="button"]'));
    return await button.click();
  },
  fillInput: async (text) => {
    const input = await element(by.css('input'));
    await input.click();
    await browser.actions().sendKeys(protractor.Key.DELETE).perform();
    await input.sendKeys(text);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
  },
}
