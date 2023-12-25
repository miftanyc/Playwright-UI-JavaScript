
//npx playwright codegen -o tests/MyTestName.spec.js --browser chromium www.google.com

import { test, expect } from '@playwright/test';

test('Codegen Test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('nil1@jil.mil');
  await page.locator('#loginpassword').fill('123456');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome');

});