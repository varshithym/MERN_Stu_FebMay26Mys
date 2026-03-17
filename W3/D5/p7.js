const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const innerbtn = document.getElementById("inner-btn");

outer.addEventListener("click", function (event){
    console.log("outer div clicked");
})

inner.addEventListener("click", function (event){
    console.log("inner div clicked");
})

innerbtn.addEventListener("click", function (event){
    console.log("inner btn clicked");
    event.stopPropagation();
    console.log("propogation stoped at button");
})
