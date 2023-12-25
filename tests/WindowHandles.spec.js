import {test, expect} from "@playwright/test";

test("This Test will handle Multiple Window created from same Context", async ({browser}) => {

    const ctx = await browser.newContext();
    const page1 = await ctx.newPage();
    const page2 = await ctx.newPage();

    await page1.goto("https://letcode.in/");
    await expect(page1).toHaveTitle('LetCode with Koushik')
    await page2.goto("https://testautomationpractice.blogspot.com/");
    await expect (page2).toHaveTitle('Automation Testing Practice')

    const pages = await ctx.pages();
    await console.log("number of page opened:", pages.length)

});


test.only('This Test will open page from same context and handle it', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page).toHaveTitle('Automation Testing Practice');

    const newTabClicButton = page.lcoator("//button[@onclick='myFunction()']");

    const homeTab = await Promise.all([
        page.waitForEvent('popup'),
        newTabClicButton.click()

    ]);

    await homeTab.l

});

