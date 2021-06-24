// REQUIRING BOOKMARK DATAMAPPER
const bookmarkDataMapper = require('../dataMappers/bookmarkDataMapper');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const jwtGenerator = require('../utils/jwtGenerator');
const { log } = require('./authController');

const bookmarkController = {

  async get(_, res) {
    try {
      // GETTING THE LIST OF BOOKMARKS
      const bookmark = await bookmarkDataMapper.get();

      res.json({ bookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getById(req, res, next) {
    try {
      // GETTING THE URL PARAMETER
      const id = parseInt(req.params.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if(isNaN(id)){
        return next();
      }

      // GETTING THE BOOKMARK BY ITS ID
      const bookmark = await bookmarkDataMapper.getOne(id);

      // IF BOOKMARK DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!bookmark) {
        return next();
      }
      
      res.json({ bookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async post(req, res) {
    try {
      // GETTING THE BODY
      const { betaseries_id, title, platform, poster } = req.body;

      // ADDING THE BOOKMARK TO DATABASE
      const bookmark = await bookmarkDataMapper.add({
        betaseries_id,
        title,
        platform,
        poster,
        member_id: req.member.id
      });
      
      res.status(200).json(`Everything went okay!`);
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async delete(req, res, next) {
    try {
      // GETTING THE URL PARAMETER
      const id = parseInt(req.params.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if(isNaN(id)){
        return next();
      }

      // GETTING THE BOOKMARK BY ITS ID
      const bookmark = await bookmarkDataMapper.getOne(id);
      
      // IF BOOKMARK DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!bookmark) {
        return next();
      }
      
      // DELETING THE BOOKMARK FROM DATABASE
      await bookmarkDataMapper.delete(id);

      res.status(204).json();
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  }

};

module.exports = bookmarkController;
