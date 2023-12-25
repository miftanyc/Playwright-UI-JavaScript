const{test, expect} = require('@playwright/test');
//test Package to conduct testing
//expect Package to assert expected results for validations

test('Register User', async ({page}) => {
   await page.goto('https://demoblaze.com/'); 
   const pageTitle = await page.title();
   await console.log('pageTitle :>> ', pageTitle);
   await expect(page).toHaveTitle('STORE')
   await expect(pageTitle).toBe('STORE');
   const currentUrl = await page.url();
   await expect(currentUrl).toBe('https://demoblaze.com/');
//    await page.click('a#signin2');   
//    await page.fill('input#sign-username', 'nil1@jil.mil');
//    await page.fill('input#sign-password', '123456');
//    await page.click("//button[text()='Sign up']");

   await page.close();
})
