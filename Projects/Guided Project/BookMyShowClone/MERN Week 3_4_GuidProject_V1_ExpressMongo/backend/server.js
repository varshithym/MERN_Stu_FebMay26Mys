// load Environment variables
require("dotenv").config();
const app = require("./app");
const connectDB = require("./src/config/db");
// connectDB
connectDB();
// port config
const port = process.env.port || 5000;

app.listen(port ,()=>{
    console.log(`sever is running at ${port}`);
    
});