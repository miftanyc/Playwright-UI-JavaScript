import {test, expect} from '@playwright/test'

test('Drag and Drop Function Approach 1', async ({page}) => {

    await page.goto('https://letcode.in/dropable');

    const object = page.locator("#draggable");
    const target = page.locator("#droppable");

    console.log("Approach 1");
    await object.dragTo(target);

    await page.waitForTimeout(5000);

    await page.close();

});


test('Drag and Drop Function Approach 2', async ({page}) => {
    await page.goto('https://letcode.in/dropable');

    const object = page.locator("#draggable");
    const target = page.locator("#droppable");

    console.log("Approach 2");

    await object.hover();
    await page.mouse.down();

    await target.hover();
    await page.mouse.up();

    await page.waitForTimeout(5000);

    await page.close();

});
