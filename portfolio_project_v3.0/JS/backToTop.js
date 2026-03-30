/* Back to top button */

function initBackToTop(){
const btn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
btn.style.display=scrollY>300?"block":"none";
});

btn.onclick=()=>scrollTo({top:0,behavior:"smooth"});
}
