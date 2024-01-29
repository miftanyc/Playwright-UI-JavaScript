import {test, expect} from "@playwright/test";

test('upload a single file', async ({page}) => {

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator("input#filesToUpload").setInputFiles('./UploadFile/Description.txt');
    await page.waitForTimeout(5000);

    await expect(await page.locator("ul#fileList li")).toBeVisible();


})

test('Multi File upload', async ({page}) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    await page.locator("input#filesToUpload").setInputFiles(['./UploadFile/Description.txt', './UploadFile/Introduction.txt']);
    await page.waitForTimeout(5000);
})