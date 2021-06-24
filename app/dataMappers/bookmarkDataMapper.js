const pool = require('../../database');

module.exports = {

    async get() {
        const result = await pool.query(`SELECT * FROM bookmark ORDER BY id`);
        return result.rows;
    },

    async getOne(id) {
        const result = await pool.query(`SELECT * FROM bookmark WHERE id = $1`, [id]);
        return result.rows[0];
    },

    async add(bookmark) {
        // CREATING NEW USER IN DATABASE
        const addedBookmark = await pool.query(
            `INSERT INTO bookmark (betaseries_id, title, platform, poster, member_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [bookmark.betaseries_id, bookmark.title, bookmark.platform, bookmark.poster, bookmark.member_id]);
        
        return addedBookmark.rows[0];

        /*const result = await pool.query(`SELECT * FROM add_bookmark($1)`, [bookmark]);
        return result.rows[0];*/
    },

    /*async patch(data, BookmarkId) {

        const result = await pool.query(`UPDATE "bookmark" SET betaseries_id = $1, title = $2, platform = $3, poster = $4, member_id = $5 WHERE id =$6 RETURNING *`, [data.betaseries_id, data.title, data.platform, data.poster, data.member_id, BookmarkId]);
        return result.rows[0];
    },*/

    async delete(id) {
        const result = await pool.query(`SELECT * FROM delete_bookmark($1)`, [id]);
        return result;
    }
}