//CreateElement() & appendChild()

const list=document.getElementById("list")
let counter =1;
//addding new lists
document.getElementById("addBtn").addEventListener("click",function(){
    value.textContent="";
    const li=document.createElement("li");
    li.textContent="Item"+counter++;
    list.appendChild(li);
});
const value=document.getElementById("new");
document.getElementById("rmBtn").addEventListener("click",
    function(){
        if(list.lastElementChild){
    list.remove(list.lastElementChild);
    }
    else{
        value.textContent="No items to delete";
    }
    });
    
