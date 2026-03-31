// middleware chaining and error-handling middleware
const express = require("express");
const app = express();
// first middleware
app.use(function(req,res,next){
    console.log("request:",req.method,req.url);
    next();

});
app.use(function(req,res,next){
    req.requestSource = "middle-ware-chain-example";
    next();
});
app.get("/ok",function(req,res){
    res.json({
        sucess:true,
        source:req.requestSource
    });
});
app.get("/fail",function(req,res,next){
    next(new Error("route failure"));
});
// global error handler
app.use(function(error,req,res,next){
    res.status(500).json({
        sucess:false,
        message:error.message
    });
});
app.listen(4009,function(){
    console.log("express server is running in https://localhost:4009");
});