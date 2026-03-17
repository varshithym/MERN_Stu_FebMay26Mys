const livepassword =document.getElementById("livepassword");
const message =document.getElementById("message");

livepassword.addEventListener("input",function(){
        //password validation
    const password=livepassword.value;
    if(!password){
        message.textContent="Please Enter a valid Password";
        message.style.color="red";
        livepassword.focus();
        return;
    }
    //check password length
    if(password.legth < 8 ){
        message.textContent="Password must be atleast 8 characters long";
        message.style.color="red";
        livepassword.focus();
        return;
    }
    //check uppercase characters
    if(!/[A-Z]/.test(password)){        //  /[]/ --this will take element as string not induvisual   
        message.textContent="Password must be atleast 1 Uppercase";
        message.style.color="red";
        livepassword.focus();
        return;
    }
    //check lowercase characters
    if(!/[a-z]/.test(password)){        //  /[]/ --this will take element as string not induvisual   
        message.textContent="Password must be atleast 1 Lowercase";
        message.style.color="red";
        livepassword.focus();
        return;
    }
    //check there is any number
    if(!/\d/.test(password))    // --   \d for digit
    {
        message.textContent="Password must be atleast 1 number";
        message.style.color="red";
        livepassword.focus();
        return;
    }

    //special character
    if(!/[@#$%^&*]/.test(password)){
        message.textContent="Password must be atleast 1 Special character";
        message.style.color="red";
        livepassword.focus();
        return;
    }
    message.textContent="Valid  password entered";
    message.style.color="green";
    console.log("success!",{password:"**hidden**"});
});
