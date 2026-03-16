// introduction to node js

const runtime = "node js";
console.log(`${runtime} runs java script outside the browser.`);

const CommonUses = [
    "used for server side app",
    "automation scripts can be created"
]

console.log(CommonUses[0]);
console.log(CommonUses[1]);
CommonUses.forEach((CommonUse,index) => {
    console.log(`${index+1}.${CommonUse}`);
});