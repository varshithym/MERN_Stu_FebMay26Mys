// middleware for request log
function loggermiddleWare(req,res,next){
    console.log(`${req.method} ${req.originalUrl}`);
    next();
    
}
module.exports = loggermiddleWare;
// task: write the log to a file along with timestamp with both req & res