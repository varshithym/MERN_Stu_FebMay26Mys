console.log("Document Object: ", document);
console.log("Page title:", document.title);
//getElementById
// const mainheading = document.getElementsByClassName("maindeading");
console.log("heading text using ID :", HTMLHeadingElement.textContent);

// getElementByClassName
const info = document.getElementsByClassName("info");
const run = document.getElementById("run");



//Bytagname
const spantag = document.getElementsByTagName("span");

run.addEventListener("click", function () {
    let i;
    for (i = 0; i < info.length; i++) {
        console.log(info[i].textContent);
        info[i].style.color = "blue";
    }
    for (i = 0; i < spantag.length; i++) {

        spantag[i].style.backgroundColor = "blue";
    }

    //query selector : returns the first matching element
    //matching a css selector
    const headings = document.querySelector(".mainheading");
    headings.style.color = "red";

});

//Query Selector all returns all elements matching
const tasks =document.querySelectorAll(".task");
tasks.forEach(function(task){
    task.style.color="purple";

});
