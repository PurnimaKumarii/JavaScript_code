//Create a prototype for object with properties like name,price,quantity.Add  a method to the product prototype to calculate the total value
function Product(name,price,quantity){
    this.name =name;
    this.price=price;
    this.quantity=quantity;

}
Product.prototype.calculateTotalvalue =function(){
    return this.price * this.quantity

}
const product1= new Product("Widget",10,5);
const totalValue1 = product1.calculateTotalvalue();

console.log(`Total value of ${product1.name} :$ $(totalValue1}`);

console.log(Product.prototype);
console.log(product1);

