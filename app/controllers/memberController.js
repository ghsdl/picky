// REQUIRING MEMBER DATAMAPPER AND PACKAGES
const memberDataMapper = require('../dataMappers/memberDataMapper');
const platformDataMapper = require('../dataMappers/platformDataMapper');
const bcrypt = require('bcrypt');

const memberController = {
  async get(req, res) {
    try {
      // GETTING THE LIST OF MEMBERS
      const member = await memberDataMapper.getAll();
      
      res.json({ member });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getById(req, res) {
    try {
      // GETTING THE URL PARAMETER
      const id = parseInt(req.params.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if(isNaN(id)){
        return next();
      }

      // GETTING THE MEMBER BY ITS ID
      const member = await memberDataMapper.getOne(id);

      // IF MEMBER DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!member) {
        return next();
      }

      res.json({ member });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getBookmarkByMember(req, res, next) {
    try {
      // GETTING THE URL PARAMETER
      const id = parseInt(req.params.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if(isNaN(id)){
        return next();
      }
      // GETTING THE MEMBER BY ITS ID
      const member = await memberDataMapper.getOne(id);

      // IF MEMBER DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!member) {
        return next();
      }

      // GETTING ALL BOOMARKS FOR A MEMBER
      const bookmarkMember = await memberDataMapper.getBookmarkMember(id);

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

  async update(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);

      const member = await memberDataMapper.getOne(id);

      if (!member) {
        return next();
      }

      const data = req.body;

      if (data.pseudo) {
        member.pseudo = req.body.pseudo;
      }

      if (data.email) {
        member.email = req.body.email;
      }

      if (data.password) {
        member.password = req.body.password;
      }
      
      // RE-CREATING CRYPTED PASSWORD WITH BCRYPT
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      // GET BACK NEW PASSWORD FROM REQ.BODY AND HASH IT BEFORE SAVING IN DATABASE NEW PASSWORD
      member.password = await bcrypt.hash(member.password, salt);

      if (data.profile_picture) {
        member.profile_picture = req.body.profile_picture;
      }

      const updatedMember = await memberDataMapper.patch(member, id);

      res.json( { updatedMember });
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
