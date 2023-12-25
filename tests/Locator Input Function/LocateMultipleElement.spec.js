const {test, expected} = require('@playwright/test');

test('Active Link', async ({ page }) => {
    await page.goto("https://demoblaze.com/");
    page.waitForSelector("//a")
    const links = await page.$$('//a');
    for (const link of links) {
        const linkText = await link.textContent();
        console.log(linkText);
    }
    await page.close();
});
