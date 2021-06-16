const { Pool } = require('pg');

module.exports = new Pool();


// pour se connecter sur Heroku
/*const { Pool } = require('pg');

const pool = new Pool({
    ssl: {
        rejectUnauthorized: false
    }
});*/
