const authDataMapper = require('../dataMappers/authDataMapper');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');

const authController = {
  async add(req, res) {
    try {

      // DESTRUCTURING REQ.BODY
      const { pseudo, email, password, confirmationPassword } = req.body;

      // CHECKING IF EMAIL EXISTS IN DATABASE
      const memberEmail = await authDataMapper.getMemberByEmail(email);

      if (memberEmail) {
        return res.status(401).json('User already registered with this email.');
      }

      if(password !== confirmationPassword) {
        return res.status(401).json(`Passwords don't match`);
      }

      // CREATING CRYPTED PASSWORD WITH BCRYPT
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = await bcrypt.hash(password, salt);
      console.log("log de bcrypt", bcryptPassword);

      // CREATING NEW USER IN DATABASE
      const newMember = await authDataMapper.insertMember({
        pseudo,
        email,
        password: bcryptPassword,
      });

      console.log(newMember);
      res.json({ newMember });
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  async log(req, res) {
    try {
      // DESTRUCTURING REQ.BODY
      const { email, password } = req.body;

      // CHECKING IF EMAIL EXISTS IN DATABASE
      const member = await authDataMapper.getMemberByEmail(email);

      if (!member) {
        return res.status(401).json('Password or email is incorrect.');
      }

      // COMPARING IF PASSWORD IS CORRECT
      const correctPassword = await bcrypt.compare(password, member.password);

      // CHECKING IF PASSWORD IS INCORRECT THEN SEND INFOS
      if (!correctPassword) {
        return res.status(401).json('Password or email is incorrect.');
      }

      // SENDING THIS TO FRONT SO MUST CHOOSE WHAT TO SEND
      // FOR NOW WE'RE SENDING EVERYTHING
      res.json({ member: member.email, pseudo: member.pseudo, token: jwtGenerator(member)});
    } catch (error) {
      console.log(error);
      res.status(500).json(error.toString());
    }
  },

  // VERIFYING THE TOKEN
  async verify(req, res) {
    try {
      res.json(true);
    } catch (err) {
      console.error(error);
      res.status(500).send('A server error occured, please try again later.');
    }
  },

};

module.exports = authController;
