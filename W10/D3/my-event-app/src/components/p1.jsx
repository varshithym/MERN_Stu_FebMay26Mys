// Basic events in react
// what is an event
// An action triggered by the user (mouse, keyboard, DOM) 
// React uses camelCase attributes like onClick, onChange...
// React passes an event object (SyntheticEvent to the handler)
export function EventBasics(){
    // declareing Event handler function
    const handleClick = ()=>alert('Clicked');
    return(
        <section>
            <h2>Event Basics</h2>
            {/* Event binding */}
            <button onClick={handleClick}>
                Click Me
            </button>
        </section>
    )
}