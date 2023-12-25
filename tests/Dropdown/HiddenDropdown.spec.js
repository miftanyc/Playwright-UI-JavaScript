import {test, expect} from '@playwright/test';

test('Hidden Dropdown Element Handling', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: ' Login '}).click();

    await page.getByText('PIM').click();
    await page.waitForTimeout(5000);

    await page.locator("(//div[@class='oxd-select-text-input'])[3]").click();

    await page.waitForSelector("div[role='option'] span");
    const options = await page.locator("div[role='option'] span").all()

    for(const opt of options) {
        console.log(await opt.textContent());
        
    }

    for(const opt of options) {
        const optionName = await opt.textContent();
       if(optionName.includes("Sales Representative")){
        await opt.click();
        break;
       }
    }

    await page.waitForTimeout(5000);

    await page.close();

});