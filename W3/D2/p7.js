//Arrow function
(args) => {//arguments is optional
    //body of the function
}
//Add two number
const Sum = (a,b)=>{
    return a+b;
    
}
console.log("3+5=",Sum(3,5));
console.log("sum of ",Sum(3,5));

const square = (x) => x*x;
console.log("Square of :",square(44));

const sayHello = () => console.log("Hello from arrow func");
sayHello();