// process.nextTick, promise microtask & timer
console.log("1.start the script");
// process.nextTick schedules a callback to run soon after
// the current synchronious code completes
process.nextTick(function(){
    console.log("two");
    
});
// promise microtask runs after nextTick in nodeJs
Promise.resolve().then(function(){
    console.log("three");
    
});

// callback timer runs later
setTimeout(() => {
    console.log("last");
});
console.log("end of script");

