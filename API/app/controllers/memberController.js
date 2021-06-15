const memberDataMapper = require("../dataMappers/memberDataMapper");
const platformDataMapper = require("../dataMappers/platformDataMapper");
const bcrypt = require("bcrypt");

const memberController = {
  async get(req, res) {
    try {
      const member = await memberDataMapper.getAll();
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

      const platforms = await memberDataMapper.getPlatformByMember(memberId);
      
      res.json({ platforms });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async addPlatformToMember(req, res, next) {

    try {
      const platformId = parseInt(req.params.platform_id, 10);
      const platform = await platformDataMapper.getOne(platformId);
      if (!platform) {
        return next();
      }

      const memberId = parseInt(req.params.member_id, 10);
      const member = await memberDataMapper.getOne(memberId);
      if (!member) {
        return next();
      }

      const newPlatformToMember = await memberDataMapper.post(platformId, memberId);
      res.json({ newPlatformToMember });
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

      // RE-CREATING CRYPTED PASSWORD WITH BCRYPT
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      // GET BACK NEW PASSWORD FROM REQ.BODY AND HASH IT BEFORE SAVING IN DATABASE NEW PASSWORD
      data.password = await bcrypt.hash(data.password, salt);

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
  }

};

module.exports = memberController;
