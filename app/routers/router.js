const express = require("express");
const schemas = require('../validations/schemas');
const validate = require('../validations/validate');
const movieController = require('../controllers/movieController');
const serieController = require('../controllers/serieController');
const authController = require('../controllers/authController');
const platformController = require('../controllers/platformController');
const bookmarkController = require('../controllers/bookmarkController');
const memberController = require('../controllers/memberController');
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Affiche un résultat de 50 films sur les 3 plateformes (Netflix, Amazon Prime Video, OCS Go)
router.get('/movies', movieController.allMovies);
// Methode qui affiche 5 films au hasard
router.get('/movies/random', movieController.randMovies);

// Affiche un résultat de 50 series sur les 3 plateformes (Netflix, Amazon Prime Video, OCS Go)
router.get('/series', serieController.allSeries);
// Methode qui affiche 5 series au hasard
router.get('/series/random', serieController.randSeries);

// AUTH ROUTES
router.post('/signup', (validate.body(schemas.memberInsertSchema)), authController.add);
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
  .post(validate.body(schemas.bookmarkInsertSchema), bookmarkController.post);

router.route('/bookmark/:id(\\d+)')
  .get(bookmarkController.getById)
  .patch(bookmarkController.update)
  .delete(bookmarkController.delete);

  // MEMBER ROUTES
router.route('/member')
  .get(memberController.get);
router.route('/member/:id(\\d+)')
  .get(memberController.getById)
  .patch(validate.body(schemas.memberUpdateSchema), memberController.update)
  .delete(memberController.delete);
router.route('/member/:id(\\d+)/bookmark')
  .get(memberController.getBookmarkByMember);
router.route('/member/:id(\\d+)/platform')
  .get(memberController.getPlatformByMember);

router.route('/member/:member_id(\\d+)/platform/:platform_id(\\d+)')
  .post(validate.body(schemas.platformInsertSchema), memberController.addPlatformToMember);
 
module.exports = router;