// route parameters and querry parameters
// route parameters : capture dynamic valuefrom the path
// query parameters : provide optional values
const express = require('express');
const app = express();
app.get("/product/:id",function(req,res){
    res.json({
        routeParameter : req.params.id,
        queryParameter: req.query
    });
});
app.listen(4009,function(){
    console.log("Express Server is running at http://localhost:4009");
});
