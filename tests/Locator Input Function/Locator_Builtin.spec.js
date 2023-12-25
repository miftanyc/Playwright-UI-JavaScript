const {test, expect} = require("@playwright/test");

test('Builtin Locator Use', async ({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    const orangeLogo = await page.getByAltText("company-branding") //Image have alt Attribute
    await expect(orangeLogo).toBeVisible();

    await page.getByPlaceholder("Username").fill("Admin") //Placeholder Attribute Value
    await page.getByPlaceholder("Password").fill("admin123")

    await page.getByRole('button',{type: 'submit'}).click(); //Tag role Button, Input, Checkbox etc

    await expect(await page.getByText('Admin')).toBeVisible(); //getText element of selenium

    const userName = await page.locator("p.oxd-userdropdown-name").textContent();


    console.log('User name of Following Person:', userName);

    await page.close();

    //page.getByTestId('directions');       <button data-testid="directions">Itinéraire</button>
    //page.getByTitle('Issues count');      <span title='Issues count'>25 issues</span>
    //page.getByLabel('Password');          <label>Password <input type="pass" /></label>

    /*
    DOM:
        <h3>Sign up</h3>
            <label>
                <input type="checkbox" /> Subscribe
            </label>
        <br/>
        <button>Submit</button>

    Implementation:
        await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
        await page.getByRole('checkbox', { name: 'Subscribe' }).check();
        await page.getByRole('button', { name: /submit/i }).click()
    */


});

