const themeinput =document.getElementById("themeinput");
const output =document.getElementById("output");
const savebtn =document.getElementById("savebtn");

savebtn.addEventListener("click",function(){
    sessionStorage.setItem("theme",themeinput.value);
    sessionStorage.setItem("Username","Ben");
    sessionStorage.setItem("loggedIn","true");
    console.log("Saved Theme",themeinput.value);
    output.textContent = "Data Saved Succesfully in Local Storage";
    output.style.color="green";
});

document.getElementById("readbtn").addEventListener("click",function(){
    const theme=sessionStorage.getItem("theme");    
    output.textContent = "theme : "+theme;
    output.style.color="green";
    
});

document.getElementById("removebtn").addEventListener("click",function(){
    sessionStorage.removeItem("loggedIn");    
    output.textContent = "Removed 'loggedIn' ";
    output.style.color="blue";
    
});
document.getElementById("clearbtn").addEventListener("click",function(){
    sessionStorage.clear();    
    output.textContent = "Removed  All ";
    output.style.color="red";
    
});

