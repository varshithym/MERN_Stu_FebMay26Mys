// React Event Object
// React Event object passes an event object to the event handlers
// this object contains details about the event
// eg:input field: event.target.value

import { useState } from "react";


export function EventObject(){
    const[text,setText] = useState('');
    const habdleChange = (event) =>{
        const currentValue = event.target.value;
        console.log(currentValue);
        setText(currentValue);
        
    };
    return (

        <section>
            <h2>Event object</h2>
            <input type="text" value={text} onChange={habdleChange} placeholder="Type something" />
            <p>you typed: {text}</p>

        </section>
    );

}