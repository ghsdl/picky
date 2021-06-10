const dataMapper = require('../dataMappers/dataMapper')

const seriesController = {
  

  allSeries: async (req, res) => {
    try {
      const series = await dataMapper.getAllSeries();
      if (series) {
        res.json(series);
      } else {
        res.status(404).json('Cannot find series');
      }

    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  randSeries: async (req, res) => {
    try {
      const serie = await dataMapper.randomSeries();
      if (serie) {
        res.json(serie);
      } else {
        res.status(404).json('Cannot find serie');
      }

    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

};

module.exports = seriesController;
