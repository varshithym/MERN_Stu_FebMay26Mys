const asyncfetchbtn = document.getElementById("asyncfetchbtn");
const output = document.getElementById("output");
asyncfetchbtn.addEventListener("click",
    //async :- for no blocking another requests
    async function () {  
    output.textContent = "Loading user...";
    try{
        const response=await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new Error("HTTP error : "+response.status);
        const users=await response.json();
        // output.textContent=JSON.stringify(users,null,2);
        
        const firstThree=users.slice(0,3);
        output.textContent=JSON.stringify(firstThree,null,2);
    }
    catch(err){
        output.textContent="Error : "+err.message;
        output.style.color="red";
    }

});