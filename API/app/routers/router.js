const express = require("express");

const movieController = require('../controllers/movieController');
const serieController = require('../controllers/serieController');
const authController = require('../controllers/authController');
const auth = require("../middleware/authMiddleware");

const router = express.Router();

//Route pour afficher tous les films
router.get("/movies", movieController.allMovies);
// Route pour afficher 5 films au hasard
router.get("/movies/random", movieController.randMovies);

// Route pour afficher toutes les series
router.get("/series", serieController.allSeries);
// Route pour afficher 5 series au hasard
router.get("/series/random", serieController.randSeries);

// AUTH ROUTES
router.post("/signup", authController.add);
router.post("/signin", authController.log);
router.get("/verify", auth, authController.verify);

module.exports = router;
