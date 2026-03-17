// Logging 
console.log("Log Message");
console.warn("warning message");
console.error("Error Message");

let users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Amith" }
];


console.log(users);

//Group related logs
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

// measure execution
console.time("LoopTimer")
for(let i=0;i<1000;i++){}
console.timeEnd("LoopTimer");