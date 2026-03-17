const asyncfetchbtn = document.getElementById("asyncfetchbtn");
const output = document.getElementById("output");
asyncfetchbtn.addEventListener("click",
    //async :- for no blocking another requests
    async function () {  
    output.textContent = "Loading user...";
    try {
        //await waits until a response recieves
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10");
        if (!response.ok) 
            throw new Error("HTTP error : " + response.status);
            const data=await response.json();
            output.textContent=JSON.stringify(data,null,100);
        

    }
    catch(error){
        output.textContent="Error : "+error.message;
    }
});