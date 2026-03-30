// middleware usage in express
// middleware runs during the request-response cycle
// middleware can inspect or change the request before
// a route responds
// next() passes control to the next step
const express = require("express");
const app = express();
// app.use register middleware
// this middleware runs for every incoming request
app.use(function(req,res,next){
    console.log("request received",req.method,req.url);
    next();
    // next() is required when middleware is not executed
    
});
app.get("/products",function(req,res){
        res.send("middleware executed before the route.");
    });

app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});