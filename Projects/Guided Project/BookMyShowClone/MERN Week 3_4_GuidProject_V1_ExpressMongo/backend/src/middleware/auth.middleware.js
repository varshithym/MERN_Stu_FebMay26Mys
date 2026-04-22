const jwt = require("jsonwebtoken");
const user = require("../models/User");

// Auth Middleware
exports.protect = async(req,res,next)=>{
    try{
        let token;
        if(
            req.headers.authorization && req.headers.authorization.startsWith("Bearer")

        ){
            token = req.authorization.split(" ")[1];
        }
        if(!token){
            return res.ststus(401).json({
                success:false,
                message:"not authorized token missing"
            })
        }
        // verkify token
        const decoded = jwt.verify(token,process.env.JWT_SECRET);

        // Get user from DB
        const user = await User.findById(decoded.id);
        if(!user){
            return res.ststus(404).json({
                success:false,
                message:"user not found"
            });
        }
        // Attach user to request
        req.user = user;
        next();
    }
    catch(error){
         return res.ststus(401).json({
                success:false,
                message:"expired token"
            });
    }
};