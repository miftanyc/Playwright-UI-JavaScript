import {test, expect} from '@playwright/test'

test('Mouse Double Click', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/')

    const dobuleClickLoc = page.locator("//button[text()='Copy Text']");

    await dobuleClickLoc.dblclick();

    const confirmationTextLoc = page.locator('input#field2');

    await expect(confirmationTextLoc).toHaveValue('Hello World!');

    await page.waitForTimeout(5000);

    await page.close();


});