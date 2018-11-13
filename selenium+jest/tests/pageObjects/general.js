'use strict';
import { By, until, wait} from 'selenium-webdriver';
import { driver, defaultTimeout } from '../helpers';
const rootSelector = { css: '#root' };
const usernameInput = { css: 'input[type="email"]' };
const passwordInput = { css: 'input[type="password"]' };
const loginButton = { css: 'button[type="submit"]' };
const greeting = { css: 'span[data-test="greetings"]' };
const name = { css: 'span[data-test="name"]' };
const appName = { css: 'aside strong' };
const dashboardTitle = { css: 'main h1' };
module.exports = {
  login: async () => {
    await driver.get(`${__baseUrl__}/auth/login`);
    await driver.wait(until.elementLocated(rootSelector), defaultTimeout);
    await driver.findElement(usernameInput).sendKeys('#INSERT_EMAIL#');
    await driver.findElement(passwordInput).sendKeys('#INSERT_PASSWORD#');
    return await driver.findElement(loginButton).click();
  },
  get: async (string) => {
    return await driver.get(`${__baseUrl__}/{string}`);
  },
  setUsername: async (user) => {
    return await driver.findElement(usernameInput).sendKeys(user);
  },
  setPassword: async (pass) => {
    return await driver.findElement(passwordInput).sendKeys(pass);
  },
  clickOnButton: async (string) => {
    const button = await element(by.css('button[type="' + string + '"]'));
    return await button.click();
  },
  getGreetingText: async () => {
    await driver.wait(until.elementLocated(driver.findElement(greeting)), defaultTimeout);
    return await driver.findElement(greeting).getText() + ' ' +  await driver.findElement(name).getText();
  },
  getDashboardTitle: async () => {
    await driver.wait(until.urlContains('dashboard/apps'));
    const main = driver.findElement(dashboardTitle);
    await driver.wait(main, defaultTimeout);
    return await main.getText();
  },
  getAppName: async () => {
    await driver.wait(until.elementLocated(driver.findElement(appName)), defaultTimeout);
    return await driver.findElement(appName).getText();
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
