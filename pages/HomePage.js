
export class HomePage{

    constructor(page){
        this.page = page;
        this.myAcoountBtn = "//i[@class='fa fa-user']";
        this.loginBtn = "//a[normalize-space()='Login']";
        this.productLists="//div[@class='caption']//a";
        
    }

    async navigateToHomePage(){
        await this.page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    }

    async navigateToLoginPage(){
        await this.page.locator(this.myAcoountBtn).click();
        await this.page.locator(this.loginBtn).click();
    }

    async totalNumberOfProducts(){
        const totalNumberOfProd = (await this.page.$$(this.productLists)).length

        console.log(totalNumberOfProd);

    }

    async addAProductToCart(productName){
        const prods = await this.page.locator(this.productLists).all();
        for(const prod of prods){
            const prodName = await prod.textContent();
            if(prodName===productName){
                await prod.click();
                break;
            }
        }
    }

}