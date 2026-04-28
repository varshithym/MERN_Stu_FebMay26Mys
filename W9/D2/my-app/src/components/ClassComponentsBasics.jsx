import React, { Component } from "react";
export class ClassComponentBasics extends Component {
    // class extends React.Component
    // state, lifecycel methods, props, setState();
    render() {
        // render(): Returns JSX describing what to show
        // caLLED whenever component needs to update
        return (
            <>
                <h2>class component</h2>
                <p>class component use render() and support lifecycel methods.</p>

            </>
        )
    }
}
