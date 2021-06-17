const pool = require('../../database');

module.exports = {
  async insertMember(newMember) {
    // CREATING NEW USER IN DATABASE
    const addedMember = await pool.query(
      `INSERT INTO member (pseudo, email, password) VALUES ($1, $2, $3) RETURNING *`,
      [newMember.pseudo, newMember.email, newMember.password]
    );

    return addedMember.rows[0];
  },

  async getMemberByEmail(email) {
    // CHECKING IF USER DOES EXIST
    const member = await pool.query(`SELECT * FROM member WHERE email = $1`, [
      email
    ]);

    return member.rows[0];
  },

};
