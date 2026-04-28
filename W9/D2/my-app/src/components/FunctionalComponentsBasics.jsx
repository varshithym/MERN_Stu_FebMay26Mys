
import React from 'react';
function Welcome(props){
    return(
        <p>Hello, {props.name}</p>
    )
}
export function FunctionalCompondntsBasics(){
    // child component
    return(
        <div>
            <h2>Functonal Component Basics</h2>
            {/* we are passing varshith as prop */}
            {/* Welcome function receives is as {name:"varshith"} */}
            <Welcome name="varshith"/>
             {/* we are passing varshith as prop */}
            {/* Welcome function receives is as {name:"DEveloper"} */}
            <Welcome name="Developer"/>
        </div>
    )
}