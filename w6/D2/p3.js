// event loop with multiple asynchronious task
console.log("main script started");

setTimeout(() => {
    console.log("timer a finished after 100ms")
}, 100);

setTimeout(() => {
    console.log("timer b finished after 200ms")
}, 200);

setTimeout(() => {
    console.log("timer c finished after 0ms")
}, 0);
console.log("main script ended");
