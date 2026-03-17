// throw errors 
function divide(a,b){
    if(b===0){
        throw new Error("Cannot divide a value by zero.");
        
    }
    return a/b;
}
try{
    console.log(divide(10,0));
    console.log(divide(10,2));
}
catch(err){
    console.log("caught: ",err.message,"-",err.name);
}

function checkage(age){
    if(age<18){
        throw new Error("Age must be more than 18");
        
    }
    console.log("You can vote");
    return age;
}
try{
    console.log(checkage(19));
    console.log(checkage(10));
}
catch(err1){
    console.log("caught: ",err1.message,"-",err1.name);
}

//create a custom error class 
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name="ValidationError";
    }
}
function createuser(name){
    if(!name){// if !name the ! will check if it is not available
        throw new ValidationError("Name is required");
    }
    console.log("Hi name"+name);
    return name;
}
try{
    
    createuser("Ben");
    createuser("");
}
catch(err){
    console.log("Oops Error : ",err.message);
}
