//import HomePage from 'page_objects/HomePage';
const BASE_URL = 'http://app-local.COMPANY.com:8080';
const HP_URL = BASE_URL + '/auth/login';
const DASHBOARD_URL = BASE_URL + '/dashboard/apps';
const EDITOR_URL = BASE_URL + '/editor/';
const timeout = 20000;

describe(
  '/ (General)',
  () => {
    let page
    beforeAll(async () => {
      jest.setTimeout(20000);
      page = await global.__BROWSER__.newPage();
      await cy.visit(HP_URL);
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
      const dashTitle = await page.evaluate( async () => await document.querySelector( 'main h1' ).textContent );
      expect(dashTitle).toMatch('My apps');
      expect(await page.url()).toMatch(DASHBOARD_URL);


    });

    it('user should be able to create a new app', async () => {
      await page.click('button[type="button"]');
      //await page.waitForNavigation();
      await page.waitFor('main canvas');
      expect(await page.url()).toContain(EDITOR_URL);
      await page.waitFor('aside strong');
      const newApp = await page.evaluate( async () => await document.querySelector( 'strong' ).textContent );
      expect(newApp).toMatch('Untitled app 1');

    });

    it('user should be able to the new app on dashnoard table', async () => {
      await cy.visit(DASHBOARD_URL);
      await page.waitFor('main section table');
      const app = await page.evaluate( async () => await document.querySelector( 'main section table td div div div span' ).textContent );
      expect(app).toMatch('Untitled app 1');

    });

    it('user should be able to rename new app on dashnoard table', async () => {
      await cy.visit(DASHBOARD_URL);
      await page.waitFor('main div[role="button"]');
      await page.click('main div[role="button"]');
      await page.type('input', 'Hello');
      await page.keyboard.press('Enter');
      const app = await page.evaluate( async () => await document.querySelector( 'main section table td div div div span' ).textContent );
      expect(app).toMatch('Hello');
    });



  },
  timeout
)
