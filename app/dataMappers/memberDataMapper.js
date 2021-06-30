const pool = require('../../database');

module.exports = {
  
    /**
     * @typedef Member
     * @property {number} id - Unique identifier
     * @property {string} pseudo - Member's nickname
     * @property {string} email - Member's email
     * @property {string} password - Member's password
     * @property {string} profile_picture - Member's profile picture
     * @property {string} created_at - Creation date (date ISO 8601)
     * @property {string} updated_at - Update date (date ISO 8601)
    */

     /**
     * @typedef bookmarksMember
     * @property {number} betaseries_id - Member's nickname
     * @property {string} title - bookmark's email
     * @property {string} platform - bookmark's platform
     * @property {number} member_id - references "member" ("id")
     * @property {string} created_at - Creation date (date ISO 8601)
     * @property {string} updated_at - Update date (date ISO 8601)
     */

    /**
     * @typedef MemberInput
     * @property {string} pseudo - Member's nickname
     * @property {string} email - Member's email
     * @property {string} password - Member's password
     * @property {string} profile_picture - Member's profile picture
     * @property {string} created_at - Creation date (date ISO 8601)
     * @property {string} updated_at - Update date (date ISO 8601)
     */

    async getAll() {
        const result = await pool.query(`SELECT * FROM member ORDER BY id`);
        return result.rows;
    },

    async getOne(id) {
        const result = await pool.query(`SELECT * FROM member WHERE id = $1`, [id]);
        return result.rows[0];
    },
   

    async getBookmarkMember(memberId) {
        console.log(memberId);
        const result = await pool.query(`SELECT json_agg(bookmark.*) AS bookmark FROM bookmark WHERE member_id = $1;`, [memberId]);
        return result.rows;
    },

    async patch(member, id) {
        const result = await pool.query(`UPDATE "member" SET pseudo = $1, email = $2, password = $3, profile_picture = $4, updated_at = now() WHERE id =$5 RETURNING *`, [member.pseudo, member.email, member.password, member.profile_picture, id]);
        return result.rows[0];
    },

    async delete(id) {
        const result = await pool.query(`SELECT * FROM delete_member($1)`, [id]);
        return result;
    }
};
