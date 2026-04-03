// managing session with express-session

const express = require("express");
const session = require("express-session");

const app = express();

app.use(session({
    secret: "MysecretKey",
    resave: false,
    saveUninitialized: false
}));

app.get("/login", function (req, res) {
    req.session.user = {
        id: 201,
        username: "varshith",
        role: "student"
    };
    res.send("Session details stored after login.");
});

app.get("/profile", function (req, res) {
    if (!req.session.user) {
        return res.status(401).json({
            success: false,
            message: "No active login"
        });
    }

    res.json({
        success: true,
        message: req.session.user
    });
});

app.listen(4000, function () {
    console.log("Session server running @ http://localhost:4000");
});