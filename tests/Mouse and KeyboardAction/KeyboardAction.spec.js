import {test, expect} from '@playwright/test';

test('Keybaord Action', async ({page}) => {

    await page.goto('https://gotranscript.com/text-compare');

    await page.fill("textarea[placeholder='Paste one version of the text here.']","This is a Test script to text the copy paste function");

    /*Not to Copy the text from one text box to another following Function need to be done

        ctr+A; To select all text
        ctr+C; To Copy
        tab;   To move to next text box
        ctr+V; to paste

    */
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    
    await expect(page.locator("//textarea[@placeholder='Paste another version of the text here.']")).toHaveValue("This is a Test script to text the copy paste function");
    
    await page.waitForTimeout(5000);
    await page.close();

   
});
