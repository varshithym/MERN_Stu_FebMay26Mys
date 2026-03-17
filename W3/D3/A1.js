function passwords(password) {
    if (typeof password !== "string") {
        return "invalid";
    }
    const length = password.length;
    let hasLetter = false;
    let hasNumber = false;

    for(i=0;i<length;i++) {
        const ch = password[i];
        if ((ch >= 'a' && ch <= 'z')||ch >= 'A' && ch <= 'Z') {
            hasLetter = true;
        } else if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }

    if (length < 8) {
        return "WEAK";
    } else if (length >=12 && hasLetter && hasNumber) {
        return "Strong";
    } else if (length >=8 && hasLetter && hasNumber) {
        return "Medium";
    } else {
        return "Weak";
    }
    
}

console.log(passwords(197680));