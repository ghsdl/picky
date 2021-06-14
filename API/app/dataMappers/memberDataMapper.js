const pool = require("../../database");

module.exports = {

    async get() {
        const result = await pool.query(`SELECT * FROM member ORDER BY id`);
        return result.rows;
    },

    async getOne(id) {
        const result = await pool.query(`SELECT * FROM member WHERE id = $1`, [id]);
        return result.rows[0];
    },

    async getBookmarkMember(memberId) {
        const result = await pool.query(`SELECT m.*, 
        array_agg(DISTINCT w.betaseries_id) AS betaseries_id,
        array_agg(DISTINCT w.title) AS title,
        array_agg(DISTINCT w.platform) AS platform,
        array_agg(DISTINCT w.poster) AS poster
        FROM member AS m
        JOIN bookmark AS w
        ON m.id = w.member_id
        WHERE member_id = $1
        GROUP BY m.id;`, [memberId]);
        return result.rows;
    },

    async patch(data, memberId) {

        const result = await pool.query(`SELECT * FROM update_member($1)`, [data]);
        return result.rows[0];

        /*const result = await pool.query(`UPDATE "member" SET pseudo = $1, email = $2, password = $3, profile_picture = $4 WHERE id =$5 RETURNING *`, [data.pseudo, data.email, data.password, data.profile_picture, memberId]);
        return result.rows[0];*/
    },

    async delete(id) {
        const result = await pool.query(`SELECT * FROM delete_member($1)`, [id]);
        return result;
    }
};
 




