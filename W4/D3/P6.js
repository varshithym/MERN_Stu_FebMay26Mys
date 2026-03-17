const introbtn = document.getElementById("introbtn");
const output = document.getElementById("output");

document.addEventListener("click", function () {
    output.textContent = "Sending Request...";

    fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then(function(response){
        return response.text();
    })
    .then(function (text) {
        console.log("Raw response object: ", text);
        output.innerText =text;
        // output.textContent = "Status : " + text.status + "\nOk : " + text.ok ;
    })
    .catch(function(error) {
        output.textContent = "Fetch Error : " + error.message;
    });
});