let a = 10;
let b = 0;
try {
   if(b == 0){
      throw new Error("error occured");
   }
   let result = a/b;
   console.log(result);
}

catch (err){
   console.log("the error is" + err.message + "the message is"+err.name);
}
finally {
   console.log("i will execut any how");
   
}