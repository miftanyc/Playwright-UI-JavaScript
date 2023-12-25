
export class ProductPage{

    constructor(page) {

        this.page = page;
        this.addToCart = "button#button-cart";
        this.cartOpen = "button.btn-lg.dropdown-toggle";
        this.viewCart = "//strong[text()='View Cart']";

    }

    async addTocartOperation(){
        await this.page.locator(this.addToCart).click();
    }

    async showCartProduct(){
        await this.page.locator(this.cartOpen).click();
    }

    async viewCartFunction(){
        await this.page.locator(this.viewCart).click()
    }
}