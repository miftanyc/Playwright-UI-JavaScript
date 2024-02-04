export class AccountPage {

    constructor(page) {
        this.page = page;
        this.logoutBtn = "//a[@class='list-group-item'][normalize-space()='Logout']";
        this.retrunHomePageBtn="//a[normalize-space()='Qafox.com']";
    }

    async accountPageLandingConfirmation(){
    
        return await this.page.locator(this.logoutBtn);
    
    }

    async navigateBacktoHomePage() {

        await this.page.locator(this.retrunHomePageBtn).click();

    }
}