const router = require('express').Router();
const routerFilm = require('./film_route.js');
const routerCategory = require('./category_route.js');

router.use("/api/film", routerFilm);
router.use("/api/category", routerCategory);

module.exports = router;