//import HomePage from 'page_objects/HomePage';
const BASE_URL = 'http://app-local.COMPANY.com:8080';
const HP_URL = BASE_URL + '/auth/login';
const DASHBOARD_URL = BASE_URL + '/dashboard/apps';
const EDITOR_URL = BASE_URL + '/editor/';
const timeout = 30000;

describe(
  '/ (Function Helper)',
  () => {
    let page
    beforeAll(async () => {
      jest.setTimeout(30000);
      page = await global.__BROWSER__.newPage();
      await page.goto(HP_URL);
    }, timeout)

    afterAll(async () => {
      await page.close();
    })

    it('user should be able to login', async () => {
      //const hp = new HomePage(page);
      await page.type('input[type="email"]', '#INSERT_EMAIL#');
      await page.type('input[type="password"]', '#INSERT_PASSWORD#');
      await page.click('button[type="submit"]');
      //await page.waitForNavigation();

      await page.waitFor('main h1');
      const elemTitle = await page.$('main h1');
      const title = await page.evaluate(elemTitle => elemTitle.innerText, elemTitle);
      //const dashTitle = await page.evaluate( () => document.querySelector( 'main h1' ).textContent );
      expect(title).toMatch('My apps');
      expect(await page.url()).toMatch(DASHBOARD_URL);


    });

    it('user should be able to create a new app', async () => {
      await page.click('button[type="button"]');
      //await page.waitForNavigation();
      await page.waitFor('main canvas');
      expect(await page.url()).toContain(EDITOR_URL);
      await page.waitFor('button[title="FUNCTIONS"]');
      await page.click('button[title="FUNCTIONS"]');
      await page.waitFor('div[data-test="functionHelper"]');
      const fn = await page.$$('div[data-test="fhrow"]');
      expect(fn.length).toBeGreaterThan(100);
      await fn[0].click();
      await page.waitFor('div[data-test="back"]');
      //const newApp = await page.evaluate( () => document.querySelector( 'strong' ).textContent );
      const elemApp = await page.$('strong');
      const name = await page.evaluate(elemApp => elemApp.innerText, elemApp);
      expect(name).toMatch('Untitled app 1');

    });

    it('user should be able to view the new app on dashnoard table', async () => {
      await page.goto(DASHBOARD_URL);
      await page.waitFor('main section table');
      //const app = await page.evaluate( () => document.querySelector( 'main section table td div div div span' ).textContent );
      const elemApp = await page.$('main section table td div div div span');
      const name = await page.evaluate(elemApp => elemApp.innerText, elemApp);
      expect(name).toMatch('Untitled app 1');

    });

    it('user should be able to rename new app on dashboard table', async () => {
      await page.goto(DASHBOARD_URL);
      await page.waitFor('main div[role="button"]');
      await page.click('main div[role="button"]');
      await page.click('input');
      await page.keyboard.press('Delete');
      await page.keyboard.type('Hello');
      await page.keyboard.press('Enter');
      await page.waitFor(1000);
      //const app = await page.evaluate( () => document.querySelector( 'main section table td div div div span' ).textContent );
      const elemApp = await page.$('main section table td div div div span');
      const name = await page.evaluate(elemApp => elemApp.innerText, elemApp);
      expect(name).toMatch('Hello');
    });

    it('user should be able to delete app', async () => {
      await page.goto(DASHBOARD_URL);
      await page.waitFor('div[data-test="deleteApp"]');
      await page.click('div[data-test="deleteApp"]');
      await page.waitFor('div[data-test="modal"]');
      await page.click('div[data-test="modal"] button');
    });

  },
  timeout
)
