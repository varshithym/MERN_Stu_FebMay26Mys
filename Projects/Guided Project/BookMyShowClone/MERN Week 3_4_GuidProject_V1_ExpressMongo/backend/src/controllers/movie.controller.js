const movieServices = require("../services/movie.service");
// Create movie
exports.createMovie = async (req,res,next ) =>{
    try{
        const movie = await movieServices.createMovie(req.body);

        res.status(201).json({
            success:true,
            message:"Movie created successfully",
            data:movie,
        });
    }
    catch(error){
        next(error);
    }
};
// get movies
exports.getMovies = async (req,res,next ) =>{
    try{
        const result = await movieServices.getMovies(req.query);

        res.status(200).json({
            success:true,
            message:"Movie list fetched",
            data:result,
        });
    }
    catch(error){
        next(error);
    }
};
// update movie
exports.updateMovie = async (req,res,next ) =>{
    try{
        const movie = await movieServices.updateMovie(req.params.id,
            req.body

        );


        res.status(200).json({
            success:true,
            message:"Movie update successfully",
            data:movie,
        });
    }
    catch(error){
        next(error);
    }
};
// delete movie
exports.deleteMovie = async (req,res,next ) =>{
    try{
        await movieServices.deleteMovie(req.params.id,
            req.body

        );


        res.status(200).json({
            success:true,
            message:"Movie delete successfully",
            
        });
    }
    catch(error){
        next(error);
    }
};