const asyncfetchbtn = document.getElementById("asyncfetchbtn");
const output = document.getElementById("output");
const postidinput = document.getElementById("postidinput");

asyncfetchbtn.addEventListener("click",
    //async :- for no blocking another requests
    async function () {  
    output.textContent = "Loading user...";

    const id=postidinput.value.trim();
        if(id===""){
            output.textContent="Post ID is required";
            output.style.color="red";
            return;
        
        }

    const numericid =Number(id);
        if(numericid<1 || numericid>100){
            output.textContent="Enter a vaild number from 1 to 100";
            output.style.color="red";
            return;
        }
    try {       
       
        //await waits until a response recieves
        output.textContent="Fetching Post...";
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+numericid);
        if (!response.ok) 
            throw new Error("HTTP error : " + response.status);
            const data=await response.json();
            output.textContent=JSON.stringify(data,null,100);
            output.style.color="green";


    }
    catch(error){
        output.textContent="Error : "+error.message;
    }
});