// usage of built in and third party modules
// path is a built in module,works without installation 
const path = require("path");
const InvoicePath = path.join("invoices","2026","invoice_001.txt");
console.log("built in module",InvoicePath);

// to use third-party package/module
try{
    const _  = require("lodash");
    console.log("third party module example");
}
catch(e){
    console.log("third party module 'lodash' is not installed");
}