const {test, expect} = require('@playwright/test');

test('Locate Multiple Product', async ({ page }) => {
    
    await page.goto("https://demoblaze.com/");
    
    await page.waitForSelector("div#tbodyid  div h4 a");

    const product = await page.$$("div#tbodyid  div h4 a");
    

    for (const prod of product){
        const productName = await prod.textContent();
        console.log(productName);

    }

   await page.close();

});