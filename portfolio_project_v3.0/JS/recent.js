/* Recently viewed */

function initRecent(){
window.saveRecent=(p)=>{
let r=JSON.parse(localStorage.getItem("r")||"[]");
if(!r.some(x=>x.id===p.id)){
r.push(p);
localStorage.setItem("r",JSON.stringify(r));
}
};
}
