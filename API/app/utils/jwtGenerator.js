const jwt = require('jsonwebtoken');
require('dotenv').config();

function jwtGenerator(member_id) {
    const payload = {
        member: {
        id: member_id
    }
};
    return jwt.sign(payload, process.env.secret, {expiresIn: 60 * 60})
}

module.exports = jwtGenerator;