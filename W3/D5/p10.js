const ClickBtn = document.getElementById("ClickBtn");
const runClick = document.getElementById("runClick");
const runMouseOver = document.getElementById("runMouseOver");
const runKeyDown = document.getElementById("runKeyDown");
const runDupliccate = document.getElementById("runDuplicate");
const hoverBox = document.getElementById("hoverBox");
ClickBtn.addEventListener("click",function(e){
    console.log("e.type",e.type);
    console.log("instance of mouse event",e instanceof MouseEvent);
});

demoInput.addEventListener("keydown",function(e){
    if(e.key==="Enter"){
        console.log("Enter key down");
    }
});

runClick.addEventListener("click",function(){
    ClickBtn.click();
})

runMouseOver.addEventListener("click",function(){
    hoverBox.dispatchEvent(new MouseEvent("mouseover"));
    console.log("Dispatching Mouse event");
});

hoverBox.addEventListener("mouseover",function(){
    console.log("programatically trigered mouse over");
});

runKeyDown.addEventListener("click",function(){
    demoInput.dispatchEvent(new KeyboardEvent("keydown",{key:"Enter"}

    ));
});

runDupliccate.addEventListener("click",function(){
    const temp = document.createElement("button");
    temp.innerHTML = "Hello";
    document.body.append(temp);
});