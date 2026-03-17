const taskList = document.getElementById("taskList");
const deleteBtn = document.getElementById("deleteBtn");
let taskcount = 3;
const addTask = document.getElementById("addTask");

taskList.addEventListener("click",function(event){
    if(event.target.classList.contains("deleteBtn")){
        console.log("delete button clicked for",event.target.parentElement,this.textContent.trim());
        event.target.parentElement.remove();
    }
    
    
    
});

addTask.addEventListener("click",function() {
    taskcount++;
    const li = document.createElement("li");
    li.innerHTML = "Task" +taskcount + '<button class="deleteBtn">Delete</button>';
    taskList.append(li);
    console.log("new task created");
});
