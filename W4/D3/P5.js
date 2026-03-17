const introbtn = document.getElementById("introbtn");
const output = document.getElementById("output");

document.addEventListener("click", function () {
    output.textContent = "Sending Request...";

    fetch("https://jsonplaceholder.typicode.com/posts/5")
    .then(function(response){
        return response.json();
    })
    .then(function (data) {
        console.log("Raw response object: ", data);
        output.textContent = "Status : " + data.status + "\nOk : " + data.ok;
        output.innerText =JSON.stringify(data,null,2);
    })
    .catch(function(error) {
        output.textContent = "Fetch Error : " + error.message;
    });
});