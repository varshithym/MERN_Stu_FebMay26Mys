const express = require("express");
const Router = express.Router();


const {protect} =require("../middleware/auth.middleware");
// user booking route
Router.post("/",protect,(req,res)=>{
    res.send("create booking");
});