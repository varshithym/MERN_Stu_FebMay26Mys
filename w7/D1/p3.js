// handels differnt http methods in express
const express = require("express");
const app = express();
// to read
app.get("/users",function(req,res){
    res.send("returning all users");
});

// to create
app.post("/users",function(req,res){
    // res.status give status of http before response body
    res.status(201).send("user created");
});
app.listen(4000,function(){
    console.log("Express Server is running at http://localhost:4000");
});