import {test, expect} from '@playwright/test';

test('Locators', async ({page}) => {

    //Execute the login
    await page.goto("https://demoblaze.com/");
    await page.locator("id=login2").click();   
    await page.locator("id=loginusername").fill('nil1@jil.mil');
    await page.locator("id=loginpassword").fill('123456');
    await page.click("'Log in'");

    //Validate the login
    await expect(await page.locator("'id=logout2'")).toBeVisible;

    await page.close;
});
