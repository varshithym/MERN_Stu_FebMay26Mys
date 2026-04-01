// custom error handlers
const express = require("express");
const app = express();

// custom error class
class AppError extends Error{
    constructor(message,statuscode){
        super(message);
        this.statuscode = statuscode;
    }

}
app.get("/products",function(req,res,next){
    next(new AppError("product not found"),404);
});
app.get("/search",function(req,res,next){
    if(!req.querry.q){
        return next(new AppError("search querry is required"),400)
    }
    res.json({
        sucess:true,
        query:req.querry.q
    });
});
app.use(function(error,req,res,next){
    res.status(error.statuscode|| 500).json({ success: false,message:error.message, statuscode: error.statuscode || 500});
});

app.listen(4000, function(){
    console.log("Express Server is running on  http://localhost:4000");
});