/*const pool = require('../../database');*/
const fetch = require('node-fetch');

module.exports = {
  
  async get() {
    const apiUrl = 'https://api.betaseries.com/platforms/list?key=e7da6c21d678';
    const response = await fetch(apiUrl);
    let body = await response.json();
    if (!Array.isArray(body)) {
      body = [body];
    }
    return body;
  },

  // V2 IF WE DECIDE TO INCLUDE SVODS TO USERS DIRECTLY
  /*
  async getOne(id) {
    const result = await pool.query(`SELECT * FROM platform WHERE id =$1`, [id]);
    return result.rows[0];
  },
  */

  // V2 IF WE DECIDE TO INCLUDE SVODS TO USERS DIRECTLY
  /*
  async patch(newData) {
    const result = await pool.query(`SELECT * FROM update_platform($1)`, [newData]);
    return result.rows[0];
  },
  */

  // V2 IF WE DECIDE TO INCLUDE SVODS TO USERS DIRECTLY
  /*
  async delete(id) {
    const result = await pool.query(`SELECT * FROM delete_platform($1)`, [id]);
    return result;
  },
  */
};