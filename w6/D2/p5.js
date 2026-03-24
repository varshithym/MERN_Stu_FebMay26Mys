// microtasks and macrotasks in nodeJS
console.log("1.synchronious start.");
// promise.resolve(...)then(...) schedule a microtask
Promise.resolve().then(function(){
    console.log("3.promise microtask executed.");
    
});
// the zero to time will delay the execution
setTimeout(() => {
    console.log("4 . timer call back executed .");
    
},0);

console.log("2.synchronius end");