// REQUIRING AUTH DATAMAPPER AND PACKAGES
const authDataMapper = require('../dataMappers/authDataMapper');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');

const authController = {

  async add(req, res) { // BACKEND AND FRONTEND METHOD
    try {

      // DESTRUCTURING REQ.BODY
      const { pseudo, email, password } = req.body;

      // IF PSEUDO DOES NOT EXIST THEN THROW ERROR
      if (!pseudo) {
        return res.status(401).json('Le pseudo doit contenir au moins 2 caractères.');
      }

      // CHECKING IF EMAIL EXISTS IN DATABASE
      const memberEmail = await authDataMapper.getMemberByEmail(email);

      // IF MEMBER EMAIL EXISTS THROW 401 STATUS
      if (memberEmail) {
        return res.status(401).json('Un(e) utilisateur(rice) est déjà enregistré(e) avec cet email.');
      }

      // CHECKING IF BOTH PASSWORDS ARE THE SAME
      if (password !== req.body.confirmationPassword) {
        return res.status(401).json(`Les mots de passe doivent être identiques.`);
      }

      // CREATING CRYPTED PASSWORD WITH BCRYPT
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = await bcrypt.hash(password, salt);

      // CREATING NEW USER IN DATABASE
      const newMember = await authDataMapper.insertMember({
        pseudo,
        email,
        password: bcryptPassword,
      });

      res.json({ newMember });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async log(req, res) { // BACKEND AND FRONTEND METHOD
    try {
      // DESTRUCTURING REQ.BODY
      const { email, password } = req.body;

      // CHECKING IF MEMBER DOES EXIST IN DATABASE VIA THEIR EMAIL
      const member = await authDataMapper.getMemberByEmail(email);

      // IF MEMBER DOEST NOT EXIST THROW 401 STATUS
      if (!member) {
        return res.status(401).json('Email ou mot de passe incorrect.');
      }

      // COMPARING IF PASSWORD IN DATABASE IS THE SAME AS THE ONE TYPED
      const correctPassword = await bcrypt.compare(password, member.password);

      // IF PASSWORD IS INCORRECT THROW 401 STATUS
      if (!correctPassword) {
        return res.status(401).json('Email ou mot de passe incorrect.');
      }

      // SENDING EMAIL PSEUDO AND TOKEN TO THE FRONT
      res.json({ member: member.email, pseudo: member.pseudo, token: jwtGenerator(member.id), member_id: member.id });

    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async verify(_, res) { // BACKEND METHOD
    try {
      // VERIFYING THE TOKEN IN HEADERS
      res.json(true);
    } catch (err) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  }

};

module.exports = authController;