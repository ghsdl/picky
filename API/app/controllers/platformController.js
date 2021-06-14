const platformDataMapper = require("../dataMappers/platformDataMapper");

const platformController = {
  async get(req, res) {
    try {
      const platforms = await platformDataMapper.get();
      res.json(platforms );
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const platform = await platformDataMapper.getOne(id);
      res.json({ platform });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async post(req, res) {
    try {
      const data = req.body;
      const newPlatform = await platformDataMapper.add(data);
      res.json({ newPlatform });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async update(req, res, next) {
    try {
      const PlatformId = parseInt(req.params.id, 10);

      const platform = await platformDataMapper.getOne(PlatformId);

      if (!platform) {
        return next();
      }

      const data = req.body;

      const updatedPlatform = await platformDataMapper.patch(data);

      res.json({ updatedPlatform });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async delete(req, res, next) {
    try {
      const onePlatform = await platformDataMapper.getOne(parseInt(req.params.id, 10));
      if (!onePlatform) {
        return next();
      }
      const deletedPlatform = await platformDataMapper.delete(parseInt(req.params.id, 10));
      res.status(204).json();
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },
};

module.exports = platformController;