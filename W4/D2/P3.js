//
const container =document.getElementById("container");
//positions
// beforebegin
// afterbegin
// beforeend
// afterend
document.getElementById("btn").addEventListener("click",
    function(){
        //1st parameter where to add 2nd is what to add
        container.insertAdjacentHTML("afterbegin","<p>Dynamically inserted</p>");
    }
)