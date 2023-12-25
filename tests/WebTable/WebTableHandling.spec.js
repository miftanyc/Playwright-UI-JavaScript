import {test, expect} from'@playwright/test';
import { clear } from 'console';

test('Find the Total Row and Column', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const webTable = page.locator("table[name=BookTable]");

    //Locate Row
    const rows = webTable.locator('tbody tr');

    //Locate Column
    const columns = rows.nth(1).locator('td');  //Here only td because tbody is already detected in row locator

    //Number of Row [After Head row]
    const rowNum = await rows.count()-1;
    
    //Number of Column
    const colNum = await columns.count();

    //Print Information
    console.log("Number of Row:", rowNum);
    console.log("Number of Column:", colNum);

});

test('Retrive Data From Table', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    
    const webTable = page.locator("table[name=BookTable]");

    //Locate Row
    const rows = webTable.locator('tbody tr');

    //Locate Column
    const columns = rows.nth(1).locator('td');  //Here only td because tbody is already detected in row locator

    //Number of Row [After Head row]
    const rowNum = await rows.count()-1;

    //Number of Column
    const colNum = await columns.count();

    //Print Web-table Data
    for(let r=1; r<=rowNum; r++){
        const row = rows.nth(r);
        const col = row.locator('td');
        for(let c=0; c<colNum; c++){
            console.log (await col.nth(c).textContent());
        }

    }
    
    await page.waitForTimeout(3000);
    await page.close();

});