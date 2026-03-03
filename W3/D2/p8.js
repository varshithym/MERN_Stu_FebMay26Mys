// Default Parameter
function product (a,b=1){
    return a*b;
}
console.log("product of 2 and 3",product(2,3));
console.log("product of 2 and ",product(2));

// Rest parameters
function sumOfAll(...numbers){
    console.log(...numbers);
}
sumOfAll(1,2,3);
sumOfAll(10);