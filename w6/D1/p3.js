// using a custom cpmmonJS module
const {calculateTax,applyDiscount,formatCurrency} = require("./p2")

const itemName = "laptop";
const basePrice = 60000;
const discountedPrice = applyDiscount(basePrice,10);
const taxAmount = calculateTax(discountedPrice);
const finalPay = discountedPrice + taxAmount;
console.log("Item :",itemName);
console.log("Base price",formatCurrency(basePrice));
console.log("discount price",formatCurrency(discountedPrice));
console.log("tax",formatCurrency(taxAmount));
console.log("final price: ",formatCurrency(finalPay));

