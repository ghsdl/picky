const memberDataMapper = require("../dataMappers/memberDataMapper");
const platformDataMapper = require("../dataMappers/platformDataMapper");

const memberController = {
  async get(req, res) {
    try {
      const member = await memberDataMapper.get();
      res.json({ member });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getById(req, res) {
    try {
      const id = parseInt(req.params.id, 10);
      const member = await memberDataMapper.getOne(id);
      res.json({ member });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getBookmarkByMember(req, res, next) {
    try {
      const memberId = parseInt(req.params.id, 10);
      const member = await memberDataMapper.getOne(memberId);
      if (!member) {
        return next();
      }
      const bookmarkMember = await memberDataMapper.getBookmarkMember(memberId);
      res.json({ bookmarkMember });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getPlatformByMember (req, res, next) {
    try {
      const memberId = parseInt(req.params.id, 10);
      const member = await memberDataMapper.getOne(memberId);
      if (!member) {
        return next();
      }

      const platformId = parseInt(req.params.id, 10);
      const platform = await platformDataMapper.getOne(platformId)
      if (!platform) {
        return next();
      }

      
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

    // TO DO
    // HANDLE UPDATE AND LOGIN SO THEY MATCH AGAIN IN DATABASE
  async update(req, res, next) {
    try {
      const memberId = parseInt(req.params.id, 10);

      const member = await memberDataMapper.getOne(memberId);

      if (!member) {
        return next();
      }

      const data = req.body;

      if (data.pseudo) {
        data.pseudo = req.body.pseudo;
      }

      if (data.email) {
        data.email = req.body.email;
      }

      if (data.password) {
        data.password = req.body.password;
      }

      if (data.profile_picture) {
        data.profile_picture = req.body.profile_picture;
      }

      const updatedMember = await memberDataMapper.patch(data, memberId);

      res.json({ updatedMember });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async delete(req, res, next) {
    try {
      const oneMember = await memberDataMapper.getOne(parseInt(req.params.id, 10));
      if (!oneMember) {
        return next();
      }
      const deletedMember = await memberDataMapper.delete(parseInt(req.params.id, 10));
      res.status(204).json();
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

};

module.exports = memberController;
