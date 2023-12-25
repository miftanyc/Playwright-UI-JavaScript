import {test, expect} from '@playwright/test'

test('Right click of Mouse Simulation', async ({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    const rightClickButtonLoc = page.locator('span.context-menu-one');

    await rightClickButtonLoc.click({ button: "right" });

    await page.waitForTimeout(5000);

    await page.close();

});