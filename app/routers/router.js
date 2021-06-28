const express = require('express');

const { memberInsertSchema, memberUpdateSchema } = require('../validations/schemas');
const validate = require('../validations/validate');
const movieController = require('../controllers/movieController');
const showController = require('../controllers/showController');
const authController = require('../controllers/authController');
const platformController = require('../controllers/platformController');
const bookmarkController = require('../controllers/bookmarkController');
const memberController = require('../controllers/memberController');
const searchController = require('../controllers/searchController');
const errorController = require('../controllers/errorController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

// AUTH ROUTES
router.post('/signup', (validate.body(memberInsertSchema)), authController.add);
router.post('/signin', authController.log);
router.get('/verify', auth, authController.verify);

// MEMBERS ROUTE
  /** 
   * Get all the members
   * @route GET /member
   * @returns {Member[]} 200 - Member's list
   * @returns {Error} 500 - Error servor
   */
router.get('/members', memberController.get)

router.route('/member')
  /**  
   * Get members by their id
   * @route GET /member/{id}
   * @param {integer} id - Member's id
   * @returns {MemberInput[]} 200 - One member
   * @returns {Error} 500 - Error servor
   */
  .get(auth, memberController.getById)
  /**  
   * Updated member
   * @route PATCH /member/{id}
   * @param {number} id - Member's id
   * @returns {Member[]} 200 - Member's update
   * @returns {Error} 500 - Error servor
   */
  .patch(auth, validate.body(memberUpdateSchema), memberController.update)
  /**  
   * Deleted member
   * @route DELETE /member/{id}
   * @param {number} id - Member's id
   * @returns {Member[]} 204 - <empty content>
   * @returns {Error} 500 - Error servor
   */
  .delete(auth, memberController.delete);

// BOOKMARK ROUTES
router.route('/bookmark')
.get(bookmarkController.get)
.post(auth, bookmarkController.post);

router.route('/bookmark/:id(\\d+)')
.get(bookmarkController.getById)
.delete(auth, bookmarkController.delete);

// MEMBER AND THEIR BOOKMARKS ROUTE
router.get('/member/bookmark', auth, memberController.getBookmarkByMember);

// SEARCH ROUTES
router.get('/search/shows/:text', showController.searchShows);
router.get('/search/movies/:text', movieController.searchMovies);
router.get('/search/:query', searchController.searchAll);
router.post('/moodresults', searchController.mood);

// MOVIES ROUTES
router.get('/movies', movieController.allMovies);
router.get('/movies/random', movieController.randomMovies);

// SHOWS ROUTES
router.get('/shows', showController.allShows);
router.get('/shows/random', showController.randomShows);

// PLATFORMS ROUTES
router.get('/platform', platformController.allPlatforms);

// ERROR CONTROLLER
router.use(errorController.resourceNotFound);

module.exports = router;