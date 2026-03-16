// basics of the click event

const button = document.getElementById("clickBtn");
button.addEventListener("click",function() {
    console.log("button is clicked");
})

button.addEventListener("click",function() {
    console.log("Second event listener : button is clicked");
})