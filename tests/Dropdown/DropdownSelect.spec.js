import {test, expect} from'@playwright/test';

test('Dropdown with Select Tag', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Multiple ways to select an option

    await page.locator('select#country').scrollIntoViewIfNeeded();

    //Using the label
    await page.locator('select#country').selectOption({label: 'United States'}); //using the label
    await page.waitForTimeout(1500);

    //Using the value
    await page.locator('select#country').selectOption({value: 'canada'}); //using the value
    await page.waitForTimeout(1500);
    

    //Using the Visible Text
    await page.locator('select#country').selectOption('Japan'); 
    await page.waitForTimeout(1500);


    //Using the index
    await page.locator('select#country').selectOption({index: 8}); //using the index
    await page.waitForTimeout(1500);

    //using selecetOptions('locator', 'value')
    await page.selectOption('select#country', 'France');
    await page.waitForTimeout(1500);

    //Now select all the options one by one
    const countryDDoptions = page.locator('select#country option');
    await expect(countryDDoptions).toHaveCount(10)
    
    const count = await countryDDoptions.count(); //convert  countryDDoptions.count() to number to use toBeGreaterThanOrEqual and toBeLessThanOrEqual
    expect(count).toBeGreaterThanOrEqual(9);
    expect(count).toBeLessThanOrEqual(11);
    expect(count).toBe(10)
    
    console.log('Number of Dropdown Option', count);

    for (let i = 0; i < count; i++) {

        const selecteed = await page.locator('select#country').selectOption({index: i});
        await page.waitForTimeout(1000);
    }

    const countryName = await page.locator('select#country').textContent();
    console.log('Country Name:', countryName);
    expect(countryName.includes('France')).toBe(true);
    expect(countryName.includes('France')).toBeTruthy();
    expect(countryName.includes('Nepal')).toBe(false);
    expect(countryName.includes('Bangladesh')).toBeFalsy();

    
    
    //Assertion Based on Loop [in Bootstrap dropdown no select tag so use this procedure to assertion]
    const countryDD = await page.locator('select#country option').all();
    let status = false;
    for(const country of countryDD){
        let eachCountry = await country.textContent();
        if(eachCountry.includes('France')){
            status = true;
            break;
        }
    }
    expect(status).toBe(true);


    //Select option from Dropdown by Looping Statement
    //First create a function
    function isCountryAvailableInDropdown(selector, value) {
        return new Promise(async (resolve, reject) => {
            const countryDD = await page.locator(selector).all();
            let status = false;
            for(const country of countryDD){
                let eachCountry = await country.textContent();
                if(eachCountry.includes(value)){
                    status = true;
                    break;
                }
            }
            resolve(status);
        });
    }

    expect(await isCountryAvailableInDropdown('select#country option', 'India')).toBe(true);
    expect(await isCountryAvailableInDropdown('select#country option', 'Bangladesh')).toBe(false);

    await page.close();
});