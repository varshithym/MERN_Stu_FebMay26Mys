// checks the permision for the request and allows it or rejects it
const CustomError = require("../utils/CustomError");
function roleMiddleware(...allowedRoles){
    return(req,res,next)=>{
        if(!req.user){
            return next(new CustomError("user info not found",401));
        }
        if(!allowedRoles.includes(req.user.role)){
            return next(new CustomError("Forbidden you do not have acess to this role",401));
        }
        next();
    };
}
module.exports = roleMiddleware;