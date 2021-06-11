const pool = require("../../database");

module.exports = {
  async addMember(member) {
    // CREATING NEW USER IN DATABASE
    const newMember = await pool.query(
      `INSERT INTO member (pseudo, email, password) VALUES ($1, $2, $3) RETURNING *`,
      [member.pseudo, member.email, member.password]
    );

    return newMember.rows[0];
  },

  async logMember(email) {
    // CHECKING IF USER DOES EXIST
    const member = await pool.query(`SELECT * FROM member WHERE email = $1`, [
      email,
    ]);

    return member.rows[0];
  },
};