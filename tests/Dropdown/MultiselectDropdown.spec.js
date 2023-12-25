import {test, expect} from'@playwright/test';

test('Handle MultiSelect Dropdown', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');

    const colorDD = page.locator('#colors');
    //3 way we can select multiple options
    
    //await colorDD.selectOption([{label: 'Red'}, {label: 'Blue'}, {label: 'Yellow'}]);

    //await colorDD.selectOption([{value: 'red'}, {value: 'blue'}, {value: 'yellow'}]);

    //await colorDD.selectOption(['Red', 'Blue', 'Yellow']);

    const selectedColor = ['Red', 'Blue', 'Yellow']
    await colorDD.selectOption(selectedColor);
 
    await page.waitForTimeout(5000);

    //check assertion is Black color present in color list
    const allColorList = await colorDD.textContent();
    console.log(allColorList);
    expect(allColorList.includes('Black')).toBeFalsy();  //Black is not present in color list

    await page.close();

});