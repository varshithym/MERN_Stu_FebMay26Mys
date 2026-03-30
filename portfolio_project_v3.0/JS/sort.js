/* Sorting projects */

function initSort(){
const sel=document.getElementById("sort");

sel.onchange=(e)=>{
let arr=[...projects];
if(e.target.value==="name"){
arr.sort((a,b)=>a.name.localeCompare(b.name));
}
renderProjects(arr);
};
}
