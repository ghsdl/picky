const express = require('express');
const pool = require('../../database');
const bcrypt = require('bcrypt');
const jwtGenerator = require('../utils/jwtGenerator');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/signup', async (req, res) => {
    try {

        // REQ.BODY DESTRUCTURED
        const { pseudo, email, password } = req.body;

        // CHECKING IF USER DOES NOT EXIST
        const member = await pool.query(`SELECT * FROM member WHERE email = $1`, [email]);
        //console.log(member);

        if (member.rows.length !== 0) {
            return res.status(401).send("Member already registered.");
        }

        // CREATING CRYPTED PASSWORD
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);
        console.log(salt);
        console.log(bcryptPassword);

        // CREATING NEW USER IN DATABASE
        const newMember = await pool.query(`INSERT INTO member (pseudo, email, password) VALUES ($1, $2, $3) RETURNING *`, [pseudo, email, bcryptPassword]);

        // GET THE TOKEN FROM THE FRONT
        const token = jwtGenerator(newMember.rows[0].member_id);

        // GIVE THE TOKEN BACK TO THE FRONT AND USER CAN SIGN IN
        res.json( { token } );
        console.log(token);
        //console.log(member);

    } catch (error) {
        console.error(error);
        res.status(500).send("Server error occured.")
    }
});

router.post('/signin', async (req, res) => {
    try {

        // REQ.BODY DESTRUCTURED
        const { email, password } = req.body;
        console.log(email);
        console.log(req.body.password);

        // CHECKING IF USER DOES EXIST
        const member = await pool.query(`SELECT * FROM member WHERE email = $1`, [email]);
        //console.log(member);

        if (!member.rows.length) {
            return res.status(401).json("Password or email is incorrect.");
        }

        // CHECKING IF PASSWORD IS CORRECT
        const correctPassword = await bcrypt.compare(password, member.rows[0].password);

        if (!correctPassword) {
            return res.status(401).json("Password or email is incorrect.");
        }

        const token = jwtGenerator(member.rows[0].member_id);

        res.json({token});

    } catch (error) {
        console.trace(error);
        res.status(500).send("Server error occured.")
    }
});

router.get('/verify', auth, (req, res) => {
    try {
      res.json(true);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error occured.");
    }
});

module.exports = router;