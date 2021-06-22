// REQUIRING MOVIE DATAMAPPER
const movieDataMapper = require('../dataMappers/movieDataMapper');

const movieController = {
  allMovies: async (req, res) => {
    try {
      const movies = await movieDataMapper.getAllMovies();
      if (movies) {
        res.json(movies);
      } else {
        res.status(404).json("Cannot find movies");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  randMovies: async (req, res) => {
    try {
      const movie = await movieDataMapper.randomMovies();
      if (movie) {
        res.json(movie);
      } else {
        res.status(404).json("Cannot find movie");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async searchMovies(req, res) {

    try {
      const text = req.params;
        const movies = await movieDataMapper.searchMovies(text);
        res.json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.toString());
    }
  }
  
};

module.exports = movieController;