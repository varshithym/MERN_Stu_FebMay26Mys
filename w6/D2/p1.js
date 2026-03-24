// understanding of event loop
console.log("1. Synchronious task started");
// set timeout shedules callback for later
setTimeout(() => {
    console.log("3.Timer callback executed");
},0);
console.log("2.synchronous task finished.");