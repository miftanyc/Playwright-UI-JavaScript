import  {test, expect} from "@playwright/test";

test('test.skip', async ({page, browserName}) => {
    console.log("test.skip running")
    if(browserName=='chromium'){
        test.skip();
    }
})

test('test.fixme', async ({page})=> {
    console.log("Test.fixme is written to fix the test later")
    test.fixme();
})

test('test.fail', async ({page})=> {
    test.fail(); // this is mentioned Test Should be Fail.
    expect(await page.locator('Actual').textContent()).toBe('Expected')
    /* if expected and actual mismatched the test failed and previously mentioned test.fail(), Make the test passed
    *
    * If expect [actual expected doesn't match] the test to fail then Test.fail() will pass the test
    * if expect [actual expected matched] the test to pass then Test.fail() will failed the test
    *
    * */
})

test('test.setTimeout', async ({page}) => {
    test.setTimeout(5000);
    /*
    Test need to pass within 5 seconds.
    If for some reason, the test failed to load the page or
    network issue, it will fail the test after 5 seconds
    */
})

test('Test.slow', async ({page}) => {
    test.slow();
    /*
    This will give test 3 times more time than default timeout
    By default timeout is 30 seconds. test.slow() will provide test 90 seconds to pass.
     */
})