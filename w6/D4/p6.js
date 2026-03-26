// sending respan in json format

const http = require("http");
const server = http.createServer(function(req,res){
    if(req.url === "/api/staus" && req.method ==="GET"){
        const responseData = {
            sucess : true,
            message : "API is working",
            server : "nodeJS http module"


        };
        res.writeHead(200,{"Content-Type":"application/json"});
        res.end(JSON.stringify(responseData));
        return;
    }
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({sucess:false,message:"Route not found."}));
});
server.listen(3006,function(){
    console.log("server is running in http://localhost:3006");   
});