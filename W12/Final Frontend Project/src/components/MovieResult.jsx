import React from "react";
export default function MoviResult(){
    const [movies, setMovies] = React.useState([]);

    return(
        <section>
            <h2>Search Results</h2>
            {movies.length === 0 ? <p>No movies Found</p> : 
            <ul>
                {movies.map((moviie)=>(
                    <li key={moviie}>{moviie}</li>
                ))}
            </ul>}
            <button onClick={()=>{
                setMovies(["Inception","Dhurandar","XYZ"])
            }}>Click for Movie</button>
            
        </section>
    )
}