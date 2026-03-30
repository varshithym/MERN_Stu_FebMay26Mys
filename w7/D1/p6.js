// sending json response in express
const express = require('express');
const app = express();
app.get("/api/status",function(req,res){
    res.json({
        // res.json() automatically serializes the object and
        // sets the json content type
        success:true,
        message : "express is working"
    });
});
app.get("/api/error",function(req,res){
    res.status(404).json({
        // res.json() automatically serializes the object and
        // sets the json content type
        success:false,
        message : "request resource is not found."
    });
});
app.listen(4001,function(){
    console.log("Express Server is running at http://localhost:4001");
});