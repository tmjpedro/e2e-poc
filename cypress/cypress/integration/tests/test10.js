//import HomePage from 'page_objects/HomePage';
const BASE_URL = 'http://app-local.COMPANY.com:8080';
const HP_URL = BASE_URL + '/auth/login';
const DASHBOARD_URL = BASE_URL + '/dashboard/apps';
const EDITOR_URL = BASE_URL + '/editor/';
const timeout = 30000;

context(
  '/ (Function Helper)',
  () => {
    beforeEach(() => {
      cy.visit(HP_URL);
      cy.get('input[type="email"]').type('#INSERT_EMAIL#');
      cy.get('input[type="password"]').type('#INSERT_PASSWORD#');
      cy.get('button[type="submit"]').click();
      cy.get('main h1').contains('My apps');
      cy.url().should('include', DASHBOARD_URL);
    }, timeout);

    /*afterEach(() => {
      cy.visit(DASHBOARD_URL);
      cy.get('main div[role="button"]').eq(1).trigger('mouseover');
      cy.get('div[data-test="button-round"]').eq(1).click();
      cy.get('div[data-test="deleteApp"]').first().click();
      cy.get('div[data-test="modal"] button').eq(1).click();
    }, timeout);*/

    /*it('user should be able to login', () => {
      //const hp = new HomePage(page);
      cy.visit(HP_URL);
      cy.get('input[type="email"]').type('#INSERT_EMAIL#');
      cy.get('input[type="password"]').type('#INSERT_PASSWORD#');
      cy.get('button[type="submit"]').click();
      cy.get('main h1').contains('My apps');
      cy.url().should('include', DASHBOARD_URL);


    });*/
/*
    it('user should be able to create a new app', () => {
      cy.get('button[type="button"]').first().click();
      cy.url().should('include', EDITOR_URL);
      cy.get('button[title="FUNCTIONS"]').click();
      cy.get('div[data-test="functionHelper"] ul').its('length').should('be.greaterThan', 100);
      cy.get('strong').contains('Untitled app 1');

    });

    it('user should be able to the new app on dashnoard table', () => {
      cy.visit(DASHBOARD_URL);
      cy.get('main section table td div div div span').contains('Untitled app 1');

    });

    it('user should be able to rename new app on dashboard table', () => {
      cy.visit(DASHBOARD_URL);
      cy.get('main div[role="button"]').eq(1).trigger('mouseover');
      cy.get('div[data-test="button-round"]').eq(1).click();
      cy.get('div[data-test="renameApp"]').first().click();
      cy.get('div[data-test="modal"] input').type('Hello');
      cy.get('div[data-test="modal"] button').eq(1).click();
      cy.get('main section table td div div div span').contains('Hello');
    });

    it('user should be able to delete app', () => {
      cy.visit(DASHBOARD_URL);
      cy.get('main div[role="button"]').eq(1).trigger('mouseover');
      cy.get('div[data-test="button-round"]').eq(1).click();
      cy.get('div[data-test="deleteApp"]').first().click();
      cy.get('div[data-test="modal"] button').eq(1).click();
    });

    it('user should be able to create a new view', () => {
      cy.get('button[type="button"]').first().click();
      cy.url().should('include', EDITOR_URL);
      cy.get('#create-view div[role="button"]').click();
      cy.get('div[draggable="true"]').eq(0).contains('View1');
      cy.get('div[draggable="true"]').eq(1).contains('View2');
      cy.get('div[draggable="true"]').first()
        .trigger('mousedown', { which: 1 })
        .trigger('mousemove', { clientX: 50, clientY: 500 })
        .trigger('mouseup', {force: true});
      cy.get('div[draggable="true"]').eq(0).contains('View2');
      cy.get('div[draggable="true"]').eq(1).contains('View1');
    });*/


    it('.click() - click on a DOM element', () => {
      cy.get('button[type="button"]').first().click();
      cy.url().should('include', EDITOR_URL);
      //checking default
      cy.wait(5000);
      cy.get('div[data-test="cellPosition"]').contains('A1');

      /*cy.get('canvas')
        .click(32, 32)
        .click(32, 32)
      //  .type('bla bla');
      cy.get('div[data-test="cellPosition"]').contains('A1');
      //cy.get('span[data-test="formulaValue"]').contains('bla bla');
      */cy.get('.hypergrid')
        .click(132, 132)
        .click(132, 132)
      cy.get('div[data-test="cellPosition"]').contains('B1');
      cy.get('.hypergrid')
        .click(64, 132)
        .click(64, 132);
      cy.get('div[data-test="cellPosition"]').contains('B2');

    })
  },
  timeout
)
