import {test, expect} from "@playwright/test";
import {clearTimeout} from "node:timers";


test('This will handle One Popup Window', async ({page}) => {

    await page.goto("https://letcode.in/windows");
    await expect(page).toHaveTitle('Window handling - LetCode')
    console.log(await page.title());
    await page.waitForTimeout(5000);




    await page.locator("//button[@id='home']").click();
    const newPage = await page.waitForEvent('popup');
    console.log(await newPage.title());
    await expect( newPage).toHaveTitle('LetCode - Testing Hub')
    await page.waitForTimeout(5000);

});

test('This Will Handle Multiple Popup Window', async ({page}) => {
    await page.goto("https://letcode.in/windows");
    await expect(page).toHaveTitle('Window handling - LetCode')
    console.log(await page.title());
    await page.waitForTimeout(5000);

    await page.locator("//button[@id='multi']").click();

    const newPages = [];

    while(true){
        try{
            const newPage = await page.waitForEvent('popup', {timeout: 2000});
            newPages.push(newPage); //Add newPage to NewPages Array

        }catch (error){
            break; //No more popups, exit the loop
        }
    }

    for(const newPage of newPages){
        console.log(await newPage.title());
        await newPage.waitForTimeout(1000);
        await newPage.close();
    }

    await page.close();
})




 test('This will Handle Multiple Popup window Using setTimeout Inteval', async ({page}) => {

     await page.goto("https://letcode.in/windows");
     await expect(page).toHaveTitle('Window handling - LetCode')
     console.log(await page.title());
     await page.waitForTimeout(5000);

     await page.locator("//button[@id='multi']").click();

     const newPages = [];

    const timeout = setTimeout(() => {
         console.log('Timeout reached. Exiting loop.');
     }, 30000); // Adjust the timeout as needed


     while(true){
         try{
             const newPage = await page.waitForEvent('popup', {timeout: 2000});
             newPages.push(newPage); //Add newPage to NewPages Array

         }catch (error){
             break; //No more popups, exit the loop
         }
     }

     // Clear the timeout to avoid interference after the loop
     clearTimeout(timeout);

     for(const newPage of newPages){
         console.log(await newPage.title());
         await newPage.waitForTimeout(1000);
         await newPage.close();
     }

     await page.close();
 });