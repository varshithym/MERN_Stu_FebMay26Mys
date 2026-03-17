//BreakPoint  -- Can break a part of code and execute that certain point
//Inspects the variable values
//View the call stack
//Step thruough code line by line and Evaluate expressions in the console
// Can watch how variables change during the execution
//use to find logical errors

function calculateTotal(prices){
    let total=0;
    for(let i=0;i< prices.length;i++){
        let price = prices[i];
        debugger;
        total+=price;
        
    }
    return total;
}
let cart=[100,250,150,1000,220];
calculateTotal(cart);
console.log("Total",calculateTotal(cart));