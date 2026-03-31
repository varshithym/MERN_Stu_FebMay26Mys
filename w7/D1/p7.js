// Built in middleware
const express = require('express');
const app = express();
app.use(express.json());
// express.urlencoded() parses form-style data
// extended:false is a beginer friendly config
app.use(express.urlencoded({extended:false}));
app.post("/api/users",function(req,res){
    res.status(201).json({
        sucess:true,
        parseBody:req.body
    });
});
app.post("/form",function(req,res){
    res.status(201).json({
        sucess:true,
        formData:req.body
    });
});
app.listen(4009,function(){
    console.log("Express Server is running at http://localhost:4009");
});

