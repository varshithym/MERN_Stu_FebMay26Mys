/* Auto save form */

function initFormSave(){
const n=document.getElementById("nameInput");
const e=document.getElementById("emailInput");

[n,e].forEach(i=>{
i.oninput=()=>{
localStorage.setItem("f",JSON.stringify({n:n.value,e:e.value}));
};
});

const d=JSON.parse(localStorage.getItem("f")||"{}");
n.value=d.n||""; e.value=d.e||"";
}
