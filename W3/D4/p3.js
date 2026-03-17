//array map
let array = [2,4,5,6];
let square = array.map (array => array[i]*array);
console.log(square)

// activity
let prices = [10,20,30];
let priceAftertax = prices.map(value => value + value*0.18);
console.log(prices);
console.log(priceAftertax);

// using map how to extract values

let users =  [
    {name:"varshith", age: 24},
    {name : "krishna", age: 28}
];

let names = users.map (person => person.name
);
console.log("",names);



