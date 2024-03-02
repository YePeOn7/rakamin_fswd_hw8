const pool = require('../db_config/db_config.js');
const router = require('express').Router()

// get all category
router.get("/", (req, res) => {
    pool.query(`
    SELECT *
    FROM category`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        }
        else {
            res.send(result.rows);
        }
    });
});

module.exports = router;