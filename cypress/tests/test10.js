//import HomePage from 'page_objects/HomePage';
const BASE_URL = 'http://app-local.COMPANY.com:8080';
const HP_URL = BASE_URL + '/auth/login';
const DASHBOARD_URL = BASE_URL + '/dashboard/apps';
const EDITOR_URL = BASE_URL + '/editor/';
const timeout = 30000;

describe(
  '/ (Function Helper)',
  () => {
    beforeAll(() => {
      cy.visit(HP_URL);
    }, timeout)

    it('user should be able to login', () => {
      //const hp = new HomePage(page);
      cy.get('input[type="email"]').type('#INSERT_EMAIL#');
      cy.get'input[type="password"]').type('#INSERT_PASSWORD#');
      cy.get'button[type="submit"]').click();
      cy.get('main h1').contains('My apps');
      cy.get.url().should('include', DASHBOARD_URL);


    });

    it('user should be able to create a new app', () => {
      cy.get('button[type="button"]').click();
      cy.get.url().should('include', EDITOR_URL);
      cy.get('button[title="FUNCTIONS"]').click();
      const fn = cy.get.$$('div[data-test="fhrow"]');
      expect(fn.length).toBeGreaterThan(100);
      fn[0].click();
      cy.get.waitFor('div[data-test="back"]');
      cy.get('strong').contains('Untitled app 1');

    });

    it('user should be able to the new app on dashnoard table', () => {
      cy.visit(DASHBOARD_URL);
      cy.get.waitFor('main section table');
      //const app = cy.get.evaluate( () => document.querySelector( 'main section table td div div div span' ).textContent );
      const elemApp = cy.get.$('main section table td div div div span');
      const name = cy.get.evaluate(elemApp => elemApp.innerText, elemApp);
      expect(name).contains('Untitled app 1');

    });

    it('user should be able to rename new app on dashboard table', () => {
      cy.visit(DASHBOARD_URL);
      cy.get('main div[role="button"]').click();
      cy.get('input').click();
      cy.get.keyboard.press('Delete');
      cy.get.keyboard.type('Hello');
      cy.get.keyboard.press('Enter');
      cy.get.waitFor(1000);
      cy.get('main section table td div div div span').contains('Hello');
    });

    fit('user should be able to delete app', () => {
      cy.visit(DASHBOARD_URL);
      cy.get('div[data-test="deleteApp"]').click();
      cy.get('div[data-test="modal"] button').click();
    });

  },
  timeout
)
