// REQUIRING MOVIE DATAMAPPER
const movieDataMapper = require('../dataMappers/movieDataMapper');

const movieController = {

  async randomMovies(_, res) {
    try {
      // FETCHING RANDOM MOVIES FROM THIRD PARTY API
      const movie = await movieDataMapper.randomMovies();

      // IF FETCHING IS A SUCCESS
      if (movie) {
        res.json(movie);
        // ELSE THROW ERROR
      } else {
        res.status(404).json("Cannot find movies");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async searchMovies(req, res) {
    try {
      // GETTING THE URL PARAMETER
      const text = req.params;
      
      // SEARCHING MOVIES FROM THIRD PARTY API
      const movies = await movieDataMapper.searchMovies(text);
      
      res.json(movies);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  }

};

module.exports = movieController;
