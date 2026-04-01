// generating token using login form
const jwt = require("jsonwebtoken");
const secretkey = "varshith290";
const secretkey1 = "varshith2909";

function logINUSer(email,password){
    if(email === "v@gmail.com" && password ==="v290"){
        const token = jwt.sign({
            userID:101,
            email:email,
            role:"student"
        },secretkey,{expiresIn:"1h"});
        return{
            sucess:true,
            token:token
        };
    }
    return{
            sucess:false,
            message:"Invalid credentials"
        };
}
const loginResult = logINUSer("v@gmail.com","v290");
console.log("login result",loginResult)

if(loginResult.sucess){
    try{
        const VewrifyPayload = jwt.verify(loginResult.token,secretkey1);
        console.log("verified payload",VewrifyPayload);
    
    }
    catch(error){
        console.log("verification failed",error.message);
    }
}