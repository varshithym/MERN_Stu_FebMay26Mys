// basics of expreesJS - setup
// npm init -y
// npm install express

const express = require("express");
// calling express() creates main application object
// this is used to register routes and middleware
const app = express();
// app.get() handles GET request for a specific path
app.get("/",function(req,res){
    // res.send() sends a response body ends the request automatically
    res.send("hello from express server");
});
// listen() starts the sever in chosen port number
app.listen(4009,function(){
    console.log("Express Server is running at http://localhost:4009");
});
