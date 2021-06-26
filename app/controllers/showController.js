// REQUIRING SHOW DATAMAPPER 
const showDataMapper = require('../dataMappers/showDataMapper');

const serieController = {
  allShows: async (_, res) => {
    try {
      // FETCHING SHOWS FROM THIRD PARTY API
      const shows = await showDataMapper.getAllShows();

      // IF FETCHING IS A SUCCESS
      if (shows) {
        // ELSE THROW ERROR
        res.json(shows);
      } else {
        res.status(404).json("Cannot find series");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  randomShows: async (_, res) => {
    try {
      // FETCHING RANDOM SHOWS FROM THIRD PARTY API
      const serie = await showDataMapper.randomShows();

      // IF FETCHING IS A SUCCESS
      if (serie) {
        // ELSE THROW ERROR
        res.json(serie);
      } else {
        res.status(404).json("Cannot find serie");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  searchShows: async (req, res) => {
    try {
      // GETTING THE URL PARAMETER
      const text = req.params;

      // SEARCHING SHOWS FROM THIRD PARTY API
      const search = await showDataMapper.searchShows(text);
      
      res.json(search);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  }

};

module.exports = serieController;