const router = require('express').Router();
const pool = require('../db_config/db_config.js');

// ------------------ question to mentor ------------------ //
// here i try to show all available column on the table when perform query. Is it good or bad?
// i by pass everything to front end, later on the front end could process it easier. just choose whatever they need.
// but seems there is a drawback by doing such a thing in bandwidth utilization eficiency.
// what is the common way to implement it?

// get all film list.
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

// get film by id.
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

// get film by film_id.
router.get("/category_id/:id", (req, res) => {
    pool.query(`
    SELECT film.*, json_agg(category.*) AS film_category
    FROM film
    JOIN film_category ON film.film_id = film_category.film_id
    JOIN category ON film_category.category_id = category.category_id
    WHERE ${req.params.id} = category.category_id
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