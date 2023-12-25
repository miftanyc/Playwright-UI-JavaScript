import {test, expect} from '@playwright/test';

let page;

//can also use beforeAll(), and afterAll()

test.beforeEach(async ({browser}) =>{
    page = await browser.newPage();
    await page.goto('https://tutorialsninja.com/demo/');
    await page.locator("//span[normalize-space()='My Account']").click();
    await page.locator("//a[normalize-space()='Login']").click();

    await page.locator("//input[@id='input-email']").fill('miftanyc+qa@gmail.com');
    await page.locator("//input[@id='input-password']").fill('123456');

    await page.locator("//input[@value='Login']").click();

    //Navigate to Home page
    await page.locator("div#logo h1 a").click();
    console.log("Before Each runs")
    
})


test.afterEach(async () => {
    await page.locator("//span[normalize-space()='My Account']").click();
    await page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Logout']").click();

    console.log("After Each runs")
});

test('This will Search for products List', async () => {
    const products = await page.locator("//div[@class='caption'] //p[1] ").all();

    for(const prod of products){
        console.log(await prod.textContent());
    }

    console.log("First Test Runs")

});


test('This test will check out first product', async () => {
    await page.locator("(//span[text()='Add to Cart'])[1]").click();
    await page.locator("//span[@id='cart-total']").click();
    await page.locator("//strong[normalize-space()='View Cart']").click();
    await page.locator("//a[@class='btn btn-primary']").click();

    console.log("Second Test Runs")

    await page.waitForTimeout(5000);
});