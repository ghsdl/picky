const { Pool } = require('pg');

// pour se connecter sur Heroku décommenter
// pour se connecter en local commenter

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

<<<<<<< HEAD
module.exports = pool;
=======
module.exports = pool();
*/
>>>>>>> 0e235295c1f6c4053bb31f5dfa4b5077995209ca
