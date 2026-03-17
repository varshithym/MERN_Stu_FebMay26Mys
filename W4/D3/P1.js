const checkbtn =document.getElementById("checkbtn");
checkbtn.addEventListener("click",function(){
    console.log("Local Storage check",typeof localStorage !=="undefined");
    console.log("localStorage object",localStorage);
    console.log("Session Storage check",typeof sessionStorage !=="undefined");
    console.log("Session Storage object",localStorage);

});