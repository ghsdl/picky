// REQUIRE JSON WEB TOKEN
const jwt = require('jsonwebtoken');
// REQUIRE DOTENV TO HAVE ACCESS TO OUR ENVIRONMENT VARIABLES
require('dotenv').config();

function jwtGenerator(member_id) {
  // CREATING THE PAYLOAD
  const payload = {
    // SENDING THE DATA AKA MEMBER ID
      id: member_id,
  };

  // RETURN THE TOKEN AND SIGNING IT
  return jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: 60 * 60 });
}

module.exports = jwtGenerator;
