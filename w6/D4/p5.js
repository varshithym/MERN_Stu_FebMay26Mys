//Reading the POST request body data
const http = require("http");

const server = http.createServer(function (req, res) {
    if (req.url === "/submit" && req.method === "POST") {
        let body = "";
        //req here is a readable stream
        req.on("data", function (chunk) {
            body += chunk.toString();
        });
        //'end' executes when full request body has been recived
        req.on("end", function () {
            res.writeHead(200, { "content-Type": "text/plain" });
            res.end("Recived req body data: " + body);
        });
        return;

    }
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("Route not found.");
});

server.listen(3006,function(){
    console.log("server is running in http://localhost:3006");   
});