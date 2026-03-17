// try catch basics

const err1 = document.getElementById("error1");
try{
    console.log("Trying to access undefined variable");
    console.log(notDefined);
}
catch(err){
    console.log("Error caught",err.name,"-",err.message);
    err1.innerHTML = "Trying to access undefined variable";
}
console.log("Program execution continues");


// JSON parsing error
    let Jsontext ="{json}";
     try{
        let data = JSON.parse(Jsontext);
        console.log(data);
     }
     catch(err){
        console.log(":JSON parse eeror:",err.message);
     }
try{
      let num=10;
      num();
        
     }
     catch(err){
        console.log("Caught Error : ",err.message,"-",err.name);
     }     


