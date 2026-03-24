

// how js handles asynchronious task in nodeJS
function fetchReport(callback){
    console.log("Fetching report data...");
    setTimeout(() => {
        const report = "monthly report is ready";
        callback(report);
    },1000);
}
fetchReport(function(reportMessage){
    console.log(reportMessage);
});
console.log("appliocation continious execute further");
