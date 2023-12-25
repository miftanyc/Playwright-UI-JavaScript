import {test, expect} from '@playwright/test'


test('Providing Date in Calender Input', async ({page}) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const dateInput = page.locator('input#datepicker');
  const provideDate = '03/14/2024';
  await dateInput.focus();
  dateInput.fill(provideDate);

  await expect(dateInput).toHaveValue(provideDate)

  await page.waitForTimeout(5000);

  await page.close();

})


test('Selecting a Date From Calander with Clicking Button', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const dateInput = page.locator('input#datepicker');
    await dateInput.scrollIntoViewIfNeeded();

    const desireDate = '13'
    const desireMonth = 'November';
    const desireMonthNumber = 11;
    const desireYear = '2024';

    await dateInput.click();

    

    while(true) {

        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();

        if(currentMonth===desireMonth && currentYear===desireYear) {

            console.log('Desire Month and Year Matched');
            break;
        }

        await page.locator('span.ui-icon-circle-triangle-e').click();
    }

    //Now Click the Desire Date

    const dates = await page.locator('a.ui-state-default').all();

    for( const date of dates) {
        const dateValue = await date.textContent();
        if(dateValue===desireDate){
            await date.click();
            break;
        }
    }

    await expect(dateInput).toHaveValue(`${desireMonthNumber}/${desireDate}/${desireYear}`);

    await page.waitForTimeout(4000);

    page.close();

});




test('Select Date Using Desired Date Xpath', async ({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const dateInput = page.locator('input#datepicker');
    await dateInput.scrollIntoViewIfNeeded();

    const desireDate = '13'
    const desireMonth = 'November';
    const desireMonthNumber = 11;
    const desireYear = '2024';

    await dateInput.click();


    while(true) {

        const currentMonth = await page.locator('.ui-datepicker-month').textContent();
        const currentYear = await page.locator('.ui-datepicker-year').textContent();

        if(currentMonth===desireMonth && currentYear===desireYear) {

            console.log('Desire Month and Year Matched');
            break;
        }

        await page.locator('span.ui-icon-circle-triangle-e').click();
    }

    //Now Click the Desire Date By Xpath of that date

    const desireDateXpath = `//a[@class='ui-state-default'][text()='${desireDate}']`;
    await page.locator(desireDateXpath).click();


    await expect(dateInput).toHaveValue(`${desireMonthNumber}/${desireDate}/${desireYear}`);

    await page.waitForTimeout(4000);

    page.close();
});
