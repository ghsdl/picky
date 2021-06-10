
const moviesController = require('../controllers/movieController')
const seriesController = require('../controllers/serieController')
const watchlistController = require('../controllers/watchlistController')

const express = require("express");
const { route } = require('./auth');
const router = express.Router();

//Route pour afficher tous les films
router.get("/movies", moviesController.allMovies);
// Route pour afficher 5 films au hasard
router.get("/movies/random", moviesController.randMovies)

// Route pour afficher toutes les series
router.get("/series", seriesController.allSeries);
// Route pour afficher 5 series au hasard
router.get("/series/random", seriesController.randSeries)

// Route pour récuperer la liste des watchlist
router.get("/wish", watchlistController.allWatchList)

// Route pour ajouter un film ou une serie à la watchlist 
router.post("/wish/add", watchlistController.addWatchList)

// Route pour supprimer de la watchlist
router.delete("/wish/:id", watchlistController.deleteOne)

module.exports = router;
