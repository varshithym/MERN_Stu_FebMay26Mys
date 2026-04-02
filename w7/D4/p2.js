// setting and reading cookies
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
// cookie parser reads the cookie request header
// and place the parsed value intoi req.cookies
app.use(cookieParser());
app.get("/set-language",function(req,res){
    res.cookie("language","english",{
        maxAge:60*60*1000
    });
    res.send("Laqnguage cookie set to 'english'");
});
app.get("/read-language",function(req,res){
    const language = req.cookies.language;

    res.json({
        message:"cookie read from request.",
        language: language || "No language cookie found"
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
