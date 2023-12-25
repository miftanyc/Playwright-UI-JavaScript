import {test, expect} from '@playwright/test';

test('Testing Simple Alert', async ({page}) => {

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();
    });

    await page.goto('https://testautomationpractice.blogspot.com/');

    const alertTrigger = page.locator("//button[text()='Alert']");
    await alertTrigger.click();

    await page.close();
});



test('Testing Confirm Alert', async ({page}) => {

    page.on('dialog', async (dialog) => {
        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        dialog.accept();
        //dialog.dismiss();
    })

    await page.goto('https://testautomationpractice.blogspot.com/');
    const confirmAlertTrigger = page.locator("//button[text()='Confirm Box']");
    await confirmAlertTrigger.click();
    const confirmationOfClick = page.locator("p#demo");
    expect(await confirmationOfClick.textContent()).toContain("You pressed OK!");
    await expect(confirmationOfClick).toHaveText("You pressed OK!");

});



test('Testing Pormpt Alert', async ({page}) => {
    page.on('dialog', async (dialog) => {
        dialog.type();
        dialog.message();
        dialog.defaultValue();

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');
        const nameProvided = "Layla Majnu";
        await dialog.accept(nameProvided);
        //await dialog.dismiss();
    })

    await page.goto("https://testautomationpractice.blogspot.com/");
    const promptAlertTrigger = page.locator("//button[text()='Prompt']");
    await promptAlertTrigger.click();
    const confirmationOfClick = page.locator("p#demo");
    await expect(confirmationOfClick).toHaveText("Hello Layla Majnu! How are you today?");

});







