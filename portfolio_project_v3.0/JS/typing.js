/* Typing animation */

function initTyping(){
const roles=["Dev","MERN","Coder"];
let i=0,j=0;

setInterval(()=>{
document.getElementById("typing").textContent=roles[i].slice(0,j++);
if(j>roles[i].length){j=0;i=(i+1)%roles.length;}
},200);
}
