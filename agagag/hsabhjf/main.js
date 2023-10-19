class Product {
    #privateField;
    #privateFieldWithInitializer = 42;
    constructor(name, year, costPrice = 0, salePrice = 0, isDiscounted = false, discountedPercentage = 0) {
        this.name = name;
        this.year = year;
        this.costPrice = costPrice;
        this.salePrice = salePrice;
        this.isDiscounted = isDiscounted;
        this.discountedPercentage = discountedPercentage;
    }
    getProfit() {
        let a = this.salePrice - this.costPrice
        return a;
    }
    #privateMethod() {
        // …
    }

}
const product1 = new Product("Pc", 2002, 100, 20);
console.log(product1)
console.log(product1.getProfit())