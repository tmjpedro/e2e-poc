import { Selector } from 'testcafe';
import { ReactSelector } from 'testcafe-react-selectors';

export default class Page {
    constructor () {
        this.usernameInput = Selector('input[type="email"]');
        this.passwordInput = Selector('input[type="password"]');
        this.greeting = Selector('span[data-test="greetings"]');
        this.name = Selector('span[data-test="name"]');
        this.loginButton = Selector('button[type="submit"]');
        this.appName = Selector('aside strong');
        this.dashboardTitle = Selector('main h1');
        this.canvas = Selector('.hypergrid');
        this.newAppButton = Selector('button[type="button"]');
        this.formulaBar = Selector('span[data-test="formulaValue"]');
        this.cellPosition = Selector('div[data-test="cellPosition"]');
        this.cellEditor = Selector('#cellEditor');
    }
}
