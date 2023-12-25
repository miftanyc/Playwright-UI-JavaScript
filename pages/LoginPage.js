import {test, expect } from "@playwright/test";

export class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernameField = "//input[@id='input-email']";
        this.passwordField = "//input[@id='input-password']";
        this.loginBtn = "//input[@value='Login']";
    }


    async provideLoginCredentials(username, passwrod){
        await this.page.locator(this.usernameField).fill(username);
        await this.page.locator(this.passwordField).fill(passwrod)
        await this.page.locator(this.loginBtn).click();
    }

}