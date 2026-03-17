const username = document.getElementById("userName");
const form = document.getElementById("loginForm"
);
const message = document.getElementById("message");

form.addEventListener("submit",function(event){
    event.preventDefault();

    if(username.value.trim() === ""){
        message.textContent = "user name is required";
        console.log("form blocked:no input for username");
        return;
    }
    message.textContent = "form handled by js for user"+username.value;
    console.log("form submited with username"+username.value);
})
