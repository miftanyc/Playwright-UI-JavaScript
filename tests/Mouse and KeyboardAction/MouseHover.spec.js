import {test, expect} from '@playwright/test';

test('Mouse Hover to an element', async ({page}) => {
    await page.goto('https://letcode.in/test');

    const courses = page.locator("//a[text()='Courses']");

    await courses.hover();

    await page.waitForTimeout(5000)

    await page.close();

});