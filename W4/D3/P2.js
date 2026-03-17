const themeinput =document.getElementById("themeinput");
const output =document.getElementById("output");
const savebtn =document.getElementById("savebtn");

savebtn.addEventListener("click",function(){
    localStorage.setItem("theme",themeinput.value);
    localStorage.setItem("Username","Ben");
    localStorage.setItem("loggedIn","true");
    console.log("Saved Theme",themeinput.value);
    output.textContent = "Data Saved Succesfully in Local Storage";
    output.style.color="green";
});

document.getElementById("readbtn").addEventListener("click",function(){
    const theme=localStorage.getItem("theme");    
    output.textContent = "Theme is : "+theme;
    output.style.color="green";
    
});

document.getElementById("removebtn").addEventListener("click",function(){
    localStorage.removeItem("loggedIn");    
    output.textContent = "Removed 'loggedIn' ";
    output.style.color="blue";
    
});
document.getElementById("clearbtn").addEventListener("click",function(){
    localStorage.clear();    
    output.textContent = "Removed  All ";
    output.style.color="red";
    
});