//const {test, expect} = require('@playwright/test');
import {test, expect} from '@playwright/test';

test('Locators', async ({page}) => {

    await page.goto("https://demoblaze.com/")

    await page.click('a#signin2');   
   await page.fill('input#sign-username', 'nil1@jil.mil');
   await page.fill('input#sign-password', '123456');
   await page.click("//button[text()='Sign up']");

   await page.close;

})