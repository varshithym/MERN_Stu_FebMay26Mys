// for loop
console.log("for loop examples");
let n = 10;
let i;
for(i=0; i<n; i++) {      // forward loop
    console.log("i",i);

}
for(let i = 5; i>0; i--) {      // backward loop
    console.log("i",i);

}

for(let i=1; i<=3; i++){
    for(let j=1; j<=2; j++){
        console.log(`i=${i},j=${j}`);

    }
}