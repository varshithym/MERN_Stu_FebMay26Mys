// path module and json module
const path = require("path");
// json is loaded as a normal js object in commonJS
const appconfig = require("./support/app-config.json");
console.log("__dirname",__dirname);
console.log("__filename",__filename);

console.log("Application name: ",appconfig.appName);
console.log("environment name: ",appconfig.environment);
console.log("feature name: ",appconfig.features.join(", "));