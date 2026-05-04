// updating objects and array
import { useState } from "react";
export function UpdateingArrayObjectState() {
    const [user, setUser] = useState({
        name: "rakesh",
        age: 34,
        skill: "react"
    });
    const updateSkill = () => {
        setUser({
            ...user, //copies
            skill: 'Advanced React'
        })
    };
    return (
        <>
            <h2>updateing objects state</h2>
            <p>{user.name}-{user.skill}</p>
            <button onClick={updateSkill} update Skill></button>
        </>
    )
}