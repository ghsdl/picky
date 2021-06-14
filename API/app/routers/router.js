const express = require("express");
const { insertMemberSchema } = require('../validations/schemas');
const validate = require('../validations/validate');
const movieController = require('../controllers/movieController');
const serieController = require('../controllers/serieController');
const authController = require('../controllers/authController');
const platformController = require('../controllers/platformController');
const bookmarkController = require('../controllers/bookmarkController');
const memberController = require('../controllers/memberController');
const searchController = require('../controllers/searchController');
const auth = require("../middleware/authMiddleware");
const watchlistController = require('../controllers/watchlistController')



//const { route } = require('./auth');
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
<<<<<<< HEAD
router.post("/signup", authController.add);
router.post("/signin", authController.log);
router.get("/verify", auth, authController.verify);
router.get("/series/random", serieController.randSeries)

// Route pour récuperer la liste des watchlist
router.get("/wish", watchlistController.allWatchList)

// Route pour ajouter un film ou une serie à la watchlist 
router.post("/wish/add", watchlistController.addWatchList)

// Route pour supprimer de la watchlist
router.delete("/wish/:id", watchlistController.deleteOne)
=======
router.post('/signup', (validate.body(insertMemberSchema), authController.add));
router.post('/signin', authController.log);
router.get('/verify', auth, authController.verify);

// PLATFORM ROUTES
router.route('/platform')
    .get(platformController.get)
    .post(platformController.post);

router.route('/platform/:id(\\d+)')
    .get(platformController.getById)
    .patch(platformController.update)
    .delete(platformController.delete);

// BOOKMARK ROUTES
router.route('/bookmark')
    .get(bookmarkController.get)
    .post(bookmarkController.post);

router.route('/bookmark/:id(\\d+)')
    .get(bookmarkController.getById)
    .patch(bookmarkController.update)
    .delete(bookmarkController.delete);

// MEMBER ROUTES
router.route('/member')
    .get(memberController.get);

router.route('/member/:id(\\d+)')
    .get(memberController.getById)
    .patch(memberController.update)
    .delete(memberController.delete);

router.route('/member/:id(\\d+)/bookmark')
    .get(memberController.getBookmarkByMember);

// SEARCH ROUTES
router.get('/search', searchController.get);
//router.get('/search/:id', searchController.getById);
>>>>>>> 14da7bb3843afc2593ec567bb0a0ebf339092b69

module.exports = router;