const showDataMapper = require('../dataMappers/showDataMapper');

const showController = {
  allshows: async (_, res) => {
    try {
      const shows = await showDataMapper.getAllShows();
      if (shows) {
        res.json(shows);
      } else {
        res.status(404).json("Cannot find shows");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  randomShows: async (_, res) => {
    try {
      const shows = await showDataMapper.randomShows();
      if (shows) {
        res.json(shows);
      } else {
        res.status(404).json("Cannot find show");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async searchShows(_, res) {

    try {
        const shows = await showDataMapper.searchAllShows();
        res.json(shows);
    } catch (error) {
        console.log(error);
        res.status(500).json(error.toString());
    }
  },
};

module.exports = showController;