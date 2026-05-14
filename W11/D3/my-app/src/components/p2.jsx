// useEffect Lifecycle
// No array: every render
// [] -> once
// [state] -> on mount + when the count changes
import { useEffect, useState } from "react";
export function UseEffectLifeCycle() {
    const [count, setCount] = useState(0);

    // Runs after every render
    useEffect(() => {
        console.log("Effect1: runs after every render");
    });

    // Runs only once after mount
    useEffect(() => {
        console.log("Effect2: runs only once after mount");
    }, []);

    // Runs when count changes
    useEffect(() => {
        console.log("Effect3: count changed to", count);

        return () => {
            console.log("Cleanup for Effect3: previous count:", count);
        };
    }, [count]);

    function handleIncrement() {
        setCount((prevCount) => prevCount + 1);
    }

    function handleReset() {
        setCount(0);
    }

    return (
        <section>
            <h2>useEffect Lifecycle</h2>

            <p>Count: {count}</p>

            <button onClick={handleIncrement}>
                Increment
            </button>

            <button onClick={handleReset}>
                Reset
            </button>
        </section>
    );
}