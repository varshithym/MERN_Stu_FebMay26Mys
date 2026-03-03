// conditonalStatement

let age = 20;
if(age < 18) {
    console.log("child");
}
else if(age<18) {
    console.log("teenager");
}
else {
    console.log("Adults")
}

// switchStatements
console.log("conditional statemnts")
let day = "Sat";
switch (day) {
    case "Monday":
        console.log("Starting day of the week");
        break;
    case "Tuesday":
        console.log(" Second day of the week");
        break;
     case "Wed":
        console.log(" Third day of the week");
        break;
     case "Thu":
        console.log(" Fourth day of the week");
        break;
     case "Fri":
        console.log(" Fifth day of the week ");
        break; 
    default:
        console.log("some day of the week");
        break;
} 
// Type conversion
let n = Number("123");
let m = Number("ABC")
console.log("type of n ",typeof (n),"isNaN",isNaN(m))
console.log("n",n);