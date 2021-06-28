// REQUIRING BOOKMARK DATAMAPPER
const bookmarkDataMapper = require('../dataMappers/bookmarkDataMapper');

const bookmarkController = {

  async get(_, res) { // BACKEND METHOD
    try {
      // GETTING THE LIST OF BOOKMARKS
      const bookmark = await bookmarkDataMapper.get();

      res.json({ bookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getById(req, res, next) { // BACKEND METHOD
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
      console.log(bookmark)
      
      res.json({ bookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async post(req, res) { // BACKEND AND FRONTEND METHOD
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

  async delete(req, res, next) { // BACKEND AND FRONTEND METHOD
    try {
      // GETTING THE URL PARAMETER
      const betaseries_id = parseInt(req.params.id, 10);

      // IF BETASERIES_ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if(isNaN(betaseries_id)){
        return next();
      }

      // GETTING THE BOOKMARK BY ITS BETASERIES_ID
      const bookmark = await bookmarkDataMapper.getOne(betaseries_id);
      
      // IF BOOKMARK DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!bookmark) {
        return next();
      }
      
      // DELETING THE BOOKMARK FROM DATABASE WITH MEMBER TOKEN
      await bookmarkDataMapper.delete(betaseries_id, req.member.id);

      res.status(204).json({ message: `Favori supprimé avec succès.`});
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  }

};

module.exports = bookmarkController;