const searchDataMapper = require("../dataMappers/searchDataMapper");

const searchController = {
  async get(req, res, next) {
    try {

      const { query } = req.query;
      if (!req.query.s) throw new Error("Search param (`s`) required");

      res.json(await searchDataMapper.search(req.query.s));
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  /*async getById(req, res, next) {
    try {
      const id = req.params.id;
      res.json(await searchDataMapper.getTitle(id));
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },*/
};

module.exports = searchController;