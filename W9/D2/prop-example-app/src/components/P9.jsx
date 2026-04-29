// Props vs State
// Props: data passed from parent to child component
// data comes from outside the component
// and read-only
// are used for passing data between components
// State: data managed inside a component
// brlongs to the Component itself
// can be modified/changed
// setter method is used to modify data
 import { useState } from "react";

function Child({title}){
    return <p>props:{title}</p>
}
export function PropsState(){
    const[stateValue,setStateValue] = useState('Local State');
    return (
        <>
        <h3>props vs state</h3>
        <Child title="parent data"/>

        <p>State:{stateValue}</p>
        <button onClick={()=>setStateValue('this is new state')}>Update State</button>
        </>
    )
}