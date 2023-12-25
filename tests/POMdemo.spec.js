import {test, expect } from "@playwright/test";

import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import {AccountPage} from '../pages/AccountPage';
import {CheckoutPage} from "../pages/CheckoutPage";
import {ProductPage} from "../pages/ProductPage";


test('Demonstration of POM Intregration', async ({page}) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const accountPage = new AccountPage(page);
    const checkoutPage = new CheckoutPage(page);
    const productPage = new ProductPage(page);

    await homePage.navigateToHomePage();
    await homePage.navigateToLoginPage();
    await loginPage.provideLoginCredentials("miftanyc+qa@gmail.com", "123456");

    //Confirm Account is logged in by confirming presence of Logout button
    expect(await accountPage.accountPageLandingConfirmation()).toBeTruthy();

    await accountPage.navigateBacktoHomePage();
    await homePage.addAProductToCart("MacBook")
    await productPage.addTocartOperation()
    await productPage.showCartProduct()
    await productPage.viewCartFunction()
    await checkoutPage.varifyHowManyProductAdded()
    await checkoutPage.varifyIfAddedProductAdded("MacBook")



    await page.waitForTimeout(5000);

    await page.close();
    
})