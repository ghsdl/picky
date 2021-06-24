const jwt = require('jsonwebtoken');
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const jwtToken = req.header("Bearer");
    if (!jwtToken) {
      return res.status(403).json("You are not authorized.");
    }

    const payload = jwt.verify(jwtToken, `${process.env.JWT_TOKEN}`);

    // à voir si je prends le member ou juste le payload
    req.member = payload;

    next();

  } catch (error) {
    console.error(error);
    return res.status(403).send("You are not authorized.");
  }
};
