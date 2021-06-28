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

  // V2 IF WE DECIDE TO INCLUDE SVODS TO USERS DIRECTLY
  /*
  async getById(req, res) {
    try {
      // GETTING THE URL PARAMETER
      const id = parseInt(req.params.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if (isNaN(id)) {
        return next();
      }
      
      // GETTING THE PLATFORM BY ITS ID
      const platform = await platformDataMapper.getOne(id);

      // IF PLATFORM DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!platform) {
        return next();
      }
      
      res.json({ platform });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },
  */

  // V2 IF WE DECIDE TO INCLUDE SVODS TO USERS DIRECTLY
  /*
  async update(req, res, next) {
    try {
      // GETTING THE URL PARAMETER
      const id = parseInt(req.params.platform_id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if (isNaN(_id)) {
        return next();
      }

      // GETTING THE PLATFORM BY ITS ID
      const platform = await platformDataMapper.getOne(id);

      // IF PLATFORM DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!platform) {
        return next();
      }

      // GETTING REQ.BODY
      const newData = req.body;

      // UPDATING PLATFORM AND SAVE IN DATABASE
      const updatedPlatform = await platformDataMapper.patch(newData);

      res.json({ updatedPlatform });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },
  */

  // V2 IF WE DECIDE TO INCLUDE SVODS TO USERS DIRECTLY
  /*
  async delete(req, res, next) {
    try {
      // GETTING THE URL PARAMETER
      const id = parseInt(req.params.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if (isNaN(id)) {
        return next();
      }

      // GETTING THE PLATFORM BY ITS ID
      const platform = await platformDataMapper.getOne(id);

      // IF PLATFORM DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!platform) {
        return next();
      }

      // DELETING PLATFORM FROM DATABASE
      await platformDataMapper.delete(id);
      
      res.status(204).json();
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  }
  */
};

module.exports = platformController;
