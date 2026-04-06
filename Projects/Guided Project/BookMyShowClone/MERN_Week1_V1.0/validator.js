// callback based validation functions

function validateMovieSelection(movies,movieId,callback){
    const selectedMovie = movies.find((movie)=>movie.id === movieId);

    if(!selectedMovie){
        return callback("invalid movie. choose valid movie id",null);
    }
    callback(null,selectedMovie);
}
function validatTimeSelection(movie,selectedTime,Callback){
    const selectedShowTime = movie.showtimes.find((show)=>show.time.toLowerCase()===selectedTime.toLowerCase());
    if(!selectedShowTime){
        return Callback("Invalid time slot selection. Choose a valid show time.",null);
    }
    Callback(null,selectedShowTime);
        
}
function validateSeatCount(seatCount,Callback){
    
    if(!isNaN(seatCount) || seatCount <=0){
        return Callback("Invalid seat count. enter a valid seats count.",null);
    }
    Callback(null,seatCount);
    
        
}
module.exports = {
    validateMovieSelection,
    validatTimeSelection,
    validateSeatCount
};