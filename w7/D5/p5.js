// Assigning roles to users and restricting access

const express= require("express");
const app = express();

app.use(function(req,res,next){
    req.user = {
        id:101,
        username:"varshith",
        role:"admin"
    };
    next();
});
function requireRole(role){
    return function(req,res,next){
        if(!req.user){
            return res.status(401).json({
                success:false,
                message:"authenticate request"
            });
        }
        if(req.user.role!==role){
            return res.status(403).json({
                sucess:false,
                message:"insufficent message"
            })
        }
        next();
    }
}
app.get("/profile",function(req,res){
    res.json({
        success:true,
        message:"profile page",
        user:req.user
    });
});
app.get("/admin",requireRole("admin"),function(req,res){
    res.json({
        success:true,
        message:"profile page",
        user:req.user
    });
});
app.listen(4000, function () {
    console.log("Session server running @ http://localhost:4000");
});