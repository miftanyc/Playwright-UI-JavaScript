import {test, expect} from '@playwright/test';

test ('Radio button Function Assertion', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Identify Gender Locator --male and --female
    const male = page.locator('#male');
    const female = page.locator('#female');

    //Identify days locator --monday, --tuesday, --wednesday  
    const monday = page.locator('#monday');
    const tuesday = page.locator('#tuesday');
    const wednesday = page.locator('#wednesday');

    //Validate Male gender
    await expect.soft(male).not.toBeChecked();
    if(! await male.isChecked()){
        await male.check();
    }
    await expect.soft(male).toBeChecked();


    //Validate Female gender
    await expect.soft(female).not.toBeChecked();
    if(! await female.isChecked()){
        await female.check();
    }
    await expect.soft(female).toBeChecked();
    await expect.soft(male).not.toBeChecked();

    //Validate Monday
    await expect.soft(monday).not.toBeChecked();
    if(! await monday.isChecked()){
        await monday.check();
    }
    await expect.soft(monday).toBeChecked();
    

    //validate Tuesday 
    await expect.soft(tuesday).not.toBeChecked(); //or
    expect.soft(await tuesday.isChecked()).toBeFalsy();

    if(! await tuesday.isChecked()){
        await tuesday.check();
    }
    await expect.soft(tuesday).toBeChecked(); //or
    expect.soft(await tuesday.isChecked()).toBeTruthy();



    await page.waitForTimeout(5000);

    await page.close();
});