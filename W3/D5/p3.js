// mouse events

const hoverbox = document.getElementById("hoverBox");

hoverbox.addEventListener("mouseover",function(e) {
    hoverbox.textContent = "mouse is over me";
    hoverbox.style.backgroundColor = "lightyellow";
    console.log(e.type);
});
    hoverbox.addEventListener("mouseout",function() {
    hoverbox.textContent = "hover me";
    hoverbox.style.backgroundColor = "";
});