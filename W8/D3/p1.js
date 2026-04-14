// validation ans schema constraints
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name : {
        type:String,
        require:true,
    },
    age : { type:Number, min:18},
    role : {type:String,
        enum: ["admin","user","manager"]

    },
    email : {
        type:String,
        match:/.+@.+\..+/
    }

});
const User = mongoose.model("HookValidationUser",userSchema);
async function runValidationDemo() {
    try{
        const invalidUser = new User({
            name:"varshith",
            age:20,
            role:"admin",
            email:"r@R.com"
        });
        await invalidUser.validate();
    }
    catch(error){
        console.log("Validation errors found");
        for(const fieldName in error.errors){
            console.log(fieldName+":"+error.errors[fieldName].message);
            
        }
        
    }
    
}
runValidationDemo();