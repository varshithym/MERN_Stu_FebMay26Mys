/* Category filter */

function initFilter(){
const box=document.getElementById("filters");
["All","Frontend","Backend"].forEach(c=>{
const b=document.createElement("button");
b.textContent=c;
b.onclick=()=>{
const d=c==="All"?projects:projects.filter(p=>p.type===c);
renderProjects(d);
};
box.appendChild(b);
});
}
