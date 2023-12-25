import { test, expect } from '@playwright/test';

test('Input Boxt Handling', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Validate Name Field
    await expect.soft(page.locator('#name')).toBeVisible();
    await expect.soft(page.locator('#name')).toBeEnabled();
    await expect.soft(page.locator('#name')).toBeEmpty ();
    await expect.soft(page.locator('#name')).toBeEditable();

    await page.locator('#name').fill('Dilruba');
    await expect.soft(page.locator('#name')).toHaveValue('Dilruba');
    console.log('Name Filed Assertion Completed')


    //Validate Email Field
    await expect.soft(page.locator('#email')).toBeVisible();
    await expect.soft(page.locator('#email')).toBeEnabled();
    await expect.soft(page.locator('#email')).toBeEmpty ();
    await expect.soft(page.locator('#email')).toBeEditable();

    await page.locator('#email').fill('ding@dong.com');
    await expect.soft(page.locator('#email')).toHaveValue('ding@dong.com');
    console.log('Email Filed Assertion Completed')

    
    //Validate Phone Field
    await expect.soft(page.locator('#phone')).toBeVisible();
    await expect.soft(page.locator('#phone')).toBeEnabled();
    await expect.soft(page.locator('#phone')).toBeEmpty ();
    await expect.soft(page.locator('#phone')).toBeEditable();
   
    await page.locator('#phone').fill('0987654321');
    await expect.soft(page.locator('#phone')).toHaveValue('0987654321');
    console.log('Phone Filed Assertion Completed')


    //Validate Address Field
    await expect.soft(page.locator('#textarea')).toBeVisible();
    await expect.soft(page.locator('#textarea')).toBeEnabled();
    await expect.soft(page.locator('#textarea')).toBeEmpty ();
    await expect.soft(page.locator('#textarea')).toBeEditable();

    await page.locator('#textarea').fill('jinga lala, Maitland, VA');
    await expect.soft(page.locator('#textarea')).toHaveValue('jinga lala, Maitland, VA');
    console.log('Address Filed Assertion Completed')


    await page.close();
})
