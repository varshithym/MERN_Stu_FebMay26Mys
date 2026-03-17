const input = document.getElementById("nameInput");
const display = document.getElementById("var");

input.addEventListener("keydown",function(event){
    console.log("key pressed",event.key);
    display.textContent = "last key pressed:"+event.key;
});

// display.addEventListener("keydown",function(event){
//     console.log("last key pressed",event.key);

// });