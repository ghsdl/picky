const bookmarkDataMapper = require('../dataMappers/bookmarkDataMapper');

const bookmarkController = {
  async get(req, res) {
    try {
      const bookmark = await bookmarkDataMapper.get();
      res.json({ bookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const bookmark = await bookmarkDataMapper.getOne(id);
      res.json({ bookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async post(req, res) {
    try {
      const data = req.body;
      const newBookmark = await bookmarkDataMapper.add(data);
      res.json({ newBookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async update(req, res, next) {
    try {
      const BookmarkId = parseInt(req.params.id, 10);

      const bookmark = await bookmarkDataMapper.getOne(BookmarkId);

      if (!bookmark) {
        return next();
      }

      const data = req.body;
      console.log(data);

      if (data.betaseries_id) {
        data.betaseries_id = req.body.betaseries_id;
      }

      if (data.title) {
        data.title = req.body.title;
      }

      if (data.platform) {
        data.platform = req.body.platform;
      }

      if (data.poster) {
        data.poster = req.body.poster;
      }

      if (data.member_id) {
        data.member_id = req.body.member_id;
      }

      const updatedBookmark = await bookmarkDataMapper.patch(data, BookmarkId);

      res.json({ updatedBookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async delete(req, res, next) {
    try {
      const oneBookmark = await bookmarkDataMapper.getOne(parseInt(req.params.id, 10));
      if (!oneBookmark) {
        return next();
      }
      const deletedBookmark = await bookmarkDataMapper.delete(parseInt(req.params.id, 10));
      res.status(204).json();
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

};

module.exports = bookmarkController;
