const signupform = document.getElementById("signupform");
const signupemail = document.getElementById("signupemail");
const signuppassword = document.getElementById("signuppassword");
const message = document.getElementById("message");

signupform.addEventListener("submit",function(event){
    event.preventDefault();

    //email validation
    const email=signupemail.value.trim();
    if(!email){
        message.textContent="Email is required.";
        message.style.color="red";
        signupemail.focus();//control will come to signup form
        return;
    }
    if(!email.includes('@')|| !email.includes('.')){
        message.textContent="Please Enter a valid email id";
        message.style.color="red";
        signupemail.focus();
        return;
    }
    //password validation
    const password=signuppassword.value;
    console.log(signupform.elements.signuppassword.value);
    if(!password){
        message.textContent="Please Enter a valid Password";
        message.style.color="red";
        signuppassword.focus();
        return;
    }
    //check password length
    if(password.legth<8 ){
        message.textContent="Password must be atleast 8 characters long";
        message.style.color="red";
        signuppassword.focus();
        return;
    }
    //check uppercase characters
    if(!/[A-Z]/.test(password)){        //  /[]/ --this will take element as string not induvisual   
        message.textContent="Password must be atleast 1 Uppercase";
        message.style.color="red";
        signuppassword.focus();
        return;
    }
    //check lowercase characters
    if(!/[a-z]/.test(password)){        //  /[]/ --this will take element as string not induvisual   
        message.textContent="Password must be atleast 1 Lowercase";
        message.style.color="red";
        signuppassword.focus();
        return;
    }
    //check there is any number
    if(!/\d/.test(password))    // --   \d for digit
    {
        message.textContent="Password must be atleast 1 number";
        message.style.color="red";
        signuppassword.focus();
        return;
    }

    //special character
    if(!/[@#$%^&*]/.test(password)){
        message.textContent="Password must be atleast 1 Special character";
        message.style.color="red";
        signuppassword.focus();
        return;
    }
    message.textContent="Valid Email and password entered";
    message.style.color="green";
    console.log("success!",{email,password:"**hidden**"});
});
//clear error messages while entering values
signupemail.addEventListener("input", ()=>message.textContent="");
signuppassword.addEventListener("input", ()=>message.textContent="");