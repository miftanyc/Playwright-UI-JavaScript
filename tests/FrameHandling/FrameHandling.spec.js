import {test, expect} from'@playwright/test';

/*
3 Way a frame can be located:
    page.frameLocator('#id or .class') [For Locator like CSS or Xpath used here]
    page.frame('frame's Name Attribute value') [frame's Name Attribute used here]
    page.frame({url: /.domain./}) [frames URL used here]
*/


test('Total Number of Frame', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');
    
    await page.waitForTimeout(2000);
    const totalFrame=page.frames(); // is Frames with S: give all Frame in page as array

    //Now find how many frame are present in this page
    console.log("Total Frame in This Page:", totalFrame.length)

    await page.close();
});



test('Frame Handling 1', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const yellowFrame = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await yellowFrame.locator('input[name=mytext1]').fill("Testing in Yellow Frame");

    await page.waitForTimeout(3000);
    await page.close();

});


test('Frame Handling 2', async ({page}) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const greenFrame = page.frameLocator("frame[src='frame_2.html']");
    await greenFrame.locator('input[name=mytext2]').fill("Testing in Green Frame");

    await page.waitForTimeout(3000);
    await page.close();

});