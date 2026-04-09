// handles requested to movie
const express = require("express");
const {authMiddleware} = require("../middleware/authMiddleware");
const {
    getHome,
    getAllMovies,
    getMovieById,
    addMovie,
    updateMovie,
    deleteMovie
} = require("../controllers/movieController");
const roleMiddleWare = require("../middleware/roleMiddleware");
const router = require("./userRoutes");
// home page
router.get("/",getHome);
// to gather all movies
router.get("/movies",getAllMovies);
// get specific movie
router.get("/movies/:id",getMovieById);
// admin adding new movie
router.post("/movies",authMiddleware,roleMiddleWare("admin"),addMovie);
// to update movie by admin
router.post("/movies/:id",authMiddleware,roleMiddleWare("admin"),updateMovie);
// deleting the movie by admin side
router.delete("/movies/:id",authMiddleware,roleMiddleWare("admin"),deleteMovie);

module.exports = router;