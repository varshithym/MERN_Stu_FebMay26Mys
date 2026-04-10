// querying using conditional operators
const mongoose = require("mongoose");
async function runFilterDemo() {
    try{
        await mongoose.connect("mongodb://localhost:27017/MernTraining");
    //to connect with db
     console.log("MongoDB connected successfully");
     const productsSchema = new mongoose.Schema({
        name:String,
        price:Number,
        catagory:String,
        status:String
     });
     const product = mongoose.models.product || mongoose.model("product",productsSchema);
     const firstProduct = await product.create([{
        name:"soap",
        price:50,
        catagory:"stationary",
        status:true

     },
    {
        name:"paste",
        price:25,
        catagory:"stationary",
        status:false

     },
    {
        name:"scruber",
        price:500,
        catagory:"stationary",
        status:true

     },
    ]);
    const equalQuery = await product.find({status:{$eq:true}});
    console.log("products which are active",equalQuery);
    const above45 = await product.find({price:{$gt:45}});
    console.log(above45);
    const below45 = await product.find({price:{$lt:45}});
    console.log(below45);
    const NP = await product.find({name:{$ne:"scruber"}});
    console.log(NP);
    
    
    await mongoose.connection.close();
    console.log("connection closed");
    }
     catch(error){
         console.log("Crud demo error :",error.message);
    }
    
    
}
runFilterDemo();