const {test, expect} = require('@playwright/test');

test('Assertion Implementation', async ({page}) => {

    //For Hard assertions: expect(locator).tobeVisible();
    //for Soft assertions: expect.soft(locator).toBeEnabled();


    /*Implementation of 
            toHaveURL()
            toHaveTitle()
            toBeDisabled()
            toBeEnabled()

            toHaveText()        -- Complete Match with InnerText
            toContainText()     -- Partial Match with InnerText
            toHaveValue()       -- check input box typed value
            toHaveAttribute('attributename', 'attributevalue')
    */
    await page.goto('https://letcode.in/edit');

    //expect(page).toHaveURL('');
    
    //Hard Assertions
    await expect(page).toHaveURL('https://letcode.in/edit');
    
    //Soft Assertions
    await expect.soft(page).toHaveURL('https://letcode.in/edit');
    
    console.log('URL:', page.url());


    //expect(page).toHaveTitle('')
    await expect(page).toHaveTitle('Interact with Input fields');
    console.log('Title:', await page.title());



    //expect(locator).toBeDisabled();
    const disableTextBox = page.locator('#noEdit');
    await expect(disableTextBox).toBeDisabled();



    //expect(locator).toBeEnabled();
    const enableTextBox = page.locator('input#fullName');
    await expect(enableTextBox).toBeEnabled();
    
    if(enableTextBox.isEnabled) {
        await page.getByPlaceholder('Enter first & last name').fill('This is Test');
    };
    await expect(page.getByPlaceholder('Enter first & last name')).toHaveValue('This is Test');
    console.log('Value:', await page.getByPlaceholder('Enter first & last name').inputValue());


    const textBoxAttributeCheck = page.locator('input#join');
    await expect(textBoxAttributeCheck).toHaveAttribute('value', 'I am good'); //value is attribute name and I am good is value attribute value


    const loginButton = page.locator("a[href='/signin']");
    await expect(loginButton).toHaveText('Log in')      //Complete InnterText
    await expect(loginButton).toContainText('Log');     //Partial InnerText



    /*Implementation of  radio and Checkboxes
                toBeChecked()
                not.toBeChecked()
                toHaveTitle()
                toBeDisabled()
                toBeEnabled()
        */
    await page.goto('https://letcode.in/radio');

    const barCheckBox = page.getByText(' Bar ');
    await expect(barCheckBox).toBeChecked();

    const noBugCheckBox = page.locator('input#bug');
    await expect(noBugCheckBox).not.toBeChecked();

    if (!await noBugCheckBox.isChecked()) {
        await noBugCheckBox.check();
    }
    await expect(noBugCheckBox).toBeChecked();



    /*
    Learning toHaveCount()
    */ 
    await page.goto('https://letcode.in/dropdowns');
    const fruitOption = page.locator('#fruits option')
    await expect(fruitOption).toHaveCount(6);
    const numberOfFruit = await fruitOption.count()
    console.log('Total Fruit Option:', numberOfFruit)
        
    //Get The name of Each fruit
        for (let i = 0; i < numberOfFruit; i++) {
            const nameOfFruit = await fruitOption.nth(i).textContent();
            console.log('Each Fruit Name:', nameOfFruit);
        }
    

    //or use Array of Locator
    await page.goto('https://letcode.in/dropdowns');
    const fruitOptions = await page.$$('#fruits option'); //as $$ Return Array of Locator so use .length to get element number
    expect(fruitOptions.length).toBe(6); 
        //Get the fruit of each option from array of Locator
        for (const fruit of fruitOptions) {

            const nameOfFruitArray = await fruit.textContent();
            console.log('Arrya of Locator: Each Fruit Name:', nameOfFruitArray);
        }
    
    await page.close();

});