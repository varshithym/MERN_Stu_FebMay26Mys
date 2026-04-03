// cookie is used to track session ID
// server session data
const sessionStore = {
    "abc123":{
        userId: 101,
        userName:"varshith",
        role:"user"
    }
};
const browserCookieSeesionId = "abc123";
const sessionData = sessionStore[browserCookieSeesionId];
console.log(sessionData);