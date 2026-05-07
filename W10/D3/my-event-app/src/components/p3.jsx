import { useState } from "react";

// passing arguments to Event Handlers
export function PassingArguments(){
    const [message, setMessage] = useState('N0 Message yet');
    // Event handler function
    const handleClick = (msg)=>{
        setMessage(msg);

    };
    return(
        <section>
            <h2>Passing Arguments</h2>
            <button onClick={()=> handleClick("Namaste")}>
                Click Me
            </button>
            <p>message:{message}</p>
        </section>
    )
}