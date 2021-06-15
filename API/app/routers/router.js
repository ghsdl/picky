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
router.post('/signup', (validate.body(insertMemberSchema), authController.add));
router.post('/signin', authController.log);
router.get('/verify', auth, authController.verify);

// PLATFORM ROUTES
router.route('/platform')
  .get(platformController.get);

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
router.route('/member/:id(\\d+)/platform')
    .get(memberController.getPlatformByMember);

router.route('/member/:member_id(\\d+)/platform/:platform_id(\\d+)')
    .post(memberController.addPlatformToMember);
 
// SEARCH ROUTES
router.get('/search', searchController.get);
//router.get('/search/:id', searchController.getById);

module.exports = router;