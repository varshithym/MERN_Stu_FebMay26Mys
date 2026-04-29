// props destructureing
import {React} from 'react';
function UserProfile({Username,skill}){
    <div>
        <p>User:{Username}</p>
        <p>Skill:{skill}</p>
    </div>
}
// parent component
export function PropDestructuring(){
    return(
        <>
            <h2>prop destructureing</h2>
            <UserProfile Username="varshith" skill="React"/>
        </>
    )
}