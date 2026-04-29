//Props immutable
function Child({message}){
    return <p>Received message: {message}</p>;
}

export function PropsImmutability(){
    const parentMessage = "Props are read-only";
    return(
        <>
        <h2>Props arec immutable.</h2>
        <Child message={parentMessage}/>
        </>
    )
}