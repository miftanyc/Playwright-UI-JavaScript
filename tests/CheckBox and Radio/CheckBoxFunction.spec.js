import {test, expect} from '@playwright/test';
import { getPriority } from 'os';

test ('Check Box Function Assertion', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const days = await page.locator("//label[text()='Days:']/parent::div/child::div //input").all();
    //or you can use "input.form-check-input[type='checkbox']" for locator

    for(const day of days){
        await expect.soft(day).not.toBeChecked();
        console.log('day:', await day.getAttribute('value'));
        if(await day.getAttribute('value') === 'monday' || await day.getAttribute('value') === 'tuesday'){
            await day.check();
            await expect.soft(day).toBeChecked();
        }
    }

    await page.waitForTimeout(5000);

    await page.close();
});


test('Alternate way of checkbox Testing', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dayLocators = [
        "#monday",
        "#sunday"
    ]

    for(const dayLoc of dayLocators){
        await page.locator(dayLoc).check();
        console.log('Day:', await page.locator(dayLoc).getAttribute('value'));
    }

    for(const dayLoc of dayLocators){
        await expect.soft(page.locator(dayLoc)).toBeChecked();
        
    }
    await page.waitForTimeout(5000);

    for(const dayLoc of dayLocators){
        await page.locator(dayLoc).uncheck();
    }

    await page.waitForTimeout(5000);

    await page.close();

});