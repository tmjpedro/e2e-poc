export default class HomePage {

    constructor(page) {
        this.page = page;
    }

    async getTitle() {
        return await this.page.title();
    }

    async setUsername(user) {
        return await this.page.type('input[type="email"]', user);
    }

    async setPassword(pass) {
        return await this.page.type('input[type="password"]', pass);
    }

    async clickOnSubmit() {
        return await this.page.click('button[type="submit"]');
    }
}
