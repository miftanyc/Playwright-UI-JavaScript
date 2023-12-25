import { test, expect } from '@playwright/test';


//Create a Reuseable Function for Checking a Product
async function CheckingProduct(rowsLocator, page, ProductName) {
    //Find the Row of Target Product
    const matchedRow = rowsLocator.filter({
        has: page.locator('td'),
        hasText: ProductName
    })
    //Now Click the Checkbox for Target Product
    await matchedRow.locator('td input').check();
} 



test.skip('Clicking on a Product Checkbox', async ({page}) => {
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');

    //Find the row locator
    const rows = table.locator('tbody tr');
    const rowNum = await rows.count();

    //Find the Column Locator
    const columns = rows.nth(1).locator('td');
    const colNum = await columns.count();

    // //Find the Row of Target Product
    // const matchedRow = rows.filter({
    //     has: page.locator('td'),
    //     hasText: 'Product 4'
    // })
    // //Now Click the Checkbox for Target Product
    // await matchedRow.locator('td input').check();


    //Checking Product 2, Product 4, Product 5
    await CheckingProduct(rows, page, 'Product 2');
    await CheckingProduct(rows, page, 'Product 4');
    await CheckingProduct(rows, page, 'Product 5');


    await page.waitForTimeout(3000);
    await page.close();
    
})



test('Retrive Table Data From All Pages of Pagination', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    const table = page.locator('#productTable');
    
    //Get the Number of Rows and columns in each page of table



    const tablePages = page.locator('#pagination li a');
    let pageCount = await tablePages.count();
    console.log('Number of table pages available: ', pageCount);

    //Retrive the Data from All Pages of Pagination Table


    for(let p=0; p<pageCount; p++) {
        
        //Get the Number of Rows and columns in each page of table
        const rows = table.locator('tbody tr');
        const cols = rows.nth(0).locator('td');
        let rowsNum = await rows.count();
        console.log('Number of Rows in Page: ', rowsNum);
        let colsNum = await cols.count();
        console.log('Number of Columns in Page: ', colsNum);


        if(p>0) {
            await tablePages.nth(p).click();
        }

        for(let r=0; r<rowsNum; r++){
            //select the row
            const row = rows.nth(r);
            const colsOfThatRow = row.locator('td');

            for(let c=0; c<colsNum-1; c++){  //-1 is for not to Read the last column which has no-text but checkbox
                const eachCol = colsOfThatRow.nth(c);
                console.log(await eachCol.textContent());

            }
    
        }

        await page.waitForTimeout(2000) // For Observation purposes only

    }

    await page.waitForTimeout(3000);

    await page.close();
    
});
