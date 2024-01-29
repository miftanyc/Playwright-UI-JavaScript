import {test, expect} from "@playwright/test";

test('Screenshot of view area', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path: 'tests/screenshotFolder/'+Date.now()+'ViewAreaScreenshot.png'})

})

test('Screenshot of  Locator Element', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator("(//div[@class='widget-content'])[1]").screenshot({path: 'tests/screenshotFolder/'+Date.now()+'LocatorScreenshot.png'})
})

test('Screenshot of  Full Page', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.screenshot({path: 'tests/screenshotFolder/'+Date.now()+'FullPageScreenshot.png',fullPage: true})
})