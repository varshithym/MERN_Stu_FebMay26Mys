// setImmediate vs setTimeOut
console.log("scheduleing setTimeout and setImmediate");

// callback timer
setTimeout(function(){
    console.log("call back from setTimer");
    
},0);
setImmediate(function(){
    console.log("set immediate callback executed");
    
});
console.log("both call backs are now waiting for the event loop");


