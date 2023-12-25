export class CheckoutPage{

    constructor(page) {
        this.page = page;
        this.addedProductList = "div#checkout-cart td.text-left a";

    }

    async varifyHowManyProductAdded(){
        const addedProds = await this.page.$$(this.addedProductList);
        console.log("Total Product added: ", addedProds.length)
    }

    async varifyIfAddedProductAdded(productName){
        const addedProds = await this.page.$$(this.addedProductList);
        for (const prod of addedProds){
            const prodName = await prod.textContent();
            if(prodName===productName) {
                console.log("Added Product: ", prodName)
            }else{
                console.log("following Product not Added in cart: ", prodName)
            }
        }
    }
}