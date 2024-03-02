const router = require('express').Router();

router.get("/", (req, res) => {
    res.send("get film test");
});

module.exports = router;