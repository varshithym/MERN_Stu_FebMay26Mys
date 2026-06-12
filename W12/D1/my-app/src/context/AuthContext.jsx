import { createContext, useContext, useEffect, useMemo, useState } from "react";

export const AuthContext = createContext({
    user:null,
    token:null,
    isAuthenticated: false,
    login:() => {},
    logout:()=>{},
});
export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    useEffect(()=>{
        const savedToken = localStorage.getItem("token");
        const savedUser = localStorage.getItem("user");

        if(!savedToken || savedUser){
            return
        }
        try{
            const parsedUser = JSON.parse(savedUser);
            setToken(savedToken);
            setUser(parsedUser);
        }
        catch(error){
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    })
}