const serieDataMapper = require("../dataMappers/serieDataMapper");

const serieController = {
  allSeries: async (req, res) => {
    try {
      const series = await serieDataMapper.getAllSeries();
      if (series) {
        res.json(series);
      } else {
        res.status(404).json("Cannot find series");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  randSeries: async (req, res) => {
    try {
      const serie = await serieDataMapper.randomSeries();
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
};

module.exports = serieController;