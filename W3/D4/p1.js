// basic array concept
console.log("Array basics");

let emptyArray = [];
let numArray = [1,2,3,4,5,6];
let mixedArray = [42,"hello",true,null,{name:'gola'},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

// using constructor

let fruits = new Array("apple,mango");
console.log(fruits) ;
console.log(Array.isArray(fruits));

//push

fruits.push("guva");
console.log(fruits);

//pop
fruits.pop();
console.log(fruits);

// unshift adds to begining
fruits.unshift("butterFruit");
console.log(fruits);

// shift to remove from begining
fruits.shift();
console.log(fruits);
