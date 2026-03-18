// An async function always returns a promise
async function getStayus() {
    return "order is ready";
}
const result = getStayus();
console.log("is this returned value is a promise",result instanceof Promise);

result.then(function(message){
    console.log("resolved value",message);
    
});