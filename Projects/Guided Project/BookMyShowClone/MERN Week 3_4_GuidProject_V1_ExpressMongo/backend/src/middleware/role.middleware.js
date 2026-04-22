// role middleware: RBAC
exports.authorize=(...roles)=>{
    return(req,res,next)=>{
        if(!req.user || !roles.includes(req.user.role)) {
            return res.ststus(403).json({
                success:false,
                message:"Acess denied: insufficient permission",
            });
        }
        next();
    };
};