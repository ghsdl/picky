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
/**
 * Save a new member
 * @route POST /signup
 * @returns {newMember[]} 200 - new member infos
 * @returns {error} 401 - "Un(e) utilisateur(rice) est déjà enregistré(e) avec cet email."
 */
router.post('/signup', (validate.body(memberInsertSchema)), authController.add);

/**
 * User login
 * @route POST /signin
 * @returns {memberConnected[]} 200 - member connected
 * @returns {error} 401 - "Email ou mot de passe incorrect."
 */
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

 /**
 * All Bookmarks 
 * @route GET /bookmark
 * @returns {bookmarks[]}200 - shows all bookmarks
 * @returns {error} 500 - "Internal Server Error"
 */
.get(bookmarkController.get)

    /**
 * Post Bookmarks 
 * @route POST /bookmark
 * @returns 200 - Everything went okay
 * @returns {error} 500 - "Internal Server Error"
 */
.post(auth, bookmarkController.post);

router.route('/bookmark/:id(\\d+)')

/**
 * Get Bookmark by id
 * @route GET /bookmark/id
 * @param {integer} id - Bookmark id
 * @returns {oneBookmark[]}200 - show one bookmark
 * @returns {error} 404 - "error": "Resource not found."
 */
.get(bookmarkController.getById)

/**
 * Delete Bookmark by id
 * @route DELETE /bookmark/id
 * @param {integer} id - Bookmark id
 * @returns {oneBookmark[]}204 - No body returned for esponse
 * @returns {error} 404 - "error": "Resource not found."
 */
.delete(auth, bookmarkController.delete);

// MEMBER AND THEIR BOOKMARKS ROUTE

/**
 * GET Bookmarks for a member
 * @route GET /member/bookmark
 * @returns {bookmarksMember[]}200 - Results
 * @returns {error} 500 - "error servor"
 */
router.get('/member/bookmark', auth, memberController.getBookmarkByMember);

// SEARCH ROUTES

/**
 * Display a list of 10 shows with parameter 'text'
 * @route GET /search/shows/:text
 * @param {text} text - parameter text
 * @returns {searchShows[]} 200 - results
 * @returns {} 404 - "Resource not found."
 */
router.get('/search/shows/:text', showController.searchShows);

/**
 * Display a list of 10 movies with parameter 'text'
 * @route GET /search/movies/:text
 * @param {text} text - parameter text
 * @returns {searchMovies[]} 200 - results
 * @returns {} 404 - "Resource not found."
 */
router.get('/search/movies/:text', movieController.searchMovies);


/**
 * Display a list of 5 movies and shows with parameter 'query'
 * @route GET /search/:query
 * @param {text} query - parameter query
 * @returns {searchAll[]} 200 - results
 * @returns {} 404 - "Resource not found."
 */
router.get('/search/:query', searchController.searchAll);


router.post('/moodresults', searchController.mood);

// RANDOM MOVIES ROUTE
router.get('/movies/random', movieController.randomMovies);


// DISPLAY ONE MOVIE 
router.get('/movie/:id', movieController.searchMovie);

// SHOWS ROUTES
router.get('/shows/random', showController.randomShows);

// DISPLAY ONE SHOW ROUTE
router.get('/show/:id', showController.searchShow);

// PLATFORMS ROUTES

/**
 * All Betaseries platforms 
 * @route GET /platform
 * @returns {platforms[]}200 - shows all platforms
 * @returns {error} 404 - "error": "Resource not found."
 */
router.get('/platform', platformController.allPlatforms);

// ERROR CONTROLLER
router.use(errorController.resourceNotFound);

module.exports = router;
