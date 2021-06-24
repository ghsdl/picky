// REQUIRING MEMBER DATAMAPPER AND PACKAGES
const memberDataMapper = require('../dataMappers/memberDataMapper');
/*const platformDataMapper = require('../dataMappers/platformDataMapper');*/
const bcrypt = require('bcrypt');

const memberController = {
  async get(_, res) {
    try {
      // GETTING THE LIST OF MEMBERS
      const member = await memberDataMapper.getAll();

      res.json({ member });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getById(req, res, next) {
    try {
      // GETTING THE MEMBER BY ITS ID
      const member = await memberDataMapper.getOne(req.member.id);

      // IF MEMBER DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!member) {
        return next();
      }

      res.json({ member: member.email, pseudo: member.pseudo});
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
      if (isNaN(id)) {
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

  // V2 IF WE DECIDE TO INCLUDE SVODS TO USERS DIRECTLY
  /*
  async getPlatformByMember (req, res, next) {
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

      // GETTING ALL PLATFORMS FOR A MEMBER
      const platforms = await memberDataMapper.getPlatformByMember(id);
      
      res.json({ platforms });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },
  */

  // V2 IF WE DECIDE TO INCLUDE SVODS TO USERS DIRECTLY
  /*
  async addPlatformToMember(req, res, next) {
    try {
      // GETTING THE URL PARAMETER
      const platform_id = parseInt(req.params.platform_id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if (isNaN(platform_id)) {
        return next();
      }

      // GETTING THE PLATFORM BY ITS ID
      const platform = await platformDataMapper.getOne(platform_id);

      // IF PLATFORM DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!platform) {
        return next();
      }

      // GETTING THE URL PARAMETER
      const member_id = parseInt(req.params.member_id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if (isNaN(member_id)) {
        return next();
      }

      // GETTING THE MEMBER BY ITS ID
      const member = await memberDataMapper.getOne(member_id);
      
      // IF MEMBER DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!member) {
        return next();
      }

    // ADDING NEW PLATFORM FOR A MEMBER IN DATABASE
      const newPlatformToMember = await memberDataMapper.post(platform_id, member_id);

      res.json({ newPlatformToMember });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },
  */

  async update(req, res, next) {
    try {
      // GETTING THE MEMBER BY ITS ID
      const member = await memberDataMapper.getOne(req.member.id);

      // IF MEMBER DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!member) {
        return next();
      }

      // GETTING REQ.BODY
      const newData = req.body;

      // UPDATING PSEUDO
      if (newData.pseudo) {
        member.pseudo = newData.pseudo;
      }

      // UPDATING EMAIL
      if (newData.email) {
        member.email = newData.email;
      }

      // UPDATING PSEUDO PASSWORD
      if (newData.password) {
        member.password = newData.password;
      }

      // RE-CRYPTING PASSWORD WITH BCRYPT
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      // GET BACK NEW PASSWORD FROM REQ.BODY AND HASH IT BEFORE SAVING IN DATABASE
      member.password = await bcrypt.hash(member.password, salt);

      // UPDATING PSEUDO PROFILE_PICTURE // V2
      if (newData.profile_picture) {
        member.profile_picture = newData.profile_picture;
      }

      // UPDATING MEMBER AND SAVE IN DATABASE
      const updatedMember = await memberDataMapper.patch(member, req.member.id);

      res.json({ updatedMember });
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
       if (isNaN(id)) {
        return next();
      }

      // GETTING THE MEMBER BY ITS ID
      const member = await memberDataMapper.getOne(id);

      // IF MEMBER DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!member) {
        return next();
      }

      // DELETING MEMBER FROM DATABASE
      await memberDataMapper.delete(id);
      
      res.status(204).json();
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  }

};

module.exports = memberController;