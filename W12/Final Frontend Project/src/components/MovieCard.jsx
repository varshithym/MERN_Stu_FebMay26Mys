export default function MovieCard(){
    const movie = {
        title:"inception",
        genre:"fiction",
        rating:"9",
        duration:"2h 28m"
    };
    return(
        <div className="movie-card">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyuWmayVBvqjd1MxTKpRgauq2cCtUzb7Q9QvaFTkAuxAU_EYMoCE3wBuJeftxIzf0grreIw&s=10" alt={movie.title} style={{height:400}}  />
            <h2>{movie.title}</h2>
            <p>Genre:{movie.genre}</p>
            <p>rating:{movie.rating}</p>
            <p>Duration:{movie.duration}</p>
            <button>Book Now</button>

        </div>
    )
}