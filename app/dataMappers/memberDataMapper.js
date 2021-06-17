const pool = require('../../database');

module.exports = {

    async getAll() {
        const result = await pool.query(`SELECT * FROM member ORDER BY id`);
        return result.rows;
    },

    async getOne(id) {
        const result = await pool.query(`SELECT * FROM member WHERE id = $1`, [id]);
        return result.rows[0];
    },

    async getBookmarkMember(memberId) {
        const result = await pool.query(`SELECT m.*, 
        array_agg(DISTINCT b.betaseries_id) AS betaseries_id,
        array_agg(DISTINCT b.title) AS title,
        array_agg(DISTINCT b.platform) AS platform,
        array_agg(DISTINCT b.poster) AS poster
        FROM member AS m
        JOIN bookmark AS b
        ON m.id = b.member_id
        WHERE member_id = $1
        GROUP BY m.id;;`, [memberId]);
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

    async patch(data, memberId) {
        const result = await pool.query(`SELECT * FROM update_member($1)`, [data]);
        return result.rows[0];
    },

    async delete(id) {
        const result = await pool.query(`SELECT * FROM delete_member($1)`, [id]);
        return result;
    }
};