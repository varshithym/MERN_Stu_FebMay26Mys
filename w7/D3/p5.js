// JWT fundamentals token generation and tokens
const jwt = require("jsonwebtoken");

const secretKey = "Varshith290";

const payLoad = {
    userid:101,
    role:"member"
};
// jwt.sign():creates signed JWT token
const token = jwt.sign(payLoad,secretKey,{expiresIn:"1h"});
console.log("token generated sucessfully\n",token);
const tokenParts = token.split(".")
console.log("header section :",tokenParts[0]);
console.log("payload section :",tokenParts[1]);
console.log("signature :",tokenParts[2]);
console.log("JWT part count:",tokenParts.length);
// const newSecretKey = "Varshith1980";

try{
    const VewrifyPayload = jwt.verify(token,secretKey);
    console.log("verified payload",VewrifyPayload);
    
}
catch {
    console.log("verified message",console.error.message);
    
    
}
const decodeWithoutVerification = jwt.decode(token);
console.log("decoded token",decodeWithoutVerification);

