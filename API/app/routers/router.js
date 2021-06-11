
const moviesController = require('../controllers/moviesController')
const seriesController = require('../controllers/seriesController')

const express = require("express");
const router = express.Router();

//Route pour afficher tous les films
router.get("/movies", moviesController.allMovies);
// Route pour afficher 5 films au hasard
router.get("/movies/random", moviesController.randMovies)

// Route pour afficher toutes les series
router.get("/series", seriesController.allSeries);
// Route pour afficher 5 series au hasard
router.get("/series/random", seriesController.randSeries)



module.exports = router;
