// Immediate Invoked nFunction Expression 
// with out parameters
(function() {
    console.log("Basics IIFE executed Immediately");
})();
// with parameters
(function(appName,version) {
    console.log("app",appName,"version",version);
})("NodeJs","v22.22.03");

// with return value
const result = function() {
    const a = 10,b=20;
    return a+b
}();
console.log("sum is:",result)