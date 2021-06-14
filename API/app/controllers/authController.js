const authdataMapper = require("../dataMappers/authdataMapper");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../utils/jwtGenerator");

const authController = {
  async add(req, res) {
    try {
      // DESTRUCTURING REQ.BODY
      const { pseudo, email, password } = req.body;

      // CHECKING IF USER DOES EXIST
      if (!req.body.email) {
        return res.status(401).send("User already registered with this email.");
      }

      // CREATING CRYPTED PASSWORD WITH BCRYPT
      const saltRound = 10;
      const salt = await bcrypt.genSalt(saltRound);
      const bcryptPassword = await bcrypt.hash(password, salt);

      // CREATING NEW USER IN DATABASE
      const newMember = await authdataMapper.addMember({
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

  async log(req, res) {
    try {
      // DESTRUCTURING REQ.BODY
      const { pseudo, email, password } = req.body;
      console.log(req.body.email);
      // CHECKING IF EMAIL EXISTS IN DATABASE
      const member = await authdataMapper.logMember(email);

      if (!member) {
        return res.status(401).json("Password or email is incorrect.");
      }

      // COMPARING IF PASSWORD IS CORRECT
      const correctPassword = await bcrypt.compare(password, member.password);

      const token = jwtGenerator(member.member_id);

      // CHECKING IF PASSWORD IS INCORRECT THEN SEND INFOS
      if (!correctPassword) {
        return res.status(401).json("Password or email is incorrect.");
      }
      // SENDING THIS TO FRONT SO MUST CHOOSE WHAT TO SEND
      // FOR NOW WE'RE SENDING EVERYTHING
      res.json({ member, token });
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
      res.status(500).send("A server error occured, please try again later.");
    }
  }

  
};

module.exports = authController;
