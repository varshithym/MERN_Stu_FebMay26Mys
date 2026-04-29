import React, { useState } from "react";
// state lifting : Parent stores one state, multiple children use and update it. That is lifting state up.
function NameINput1({ value, onChange }) {
    return (

        <div>
            <label> Input 1:</label>
            <input value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Type a name..."
            />
        </div>
    )
}
// Second child component
function NameINput2({ value, onChange }) {
    return (

        <div>
            <label> Input 2:</label>
            <input value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="This gets updated..."
            />
        </div>
    )

}
export function SharedAtateParent() {
    const [name, setName] = useState('');
    return (
        <div>
            <h3>Shared state demo</h3>
            <NameINput1 value={name} onChange={setName} />
            <NameINput2 value={name} onChange={setName} />
            <div>
                <strong>Curent Name</strong> {name || 'Nothing typed yet'}
            </div>
        </div>

    )
}