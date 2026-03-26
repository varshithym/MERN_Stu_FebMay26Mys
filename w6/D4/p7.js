// parsing query parameters
const http = require("http");
const {URL} = require("url");
const server = http.createServer(function(req,res){
    const fullURl = new URL(req.url,"https://localhost:3007");
    if(req.method == "GET" && fullURl.pathname ==="/search"){
        const term = fullURl.searchParams.get("term");
        const page = fullURl.searchParams.get("page");
        res.writeHead(200,{"Content-Type0":"application/json"});
        res.end(JSON.stringify({
            route:"/search",
            term:term,
            page:page
        }))
        return;
    }
    res.writeHead(404,{"Content-Type":"application/json"});
    res.end(JSON.stringify({sucess:false,message:"Route not found."}));
});
server.listen(3007,function(){
    console.log("server is running in http://localhost:3007");   
});