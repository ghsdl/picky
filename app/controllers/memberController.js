// REQUIRING MEMBER DATAMAPPER AND PACKAGES
const memberDataMapper = require('../dataMappers/memberDataMapper');
const authDataMapper = require('../dataMappers/authDataMapper');
const bcrypt = require('bcrypt');

const memberController = { // BACKEND METHOD
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

  async getById(req, res, next) { // BACKEND AND FRONTEND METHOD
    try {
      // GETTING THE MEMBER ID
      const id = parseInt(req.member.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if (isNaN(id)) {
        return next();
      }

      // GETTING THE MEMBER FROM DATABASE BY THEIR ID STORED IN THE TOKEN
      const member = await memberDataMapper.getOne(id);

      // IF MEMBER DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!member) {
        return next();
      }

      // SEND DATA TO FRONTEND
      res.json({ member: member.email, pseudo: member.pseudo });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async getBookmarkByMember(req, res, next) { // BACKEND AND FRONTEND METHOD
    try {
      // GETTING THE MEMBER ID
      const id = parseInt(req.member.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if (isNaN(id)) {
        return next();
      }

      // GETTING THE MEMBER FROM DATABASE BY THEIR ID STORED IN THE TOKEN
      const member = await memberDataMapper.getOne(id);

      // IF MEMBER DOES NOT EXIST THEN NEXT TO STOP THE EXECUTION
      if (!member) {
        return next();
      }

      // GETTING ALL BOOMARKS FOR A MEMBER
      const bookmarkMember = await memberDataMapper.getBookmarkMember(id);

      res.json({ data: bookmarkMember[0].bookmark });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

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

      // CHECKING IF EMAIL EXISTS IN DATABASE
      const memberEmail = await authDataMapper.getMemberByEmail(newData.email);

      // IF MEMBER EMAIL EXISTS THROW 401 STATUS
      if (memberEmail) {
        return res.status(401).json('Un(e) utilisateur(rice) est déjà enregistré(e) avec cet email.');
      }

      // UPDATING EMAIL
      if (newData.email) {
        member.email = newData.email;
      }

      // UPDATING PASSWORD
      if (newData.password) {

        // CHECKING IF BOTH PASSWORDS ARE THE SAME
        if (newData.password !== newData.confirmationPassword) {
          return res.status(401).json(`Les mots de passe doivent être identiques.`);
        }

      // RE-CRYPTING PASSWORD WITH BCRYPT
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);

      // GET BACK NEW PASSWORD FROM REQ.BODY AND HASH IT BEFORE SAVING IN DATABASE
      member.password = await bcrypt.hash(newData.password , salt);
      
      const updatedMember = await memberDataMapper.patch(member, req.member.id);
      return res.json({ updatedMember });
      }

      // UPDATING PSEUDO PROFILE_PICTURE // V2
      if (newData.profile_picture) {
        member.profile_picture = newData.profile_picture;
      }

      // UPDATING MEMBER AND SAVE IN DATABASE
      const updatedMember = await memberDataMapper.patch(member, req.member.id);
      console.log(updatedMember);
      res.json({ updatedMember });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async delete(req, res, next) { // BACKEND AND FRONTEND METHOD
    try {
      // GETTING THE MEMBER ID
      const id = parseInt(req.member.id, 10);

      // IF ID NOT A NUMBER THEN NEXT TO STOP THE EXECUTION
      if (isNaN(id)) {
        return next();
      }

      // GETTING THE MEMBER FROM DATABASE BY THEIR ID STORED IN THE TOKEN
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