// REQUIRING PLATFORM DATAMAPPER 
const platformDataMapper = require('../dataMappers/platformDataMapper');

const platformController = {
  async allPlatforms(_, res) {
    try {
      // FETCHING PLATFORMS FROM THIRD PARTY API
      const platforms = await platformDataMapper.get();

      res.json(platforms);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

};

module.exports = platformController;