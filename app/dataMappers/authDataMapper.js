const pool = require('../../database');

module.exports = {

  /**
     * @typedef newMember
     * @property {number} id - Unique identifier
     * @property {string} pseudo - Member's pseudo
     * @property {string} email - Member's email
     * @property {string} password - Member's password
     * @property {string} profile_picture - password confrimation
     * @property {string} created_at - Creation date (date ISO 8601)
     * @property {string} updated_at - Update date (date ISO 8601)
     */

     /**
     * @typedef memberConneted
      * @property {string} email - Member's email
      * @property {string} password - Member's password
      * @property {string} token - authentication token 

     */

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
    const member = await pool.query(`SELECT * FROM member WHERE email = $1`, [email]);

    return member.rows[0];
  },

};
