//Custom hooks
// Its a normal javascript function that uses react hooks inside it. Its name must start with "use"
//it helps reuse logic acrooss components

import { useEffect, useState } from "react";

//Why to use it?
//Avoid repeating the same hook logic
//Keeps component cleaner
//Makes code easier to understand

//Important things to remember about Custom hooks:
//It does not render JSX themselves
//They return values/functions
//Components use those returned vaues

//Document Title changer: Custom hook which updates the browser tab title whenever the given title changes.
 export function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title;

        return () => {
            document.title = 'My React app';
        };
    }, [title]);
}

//Custom hook : manages a boolean value and provides a reusable toggle function

function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue);
    const toggle = () => {
        setValue((prev) => !prev);
    };
    return [value, toggle];
}

export function CustomHooksIntro() {
    const [count, setCount] = useState(0);

    const [isVisible, toggleVisible] = useToggle(true);

    useDocumentTitle(`Count is ${count}`);

    return (
        <section>
            <h2>Custom Hooks Introduction</h2>
            <div style={{ marginBottom: '10px' }}>
                <h3>Counter Example</h3>
                <p>Count: {count}</p>
                <button onClick={() => setCount((prev) => prev + 1)}>
                    Increment Count
                </button>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <h3>Toggle Example</h3>
                <button onClick={toggleVisible}>
                    {isVisible ? 'Hide Message' : 'Show Message'}
                </button>
                {isVisible && (
                    <p>This visibility is controlled by a Custom hook.</p>
                )}
            </div>
        </section>
    )
}