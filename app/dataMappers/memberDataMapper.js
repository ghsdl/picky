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
        const result = await pool.query(`SELECT m.pseudo, m.profile_picture, b.created_at,
        json_agg((b.betaseries_id,b.title,b.platform,b.poster)) bookmark
        FROM member AS m
        JOIN bookmark AS b
        ON m.id = b.member_id
        WHERE member_id = $1
        GROUP BY b.title,m.pseudo, m.profile_picture,b.created_at
		ORDER BY b.created_at;`, [memberId]);
        return result.rows;
    },

    async getPlatformByMember(memberId) {
        const result = await pool.query(`SELECT m.*, 
		array_agg(DISTINCT p.name) AS platform_name,
		array_agg(DISTINCT p.logo) AS platform_logo
        FROM member AS m
        JOIN platform_has_member AS phm
        ON m.id = phm.member_id
		JOIN platform as p
		ON p.id = phm.platform_id
        WHERE member_id = $1
        GROUP BY m.id;`, [memberId]);
        return result.rows;
    },

    async post(platform_id, member_id) {
        const result = await pool.query(`INSERT INTO "platform_has_member" ("platform_id", "member_id") VALUES ($1,$2) RETURNING *`, [platform_id, member_id]);
        return result.rows[0];
    },

    async patch(member, id) {
        const result = await pool.query(`UPDATE "member" SET pseudo = $1, email = $2, password = $3, profile_picture = $4 WHERE id =$5 RETURNING *`, [member.pseudo, member.email, member.password, member.profile_picture, id]);
        return result.rows[0];
    },

    async delete(id) {
        const result = await pool.query(`SELECT * FROM delete_member($1)`, [id]);
        return result;
    }
};