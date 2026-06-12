export default function MovieCard(props){
    // const movie = {
    //     title:"inception",
    //     genre:"fiction",
    //     rating:"9",
    //     duration:"2h 28m"
    // };
    return(
        <div className="movie-card">
           <h3>{props.title}</h3>
           <img src={props.poster} alt={props.title} />
           <h3>{props.title}</h3>
           <p>Genre:{props.genre}</p>
           <p>rating:{props.rating}</p>
           <p>Duration:{props.duration}</p>
           <button>Book Now</button>

        </div>
    );
}