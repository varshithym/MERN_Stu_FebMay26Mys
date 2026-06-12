import { useState, useContext } from "react";
// login flow with JWT
export function loginFlow(params){
    const [email,setEmail] = useState(" ");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error , setError] = useState("");
    const[isLoading, setIsLoading] = useState(false);

    const[returneduser, setReturnedUser]=useState(null);
    const[returnedToken, setReturnedToken] = useState("");

    const {login, user} = useContext(AuthContext);
    const demoAccounts = [
        {
            email:"var@gmail.com",
            password:"admin123",
            name:"Varshith",
            role:"Admin",
        },
         {
            email:"varshi@gmail.com",
            password:"user123",
            name:"arjun",
            role:"User",
        },
    ]
    // simulation of login process
    function loginRequest(loginEmail,loginPassword){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const matchedUser = demoAccounts.find(
                    (account)=>
                        account.email === loginEmail && account.password === loginPassword
                );
                if(!matchedUser){
                    reject(new Error("invalid email or password"));
                    return;
                }
                resolve({
                    user: {
                        name: matchedUser.name,
                        email: matchedUser.email,
                        role: matchedUser.role
                    }
                
                token: `demo-${matchedUser.role}-header.payload.signature`
             } );
            },1000)
        })
    }

    async function handleLogin(event){
        event.preventDefault();
        setMessage("");
        setError("");
        setReturnedToken("");
        setReturnedUser(null);

        if(!email.trim()||!password.trim()){
            setError("enter credentials");
            return;
        }
        setIsLoading(true);
        try{
            const response = await loginFlow(email.trim(),password.trim());
            login(response.user, response.token);
            setReturnedUser(response.user);
            setReturnedToken(response.token);
            setMessage("Login sucessfull");
            setEmail("");
            setPassword("");
        }
        catch(loginError){
            setError(loginError.message);
        }
        finally{
            setIsLoading(false);
        }
    }
    function fillAdminDemo(){
        setEmail("admin@r.com");
        setPassword("admin123");
        setMessage("");
        setError("");
    }
    return(
        <section>
            <h2>login Flow</h2>
            <button type="button" onClick={fillAdminDemo}>Fill Admin Demo</button>
            <button type="button" onClick={fillUse}>Fill Admin Demo</button>
        </section>
    )
}