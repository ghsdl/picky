const showDataMapper = require("../dataMappers/showDataMapper");
const dataMapper = require("../dataMappers/showDataMapper");

const serieController = {
  getShows: async (req, res) => {
    try {
      const shows = await dataMapper.getAllShows();
      if (shows) {
        res.json(shows);
      } else {
        res.status(404).json("Cannot find series");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  randomShows: async (req, res) => {
    try {
      const serie = await dataMapper.randomShows();
      if (serie) {
        res.json(serie);
      } else {
        res.status(404).json("Cannot find serie");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  searchShows: async (req, res) =>{
    try {
      const text = req.params;
      const search = await showDataMapper.searchShows(text);
      res.json(search);
  } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
  }
  }


};

module.exports = serieController;