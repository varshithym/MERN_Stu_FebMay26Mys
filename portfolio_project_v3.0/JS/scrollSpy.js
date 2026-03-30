/* Navigation highlight on scroll */

function initScrollSpy(){
const links=document.querySelectorAll(".nav-link");
const sections=document.querySelectorAll("section");

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
if(scrollY>=sec.offsetTop-100){
links.forEach(l=>l.classList.remove("active"));
document.querySelector(`[href="#${sec.id}"]`)?.classList.add("active");
}
});
});
}
