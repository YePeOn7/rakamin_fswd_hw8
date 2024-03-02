const router = require('express').Router();
const pool = require('../db_config/db_config.js');

// get all film list
router.get("/", (req, res) => {
    pool.query(`
    SELECT film.*, json_agg(category.*) AS film_category
    FROM film
    JOIN film_category ON film.film_id = film_category.film_id
    JOIN category ON film_category.category_id = category.category_id
    GROUP BY film.film_id;`, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({message: "Internal Server Error"});
        }
        else {
            res.send(result.rows);
        }
    });
});

// get film by id
router.get("/id/:id", (req, res) => {
    pool.query(`
    SELECT film.*, json_agg(category.*) AS film_category
    FROM film
    JOIN film_category ON film.film_id = film_category.film_id
    JOIN category ON film_category.category_id = category.category_id
    WHERE ${req.params.id} = film.film_id
    GROUP BY film.film_id;`, (err, result) => {
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