/* Scroll progress bar */

function initScrollBar(){
window.addEventListener("scroll",()=>{
const h=document.documentElement.scrollHeight-innerHeight;
document.getElementById("progress").style.width=(scrollY/h)*100+"%";
});
}
