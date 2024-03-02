const router = require('express').Router();
const routerFilm = require('./film_route.js');

router.use("/api/film", routerFilm);

module.exports = router;