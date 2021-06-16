const dataMapper = require("../dataMappers/movieDataMapper");

const movieController = {
  allMovies: async (req, res) => {
    try {
      const movies = await dataMapper.getAllMovies();
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
      const movie = await dataMapper.randomMovies();
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
};

module.exports = movieController;