const existingpostbtn =document.getElementById("existingpostbtn");
const missingpostbtn =document.getElementById("missingpostbtn");
const statusoutput =document.getElementById("statusoutput");

function fetchpost(url){
    statusoutput.textContent="Fetching from "+url;
    fetch(url)
    .then(function(response){
        if (!response.ok) {
            throw new Error("HTTP error status code"+response.status);            
        }
        return response.json();
    })
    .then(function (data) {
        statusoutput.innerText="Success"+JSON.stringify(data,null,2);
    })
    //promise block
    .catch(function (error) {
        statusoutput.textContent="error : "+error.message;
    });
}
existingpostbtn.addEventListener("click",function () {
    fetchpost("https://jsonplaceholder.typicode.com/posts/5");
});
missingpostbtn.addEventListener("click",function () {
    fetchpost("https://jsonplaceholder.typicode.com/posts/101");//posts are from 1-100
});