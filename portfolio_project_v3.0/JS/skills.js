/* Skills render */

function initSkills(){
const box=document.getElementById("skillsBox");
skills.forEach(s=>{
const d=document.createElement("div");
d.textContent=s.name;
box.appendChild(d);
});
}
