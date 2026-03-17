// array iteration
let numArray1 = [1,2,3,4];
for (let i=0;  i<numArray1.length; i++) {
    const val = numArray1[i];
}

let numArray = [1,2,3,4];
for (let i=0;  i<numArray.length; i++) {
    console.log(" ",numArray[i]);
}

for (let num of numArray){
    console.log(" ",num);
}

numArray.forEach((Val,idx) => {
    console.log("",idx,Val);
})