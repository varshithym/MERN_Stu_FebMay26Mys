//  defineing schema and modules
const mongoose = require("mongoose");
async function main(){
    try{
        await mongoose.connect("mongodb://localhost:27017/abcmern");
        console.log("MongoDB connected successfully")

        const userSchema = new mongoose.Schema({
            name:String,
            age:Number,
            role:String
        });

        const User = mongoose.model("User",userSchema);
        console.log("mongoose schema & model created sucessfully");
        console.log("Model Name",User.modelName);
        await mongoose.connection.close();
        console.log("connection closed");
        
                
    }
    catch(err){
        console.log("Failed to connect to DB",console.error.message
        );
        
    }
}
main();