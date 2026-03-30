/* Theme toggle */

function initTheme(){
const btn=document.getElementById("themeBtn");

if(localStorage.getItem("t")==="d"){
document.body.classList.add("dark");
}

btn.onclick=()=>{
document.body.classList.toggle("dark");
localStorage.setItem("t",document.body.classList.contains("dark")?"d":"l");
};
}
