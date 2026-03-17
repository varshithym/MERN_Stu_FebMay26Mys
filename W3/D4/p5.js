// reduce method
let nums = [5,10,15];
let total = nums.reduce((interMediateSum,current) => interMediateSum+current,0) / ( nums.length);
console.log(total);

// reduce to object count by category

let items = ["pen","pencil","eraser","pen","eraser"];
let count = items.reduce((a,b) => {
    a[items] = (a[items] || 0) + 1;
    return a;
},{});
console.log("item count: ",count);