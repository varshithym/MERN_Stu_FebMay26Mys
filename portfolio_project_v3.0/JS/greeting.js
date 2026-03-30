/* Dynamic greeting */

function initGreeting(){
const h=new Date().getHours();
document.getElementById("greet").textContent=
h<12?"Morning":h<18?"Afternoon":"Evening";
}
