const { Pool } = require('pg');

// pour se connecter sur Heroku

const pool = new Pool({
    connectionString:process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;