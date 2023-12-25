import {test, expect} from'@playwright/test';

test('Handle Bootstrap Dropdown', async ({page}) => {
    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
    await page.locator('button.dropdown-toggle').click();
    const options = page.locator('ul>li input[value]');
    
    await expect(options).toHaveCount(11);
    console.log('Number of Dropdown Option', await options.count());

    //Now De-Select preselected HTML And CSS
    //First Find out which of the Option already selected from title attribute
    const selectedValue = await page.locator('button.dropdown-toggle').getAttribute('title');
    const eachSelectedValue = selectedValue.split(', ');

    console.log(eachSelectedValue);
    console.log(eachSelectedValue[1]);
    
    for(let i=0; i<eachSelectedValue.length; i++){
        const selected = page.locator("ul>li input[value='" + eachSelectedValue[i] + "']");
        await selected.uncheck();
        expect(await selected.isChecked()).toBe(false);
    }
    
    await page.waitForTimeout(1500)

    //Now Select Java and Python
    const toBeSelectarr = ['Java', 'Python']
    for(let i=0; i<toBeSelectarr.length; i++){
        const toBeselected = page.locator("ul>li input[value='" + toBeSelectarr[i] + "']");
        await toBeselected.check();
        expect(await toBeselected.isChecked()).toBe(true);
    }

    await page.waitForTimeout(5000)

    //Another way of Selecting MySQL and  Oracle
    const allDDOptionpage = await page.locator("//ul/li //input/parent::label").all();
    for(let ddopt of allDDOptionpage){
        const optionName = await ddopt.textContent();
        console.log(optionName);
        if (optionName.includes('MySQL') || optionName.includes('Oracle')){
            await ddopt.check();
            expect(await ddopt.isChecked()).toBe(true);
        }
    }

    await page.waitForTimeout(5000)

    await page.close();
});