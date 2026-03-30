/* Live search */

function initSearch(){
const input=document.getElementById("search");

input.oninput=(e)=>{
const val=e.target.value.toLowerCase();
const filtered=projects.filter(p=>p.name.toLowerCase().includes(val));
renderProjects(filtered);
};
}
