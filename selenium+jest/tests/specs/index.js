import { driver } from '../helpers';
import { login, getDashboardTitle } from '../pageObjects/general';
import { By, until, wait, Key} from 'selenium-webdriver';
//let generalPage = require('../pageObjects/general.js');

function activateSelectionMode(element, xp, yp) {
    return driver.actions()
      .mouseMove(element, {
        x: xp,
        y: yp,
      })
      .perform().then(() => driver.actions()
        .doubleClick()
        .perform());
  }

describe('index', () => {



  it('should show the right title', async () => {
    await login();
/*
    const user = await driver.findElement(By.css('input[type="email"]'));
    user.sendKeys('#INSERT_EMAIL#');
    const pass = await driver.findElement(By.css('input[type="password"]'));
    pass.sendKeys('#INSERT_PASSWORD#');
    const btn = driver.findElement(By.css('button[type="submit"]'));
    await btn.click();
    await driver.wait(until.urlContains('dashboard/apps'));
    //const elem =  await until.elementTextContains(By.css('main h1'), 'My apps');
    const main = driver.findElement(By.css('main h1'));
    await driver.wait(main, 10000);
*/
    expect(await getDashboardTitle()).toBe('My apps');
  });

  it('canvas', async () => {
    const btn = driver.findElement(By.css('button[type="button"]'));
    await btn.click();
    await driver.wait(until.urlContains('/editor'));
    //await activateSelectionMode(driver.findElement(By.css('canvas')), 133, 32);
/*    await driver.actions()
      .move({x: 133, y: 32, origin: driver.findElement(By.css('canvas'))})
      .doubleClick()
      .perform(); */
      const actions = await driver.actions();
      const canvas = await driver.findElement(By.css('canvas'));
      await actions
        .mouseMove(canvas, {x: 132, y: 32})
        .click()
        .sendKeys(Key.ARROW_RIGHT)
        .sendKeys(Key.EQUALS + '1+1')
        .sendKeys(Key.ENTER)
        .sendKeys(Key.ARROW_UP)
        .sendKeys(Key.ENTER)
        .perform();

    expect(await driver.findElement(By.css('#cellEditor')).getText()).toBe('=1+1');
    //const elem = await driver.findElement(By.css('div[data-test="cellPosition"]'));
    expect(await driver.findElement(By.css('div[data-test="cellPosition"]')).getText()).toBe('C1');
    expect(await driver.findElement(By.css('span[data-test="formulaValue"]')).getText()).toBe('=1+1');

    await actions
      .sendKeys(Key.TAB)
      .sendKeys(Key.ARROW_RIGHT)
      .sendKeys(Key.ARROW_DOWN)
      .perform();

    expect(await driver.findElement(By.css('div[data-test="cellPosition"]')).getText()).toBe('x2');
  });
});
