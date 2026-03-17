//InnerText and textContent
//InnerText : visible rendered text only
//textContent : all text nodes regardless of CSS
//innerHTML :allows reading or writing HTML markup inside an element and allows add html features also

const message= document.getElementById("message");
//another way of creating addEventListener 
//  This is not a good coding practice but this reduce a line of code creating const
document.getElementById("innertextbtn").addEventListener("click",function(){
    message.innerText = "Updated using innerText";
});

document.getElementById("textContentbtn").addEventListener("click",function(){
        message.textContent = "updated using textContent";
});

document.getElementById("resetbtn").addEventListener("click",function(){
    message.textContent = "Original Message";
});
const box= document.getElementById("box");
document.getElementById("innerHTMLbtn").addEventListener("click",function(){
    box.innerHTML = "<strong>Original</strong> Content";
});