const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "12345678",
    database: "dvdrental",
    host: "localhost",
    port: 5432,
})

module.exports = pool;
