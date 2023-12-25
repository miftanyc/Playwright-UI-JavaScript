import {test, expect} from'@playwright/test';

test('Inner Frame Handling', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');
    const blueFrame = page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'});
    
    //Lets find the number of inner Frame inside this Blue Frame
    const childFrames = blueFrame.childFrames();
    console.log('Total iframe inside the Frame', childFrames.length);

    const iAmHubonRadioButton = childFrames[0].locator("div#i8");
    await iAmHubonRadioButton.click();
    await expect(iAmHubonRadioButton).toBeChecked()

    await page.waitForTimeout(3000);

    await page.close();
   
});
